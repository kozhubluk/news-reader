import './styles/index.scss';
import {useTheme} from "app/providers/theme/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRoutes} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";
import {Suspense} from 'react';

export function App() {
    const {theme} = useTheme();

    return <div className={classNames("app", {}, [theme])}>
        <Suspense fallback="loading">
            <Navbar/>
        </Suspense>
        <LangSwitcher/>
        <div className='content'>
            <Sidebar/>
            <AppRoutes/>
        </div>
    </div>

}