import { Field, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@ObjectType()
@Entity()
export class Reply extends BaseEntity {
    @Field()
    @Column({ default: false })
    liked: boolean;

    @Field()
    @PrimaryColumn()
    userId: number;

    @ManyToOne(() => User, (user) => user.replies)
    user: User;

    @Field()
    @PrimaryColumn()
    postId: number;

    @ManyToOne(() => Post, (post) => post.replies)
    post: Post;
}
