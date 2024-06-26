import './styles/index.scss'
import { useTheme } from 'app/providers/theme/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRoutes } from 'app/providers/routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from "features/auth/ui/LoginModal/LoginModal";
import { initUserData } from "enities/user/model/slice/userSlice";
import { useAppDispatch } from "shared/lib/hooks/useDispatch";

export const App: React.FC = () => {
    const { theme } = useTheme()
    const [open, setOpen] = useState<boolean>(false);

    const close = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(initUserData())
    }, [dispatch]);


    return <div className={classNames('app', {}, [theme])}>
        <Suspense fallback="loading">
            <Navbar/>
            <LangSwitcher/>
            <div className='content'>
                <Button onClick={()=>{setOpen(true)}}>открыть</Button>
                {open && <LoginModal isOpen={open} onClose={close}/>}
                <Sidebar/>
                <AppRoutes/>
            </div>
        </Suspense>

    </div>
}
