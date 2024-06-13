import * as styles from './App.module.scss';
import '../styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from 'react';
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {InfoPageAsync} from "../pages/InfoPage/InfoPage.async";
import ThemeProvider from "../theme/ThemeProvider";
import {useTheme} from "../theme/useTheme";
import {Theme} from "../theme/ThemeContext";

export function App() {
    const {theme, toggleTheme} = useTheme();

    return <div className={theme === Theme.LIGHT ? 'app' : 'app dark'}>
        <Link to="/">Гл</Link>
        <Link to="/info">Инф</Link>
        <Suspense>
            <Routes>
                <Route path='/' element={<MainPageAsync/>}></Route>
                <Route path='/info' element={<InfoPageAsync/>}></Route>
            </Routes>
        </Suspense>
        <button onClick={toggleTheme} className={styles.button}>button!!</button>
    </div>

}