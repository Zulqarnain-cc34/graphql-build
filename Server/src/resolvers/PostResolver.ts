import { Post } from "./../entities/Post";
import {
    Arg,
    Ctx,
    Int,
    Mutation,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { MyContext } from "../types";
import { isAuth } from "../middlewares/isAuth";
import { isRooms } from "../middlewares/isRooms";
import { PostResponse, PostsResponse } from "./Objecttypes/PostObject";

@Resolver(Post)
export class PostResolver {
    @Query(() => Post, { nullable: true })
    async post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
        return Post.findOne(id);
    }

    @Query(() => PostsResponse)
    @UseMiddleware(isAuth, isRooms)
    async posts(
        @Arg("limit", () => Int) limit: number,
        //@Arg("cursor", () => String, { nullable: true }) cursor: string | null,
        @Arg("roomId", () => Int) roomId: number
    ): Promise<PostsResponse> {
        const reallimit = Math.min(50, limit);

        const replacements: any[] = [];
        replacements.push(reallimit);

        //if (cursor) {
        //    replacements.push(new Date(parseInt(cursor)));
        //}  ${cursor ? `where p."createdAt"> $2` : ""}
        replacements.push(roomId);

        let posts;
        try {
            posts = await getConnection().query(
                `
            select p.*,
            json_build_object(
                'id', u.id,
                'createdAt', u."createdAt",
                'updatedAt', u."updatedAt",
                'username', u.username,
                'email', u.email
                ) creator
            from post p
            inner join public.user u on u.id=p.creatorid
            where p."roomId"=$2
            order by "createdAt" ASC
            limit $1
        `,
                replacements
            );
        } catch (err) {
            return { errors: [{ field: "posts", message: err.detail }] };
        }
        return {
            posts,
            success: [{ field: "posts", message: "Successfully queryed" }],
        };
    }

    @Mutation(() => PostResponse)
    @UseMiddleware(isAuth, isRooms)
    async createpost(
        @Arg("message", () => String) message: string,
        @Arg("roomId", () => Int) roomId: number,
        @Ctx() { req }: MyContext
    ): Promise<PostResponse> {
        if (!roomId) {
            return {
                errors: [{ field: "Room", message: "Room id is required" }],
            };
        }

        let post;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Post)
                .values({
                    message: message,
                    creatorid: req.session.userId,
                    roomId: roomId,
                })
                .returning("*")
                .execute();
            post = result.raw[0];
        } catch (err) {
            return {
                errors: [
                    { field: "PostError", message: "unable to create post" },
                ],
            };
        }
        return {
            post,
            success: [{ field: "Post", message: "Successfully Found posts" }],
        };
    }
    @Mutation(() => Post)
    async updatepost(
        @Arg("id", () => Int) id: number,
        @Arg("message", () => String, { nullable: true }) message: string
    ): Promise<Post | undefined> {
        const post = Post.findOne(id);
        if (!post) {
            return undefined;
        }
        if (typeof message !== "undefined") {
            await Post.update({ id }, { message });
        }
        return post;
    }

    @Mutation(() => Boolean)
    async deletepost(@Arg("id", () => Int) id: number): Promise<boolean> {
        await Post.delete(id);
        return true;
    }
}
