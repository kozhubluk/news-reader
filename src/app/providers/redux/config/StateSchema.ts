import { UserSchema } from "enities/user";
import { LoginSchema } from "features/auth/model/types/LoginSchema";

export interface StateSchema {
    user: UserSchema
    login: LoginSchema
}