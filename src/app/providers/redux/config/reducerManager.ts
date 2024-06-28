import { combineReducers } from "@reduxjs/toolkit";
import { IReducerManager, StateSchema, StateSchemaKey } from "app/providers/redux/config/StateSchema";
import type { ReducersMapObject } from "redux";

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): IReducerManager {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: Array<StateSchemaKey> = []

    return {
        getReducerMap: () => reducers,
        reduce: (state, action) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            // @ts-ignore
            return combinedReducer(state, action);
        },

        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },

        remove: (key) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        }
    }
}