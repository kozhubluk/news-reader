import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Sidebar.module.scss'
import { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const [hidden, setHidden] = useState<boolean>(false)

    function toggleSidebar (): void {
        setHidden(prev => !prev)
    }
    return <div className={classNames(styles.sidebar, { [styles.hidden]: hidden }, [styles[className]])}>
        <Button onClick={toggleSidebar}>Toggle</Button>
    </div>
}
