import { StateSchema } from "app/providers/redux/config/StateSchema";

export const selectUserData = (state: StateSchema) => {
    return state.user.authUser
}