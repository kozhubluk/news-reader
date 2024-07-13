import { StateSchema } from "app/providers/redux/config/StateSchema";

export const selectProfileState = (state: StateSchema) => {
    return state.profile ||
        { profile: { username: '', name: '', surname: '' }, error: {}, loading: { update: false, fetch: false } }
}