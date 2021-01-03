import { Field, ObjectType } from "type-graphql";
import {
    Entity,
    BaseEntity,
    ManyToOne,
    PrimaryColumn,
    CreateDateColumn,
} from "typeorm";
import { Rooms } from "./Rooms";
import { User } from "./User";

@ObjectType()
@Entity()
export class Members extends BaseEntity {
    @Field(() => Date)
    @CreateDateColumn()
    joined: Date;

    @Field()
    @PrimaryColumn()
    userId: number;

    @ManyToOne(() => User, (user) => user.users)
    user: User;

    @Field()
    @PrimaryColumn()
    roomId: number;

    @ManyToOne(() => Rooms, (room) => room.rooms)
    room: Rooms;
}
