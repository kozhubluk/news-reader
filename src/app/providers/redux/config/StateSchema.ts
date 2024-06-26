import { UserSchema } from "enities/user";
import { LoginSchema } from "features/auth/model/types/LoginSchema";
import { AnyAction, EnhancedStore, Reducer } from "@reduxjs/toolkit";
import { ReducersMapObject } from "redux";

export interface StateSchema {
    user: UserSchema
    login?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema


export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    reduce: (state: StateSchema, action: AnyAction) => StateSchema
}

export interface StoreWithReducerManger extends EnhancedStore<StateSchema> {
    reducerManager: IReducerManager
}