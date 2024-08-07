import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Sidebar.module.scss'
import { memo, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
    const [hidden, setHidden] = useState<boolean>(false)
    const { t } = useTranslation()

    function toggleSidebar (): void {
        setHidden(prev => !prev)
    }
    return <div className={classNames(styles.sidebar,
        { [styles.hidden]: hidden },
        [className])}>
        <Button onClick={toggleSidebar}>{t('Toggle')}</Button>
    </div>
})
