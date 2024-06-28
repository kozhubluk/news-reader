import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { StateSchemaKey, StoreWithReducerManger } from "app/providers/redux/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import { useAppDispatch } from "shared/lib/hooks/useDispatch";

interface DynamicReducerLoaderProps {
    keyName: StateSchemaKey
    reducer: Reducer
    children: ReactNode
    removeAfterUnmount?: boolean
}

export const DynamicReducerLoader: React.FC<DynamicReducerLoaderProps> = (props) => {
    const { children, keyName, reducer, removeAfterUnmount = true } = props
    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithReducerManger

    useEffect(() => {
        dispatch({ type: `CREATE ${keyName}`  })
        store.reducerManager.add(keyName, reducer)

        // удаляем при демонтировании
        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove('login' )
                dispatch({ type: `DESTROY ${keyName}`  })
            }
        }
    }, []);

    return <>
        {children}
    </>
}
