import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { StateSchemaKey, StoreWithReducerManger } from "app/providers/redux/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

interface DynamicReducerLoaderProps {
    keyName: StateSchemaKey
    reducer: Reducer
    children: ReactNode
    removeAfterUnmount?: boolean
}

export const DynamicReducerLoader: React.FC<DynamicReducerLoaderProps> = (props) => {
    const { children, keyName, reducer, removeAfterUnmount = true } = props

    const store = useStore() as StoreWithReducerManger

    useEffect(() => {
        store.reducerManager.add(keyName, reducer)

        // удаляем при демонтировании
        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove('login')
            }
        }
    }, []);

    return <>
        {children}
    </>
}
