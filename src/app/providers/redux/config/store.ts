import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/redux/config/StateSchema";
import { counterReducer } from "enities/counter";

export const createReduxStore = () => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: IS_DEV
    })
}

// const { dispatch, getState } = createReduxStore();
// export type AppDispatch = typeof dispatch
// export type RootState = ReturnType<typeof getState>