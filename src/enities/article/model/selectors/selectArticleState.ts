import { StateSchema } from "app/providers/redux/config/StateSchema";

export const selectArticleState = (state: StateSchema) => {
    return state.article || { isLoading: false }
}