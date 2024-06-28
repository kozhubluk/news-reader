import * as styles from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { useSelector } from "react-redux";
import { selectUserState } from "enities/user/model/selectors/selectUserState";
import { logout } from "enities/user/model/slice/userSlice";
import { Button } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useDispatch";
import { memo, useCallback } from "react";

interface NavbarProps {
    classname?: string
}

export const Navbar = memo(function Navbar({ classname } : NavbarProps) {
    const { t } = useTranslation()
    const userData = useSelector(selectUserState)
    const dispatch = useAppDispatch();

    const onLogoutClick = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    if (!userData) {
        return <div className={classNames(styles.navbar, {}, [classname])}>
            <ThemeSwitcher/>
        </div>
    }
    
    return <div className={classNames(styles.navbar, {}, [classname])}>
        <AppLink to="/">{t('Главная страница')}</AppLink>
        <AppLink to="/info">{t('Информация')}</AppLink>
        <AppLink to="/profile">{t('Профиль')}</AppLink>
        <ThemeSwitcher/>
        <Button onClick={onLogoutClick}>Выйти</Button>
    </div>
})
