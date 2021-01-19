import { User } from "../../entities/User";
import { ObjectType, Field } from "type-graphql";
import { FieldError, Success } from "./matchingtypes/FieldError";
@ObjectType()
export class UserResponse {
    @Field(() => [Success], { nullable: true })
    success?: Success[];

    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => User, { nullable: true })
    user?: User;
}

@ObjectType()
export class boolResponse {
    @Field(() => [Success], { nullable: true })
    success?: Success[];

    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Boolean, { nullable: true })
    result?: Boolean;
}
