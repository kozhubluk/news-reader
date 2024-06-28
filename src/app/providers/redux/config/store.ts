import {
    configureStore,
    Reducer
} from "@reduxjs/toolkit";
import {
    StateSchema,
    StoreWithReducerManger,
    ThunkExtraArgs
} from "app/providers/redux/config/StateSchema";
import { userReducer } from "enities/user";
import { createReducerManager } from "app/providers/redux/config/reducerManager";
import { apiInstance } from "shared/api/api";

const reducer = {
    user: userReducer
}

const reducerManager = createReducerManager(reducer)

const extraArgs: ThunkExtraArgs = {
    api: apiInstance
}

export const store =  configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: IS_DEV,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs,
            },
        })
})

const extendedStore = store as StoreWithReducerManger;

extendedStore.reducerManager  = reducerManager

export type AppDispatch = typeof store.dispatch
