import { Field, ObjectType } from "type-graphql";
import { Entity, BaseEntity, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@ObjectType()
@Entity()
export class Reply extends BaseEntity {
    @Field()
    @PrimaryColumn()
    userId: number;

    @ManyToOne(() => User, (user) => user.replies)
    users: User;

    @Field()
    @PrimaryColumn()
    postId: number;

    @ManyToOne(() => Post, (post) => post.replies)
    posts: Post;
}
