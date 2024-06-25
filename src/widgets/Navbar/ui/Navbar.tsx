import * as styles from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from "react-redux";
import { selectUserState } from "enities/user/model/selectors/selectUserState";
import { logout } from "enities/user/model/slice/userSlice";
import { Button } from "shared/ui/Button/Button";

interface NavbarProps {
    classname?: string
}

export const Navbar: React.FC<NavbarProps> = ({ classname }) => {
    const { t } = useTranslation()
    const userData = useSelector(selectUserState)
    const dispatch = useDispatch();

    if (!userData) {
        return <div className={classNames(styles.navbar, {}, [styles[classname]])}>
            <ThemeSwitcher/>
        </div>
    }

    const onLogoutClick = () => {
        dispatch(logout())
    }

    return <div className={classNames(styles.navbar, {}, [styles[classname]])}>
        <AppLink to="/">{t('Главная страница')}</AppLink>
        <AppLink to="/info">{t('Информация')}</AppLink>
        <ThemeSwitcher/>
        <Button onClick={onLogoutClick}>Выйти</Button>
    </div>
}
