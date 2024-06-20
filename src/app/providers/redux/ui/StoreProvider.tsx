import React from "react"
import { Provider } from 'react-redux'
import { createReduxStore } from "app/providers/redux/config/store";

interface ProviderProps {
    children?: React.ReactNode
}

export const StoreProvider: React.FC<ProviderProps> = (props) => {
    const { children } = props
    const store = createReduxStore();

    return <Provider store={store}>
        {children}
    </Provider>
}