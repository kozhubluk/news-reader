import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/redux/config/StateSchema";
import type { ReducersMapObject } from "redux";
import { userReducer } from "enities/user";
import { createReducerManager } from "app/providers/redux/config/reducerManager";

export const createReduxStore = () => {
    const reducer: ReducersMapObject<StateSchema> = {
        user: userReducer
    }

    const reducerManager = createReducerManager(reducer)
    
    const store =  configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: IS_DEV
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
// const { dispatch, getState } = createReduxStore();
// export type AppDispatch = typeof dispatch
// export type RootState = ReturnType<typeof getState>