import { isAuth } from "./../middlewares/isAuth";
import { Rooms } from "../entities/Rooms";
import {
    Arg,
    Ctx,
    Query,
    Mutation,
    Resolver,
    UseMiddleware,
    Int,
} from "type-graphql";
import { MyContext } from "../types";
import { getConnection } from "typeorm";
import { User } from "../entities/User";
import {
    RoomResponse,
    RoomsResponse,
    boolRoomResponse,
} from "./Objecttypes/RoomsObject";

@Resolver(Rooms)
export class RoomResolver {
    @Query(() => [Rooms])
    async Rooms(): Promise<Rooms[]> {
        return await Rooms.find({});
    }

    @Query(() => RoomsResponse)
    @UseMiddleware(isAuth)
    async getRooms(
        @Arg("limit", () => Int) limit: number,
        @Arg("cursor", () => String, { nullable: true }) cursor: string,
        @Ctx() { req }: MyContext
    ): Promise<RoomsResponse> {
        const qb = await getConnection()
            .getRepository(Rooms)
            .createQueryBuilder("r")
            .where('"adminId"=:id', { id: req.session.userId })
            .orderBy('"createdAt"', "DESC")
            .take(limit);

        if (cursor) {
            qb.andWhere('"createdAt" > :cursor ', {
                cursor: new Date(parseInt(cursor)),
            });
        }

        return {
            rooms: await qb.getMany(),
            success: [{ field: "Rooms", message: "Rooms successfully found" }],
        };
    }

    @Mutation(() => boolRoomResponse)
    @UseMiddleware(isAuth)
    async updateRoom(
        @Arg("prevname", () => String) prevname: string,
        @Arg("newname", () => String) newname: string,

        @Ctx() { req }: MyContext
    ): Promise<boolRoomResponse> {
        const user = await User.findOne({ where: { id: req.session.userId } });

        if (newname.length > 100) {
            return {
                errors: [
                    {
                        field: "RoomName",
                        message: "Name is too long more than 100 characters",
                    },
                ],
            };
        }

        if (!user) {
            return {
                errors: [
                    {
                        field: "User",
                        message: "User doesnot exist",
                    },
                ],
            };
        }
        try {
            const updateResult = await Rooms.update(
                { adminId: user.id, Roomname: prevname },
                { Roomname: newname }
            );

            if (updateResult.affected === 1) {
                return {
                    updated: true,
                    success: [
                        {
                            field: "RoomName",
                            message: "Succesfully updated Roomname",
                        },
                    ],
                };
            }
        } catch (error) {
            if (error.code === "23505") {
                return {
                    errors: [
                        {
                            field: "Duplicate name",
                            message: error.detail,
                        },
                    ],
                };
            } else {
                return {
                    errors: [
                        {
                            field: "Error",
                            message: error.detail,
                        },
                    ],
                };
            }
        }

        return {
            errors: [
                {
                    field: "RoomName",
                    message: "Unsuccessful,Room name not updated",
                },
            ],
        };
    }
    @Mutation(() => boolRoomResponse)
    async deleteRoom(
        @Arg("name", () => String) name: string,
        @Ctx() { req }: MyContext
    ): Promise<boolRoomResponse> {
        const deleteResult = await Rooms.delete({
            adminId: req.session.userId,
            Roomname: name,
        });

        if (deleteResult.affected == 1) {
            return {
                updated: true,
                success: [
                    { field: "Rooms", message: "Room deleted successfully" },
                ],
            };
        }

        return {
            errors: [{ field: "Rooms", message: "Room deletion unsuccessful" }],
        };
    }
    @Mutation(() => boolRoomResponse)
    @UseMiddleware(isAuth)
    async joinRoom(
        @Arg("roomId", () => Int) roomid: number,
        @Ctx() { req }: MyContext
    ): Promise<boolRoomResponse> {
        let insertedResult;
        try {
            insertedResult = await getConnection().query(
                `
            insert into members("userId","roomId")values($1,$2)
        `,
                [req.session.userId, roomid]
            );
        } catch (error) {
            if (error.code === "23505") {
                return {
                    updated: false,
                    errors: [
                        {
                            field: "Rooms",
                            message:
                                "duplicate key error user already a member of the group",
                        },
                    ],
                };
            } else {
                return {
                    updated: false,
                    errors: [
                        { field: "insertionError", message: error.detail },
                    ],
                };
            }
        }

        if (insertedResult[1] === 1) {
            try {
                await getConnection().query(
                    `
                    update from rooms
                    set members=member+1
                    where id=$1
                `,
                    [roomid]
                );
            } catch (error) {
                return {
                    updated: false,
                    errors: [{ field: "updationError", message: error.detail }],
                };
            }
        }
        return {
            updated: true,
            success: [{ field: "Rooms", message: "Successfully joined room" }],
        };
    }
    @Mutation(() => RoomResponse)
    async createRoom(
        @Arg("name", () => String) name: string,
        @Ctx() { req }: MyContext
    ): Promise<RoomResponse> {
        if (name.length > 100) {
            return {
                errors: [
                    {
                        field: "Name",
                        message: "Name is too long more than 100 characters",
                    },
                ],
            };
        }

        let room;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Rooms)
                .values({
                    Roomname: name,
                    adminId: req.session.userId,
                })
                .returning("*")
                .execute();

            room = result.raw[0];
            console.log(room);
        } catch (error) {
            if (error.code === "23505") {
                return {
                    errors: [
                        {
                            field: "Duplicate name",
                            message: error.detail,
                        },
                    ],
                };
            } else {
                return {
                    errors: [{ field: "Error", message: error.detail }],
                };
            }
        }
        if (room) {
            try {
                await getConnection().query(
                    `
            insert into members("userId","roomId")values($1,$2)
        `,
                    [req.session.userId, room.id]
                );
            } catch (err) {
                return {
                    errors: [{ field: "InsertionError", message: err.detail }],
                };
            }
            return { rooms: room };
        }

        return {
            errors: [
                {
                    field: "RoomCreation",
                    message: "Room unable to create",
                },
            ],
        };
    }
}
