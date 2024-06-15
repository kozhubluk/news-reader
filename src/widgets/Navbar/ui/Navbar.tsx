import * as styles from "./Navbar.module.scss";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

interface NavbarProps {
    classname?: string
}

export const Navbar: React.FC<NavbarProps> = ({classname}) => {
    return <div className={classNames(styles.navbar, {}, [styles[classname]])}>
        <AppLink to="/">Гл</AppLink>
        <AppLink to="/info">Инф</AppLink>
        <ThemeSwitcher/>
    </div>
}