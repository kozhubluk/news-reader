import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './LoginForm.module.scss'
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { loginReducer, setPassword, setUsername } from "features/auth/model/slice/loginSlice";
import { authUserByUsername } from "features/auth/model/services/authUserByUsername";
import { selectLoginState } from "features/auth/model/selectors/selectLoginState";
import { DynamicReducerLoader } from "shared/ui/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "shared/lib/hooks/useDispatch";
import { memo, useCallback } from "react";

interface LoginFormProps {
    className?: string
    onSuccessLogin?: () => void
}

const LoginForm = memo(function LoginForm(props: LoginFormProps) {
    const { className, onSuccessLogin } = props
    const { username, password, error, loading } = useSelector(selectLoginState)

    const dispatch = useAppDispatch()

    const onChangeUsername = useCallback((value: string) => {
        dispatch(setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(setPassword(value))
    }, [dispatch])

    const onAuth = useCallback(async () => {
        const response = await dispatch(authUserByUsername({ username, password }))
        if (response.meta.requestStatus === 'fulfilled') {
            if (onSuccessLogin) onSuccessLogin()
        }
    }, [dispatch, username, password, onSuccessLogin])

    return <DynamicReducerLoader
        keyName={'login'}
        reducer={loginReducer}
        removeAfterUnmount={true}
    >
        <div className={classNames(styles.LoginForm, {}, [className])}>
            {error && 'не удалось авторизоваться'}
            {loading}
            <Input
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                type='text'
                value={password}
                onChange={onChangePassword}
            />
            <Button onClick={onAuth} disabled={loading}>Войти</Button>
        </div>
    </DynamicReducerLoader>
})

export default LoginForm