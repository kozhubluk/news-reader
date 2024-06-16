import * as styles from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    classname?: string
}

export const Navbar: React.FC<NavbarProps> = ({ classname }) => {
    const { t } = useTranslation()

    return <div className={classNames(styles.navbar, {}, [styles[classname]])}>
        <AppLink to="/">{t('Главная страница')}</AppLink>
        <AppLink to="/info">{t('Информация')}</AppLink>
        <ThemeSwitcher/>
    </div>
}
