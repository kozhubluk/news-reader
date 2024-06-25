import './styles/index.scss'
import { useTheme } from 'app/providers/theme/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRoutes } from 'app/providers/routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import React, { Suspense, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from "features/auth/ui/LoginModal/LoginModal";
import { useDispatch } from "react-redux";
import { initUserData } from "enities/user/model/slice/userSlice";

export const App: React.FC = () => {
    const { theme } = useTheme()
    const [open, setOpen] = useState<boolean>(false);
    const close = () => {
        setOpen(false);
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initUserData())
    }, [dispatch]);


    return <div className={classNames('app', {}, [theme])}>
        <Suspense fallback="loading">
            <Navbar/>
        </Suspense>
        <LangSwitcher/>
        <div className='content'>
            <Button onClick={()=>{setOpen(true)}}>открыть</Button>
            <LoginModal isOpen={open} onClose={close}/>
            <Sidebar/>
            <AppRoutes/>
        </div>
    </div>
}
