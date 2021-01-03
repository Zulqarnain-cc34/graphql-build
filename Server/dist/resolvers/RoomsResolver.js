"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomResolver = void 0;
const isAuth_1 = require("./../middlewares/isAuth");
const Rooms_1 = require("../entities/Rooms");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const RoomsObject_1 = require("./Objecttypes/RoomsObject");
let RoomResolver = class RoomResolver {
    Rooms() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Rooms_1.Rooms.find({});
        });
    }
    getRooms(limit, cursor, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = yield typeorm_1.getConnection()
                .getRepository(Rooms_1.Rooms)
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
                rooms: yield qb.getMany(),
                success: [{ field: "Rooms", message: "Rooms successfully found" }],
            };
        });
    }
    updateRoom(prevname, newname, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { id: req.session.userId } });
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
                const updateResult = yield Rooms_1.Rooms.update({ adminId: user.id, Roomname: prevname }, { Roomname: newname });
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
            }
            catch (error) {
                if (error.code === "23505") {
                    return {
                        errors: [
                            {
                                field: "Duplicate name",
                                message: error.detail,
                            },
                        ],
                    };
                }
                else {
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
        });
    }
    deleteRoom(name, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResult = yield Rooms_1.Rooms.delete({
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
        });
    }
    joinRoom(roomid, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            let insertedResult;
            try {
                insertedResult = yield typeorm_1.getConnection().query(`
            insert into members("userId","roomId")values($1,$2)
        `, [req.session.userId, roomid]);
            }
            catch (error) {
                if (error.code === "23505") {
                    return {
                        updated: false,
                        errors: [
                            {
                                field: "Rooms",
                                message: "duplicate key error user already a member of the group",
                            },
                        ],
                    };
                }
                else {
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
                    yield typeorm_1.getConnection().query(`
                    update from rooms
                    set members=member+1
                    where id=$1
                `, [roomid]);
                }
                catch (error) {
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
        });
    }
    createRoom(name, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const result = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(Rooms_1.Rooms)
                    .values({
                    Roomname: name,
                    adminId: req.session.userId,
                })
                    .returning("*")
                    .execute();
                room = result.raw[0];
                console.log(room);
            }
            catch (error) {
                if (error.code === "23505") {
                    return {
                        errors: [
                            {
                                field: "Duplicate name",
                                message: error.detail,
                            },
                        ],
                    };
                }
                else {
                    return {
                        errors: [{ field: "Error", message: error.detail }],
                    };
                }
            }
            if (room) {
                try {
                    yield typeorm_1.getConnection().query(`
            insert into members("userId","roomId")values($1,$2)
        `, [req.session.userId, room.id]);
                }
                catch (err) {
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
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Rooms_1.Rooms]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "Rooms", null);
__decorate([
    type_graphql_1.Query(() => RoomsObject_1.RoomsResponse),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("limit", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("cursor", () => String, { nullable: true })),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "getRooms", null);
__decorate([
    type_graphql_1.Mutation(() => RoomsObject_1.boolRoomResponse),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("prevname", () => String)),
    __param(1, type_graphql_1.Arg("newname", () => String)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "updateRoom", null);
__decorate([
    type_graphql_1.Mutation(() => RoomsObject_1.boolRoomResponse),
    __param(0, type_graphql_1.Arg("name", () => String)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "deleteRoom", null);
__decorate([
    type_graphql_1.Mutation(() => RoomsObject_1.boolRoomResponse),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("roomId", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "joinRoom", null);
__decorate([
    type_graphql_1.Mutation(() => RoomsObject_1.RoomResponse),
    __param(0, type_graphql_1.Arg("name", () => String)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RoomResolver.prototype, "createRoom", null);
RoomResolver = __decorate([
    type_graphql_1.Resolver(Rooms_1.Rooms)
], RoomResolver);
exports.RoomResolver = RoomResolver;
//# sourceMappingURL=RoomsResolver.js.map