import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from 'react';
import {useTheme} from "app/providers/theme/lib/useTheme";
import {classnames} from "shared/lib/classnames/classnames";
import {MainPage} from "pages/MainPage";
import {InfoPage} from "pages/InfoPage";

export function App() {
    const {theme, toggleTheme} = useTheme();

    return <div className={classnames("app", {}, [theme])}>
        <Link to="/">Гл</Link>
        <Link to="/info">Инф</Link>
        <Suspense>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/info' element={<InfoPage/>}></Route>
            </Routes>
        </Suspense>
        <button onClick={toggleTheme}>button!!</button>
    </div>

}