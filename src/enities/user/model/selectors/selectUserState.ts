import { StateSchema } from "app/providers/redux/config/StateSchema";

export const selectUserState = (state: StateSchema) => {
    return state.user.authUser
}