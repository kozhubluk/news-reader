import './styles/index.scss';
import {useTheme} from "app/providers/theme/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRoutes} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";

export function App() {
    const {theme} = useTheme();

    return <div className={classNames("app", {}, [theme])}>
        <Navbar/>
        <AppRoutes />
    </div>

}