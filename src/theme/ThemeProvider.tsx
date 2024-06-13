import React, {useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const initialTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme);

    const props = useMemo(() =>{
        return {
            theme,
            setTheme
        }
    }, [theme])

    return <ThemeContext.Provider value={props}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider;