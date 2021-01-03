import { Field, ID, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Members } from "./Members";
import { Post } from "./Post";
import { Reply } from "./Reply";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => Date)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => Date)
    @UpdateDateColumn()
    updatedAt: Date;

    @Field(() => String)
    @Column({ unique: true })
    username!: string;

    @Field(() => String)
    @Column({ unique: true })
    email!: string;
    //
    @Column({ unique: true })
    password!: string;

    @OneToMany(() => Post, (post) => post.creator)
    posts: Post[];

    @OneToMany(() => Reply, (reply) => reply.post)
    replies: Reply[];

    @OneToMany(() => Members, (member) => member.user)
    users: Members[];
    //@ManyToOne(() => Post, (post) => post.readers)
    ////reader: Post;

    //@Field()
    //@ManyToOne(() => Rooms, (room) => room.users)
    //room: Rooms;

    //@Field(() => [jsonObject])
    //@Column("simple-json", { array: true, nullable: true, default: {} })
    //roomsjoined!: jsonObject[];

    //@OneToMany(() => Rooms, (room) => room.users)
    //room: Rooms;
}
