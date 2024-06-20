import './styles/index.scss'
import { useTheme } from 'app/providers/theme/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRoutes } from 'app/providers/routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import React, { Suspense, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button } from 'shared/ui/Button/Button'

export const App: React.FC = () => {
    const { theme } = useTheme()
    const [open, setOpen] = useState<boolean>(true);
    const close = () => {
        setOpen(false);
    }


    return <div className={classNames('app', {}, [theme])}>
        <Suspense fallback="loading">
            <Navbar/>
        </Suspense>
        <LangSwitcher/>
        <div className='content'>
            <Button onClick={()=>{setOpen(true)}}>открыть</Button>
            <Modal isOpen={open} onClose={close}>
                Модальное
            </Modal>
            <Sidebar/>
            <AppRoutes/>
        </div>
    </div>
}
