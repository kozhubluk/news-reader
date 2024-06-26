import { StateSchema } from "app/providers/redux/config/StateSchema";

export const selectLoginState = (state: StateSchema) => {
    return state.login || {
        username: '',
        password: '',
        error: '',
        loading: false
    }
}