import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/redux/config/StateSchema";
import type { ReducersMapObject } from "redux";
import { userReducer } from "enities/user";
import { loginReducer } from "features/auth/model/slice/loginSlice";

export const createReduxStore = () => {
    const reducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        login: loginReducer
    }
    
    return configureStore<StateSchema>({
        reducer,
        devTools: IS_DEV
    })
}

// const { dispatch, getState } = createReduxStore();
// export type AppDispatch = typeof dispatch
// export type RootState = ReturnType<typeof getState>