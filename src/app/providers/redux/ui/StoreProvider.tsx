import React from "react"
import { Provider } from 'react-redux'
import { store } from "app/providers/redux/config/store";

interface ProviderProps {
    children?: React.ReactNode
}

export const StoreProvider: React.FC<ProviderProps> = (props) => {
    const { children } = props


    return <Provider store={store}>
        {children}
    </Provider>
}