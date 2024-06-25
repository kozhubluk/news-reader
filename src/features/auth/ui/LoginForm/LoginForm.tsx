import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './LoginForm.module.scss'
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setPassword, setUsername } from "features/auth/model/slice/loginSlice";
import { authUserByUsername } from "features/auth/model/services/authUserByUsername";
import { selectLoginState } from "features/auth/model/selectors/selectLoginState";

interface LoginFormProps {
    className?: string
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { className } = props

    const dispatch = useDispatch<any>()

    const { username, password, error, loading } = useSelector(selectLoginState)

    const onChangeUsername = (value: string) => {
        dispatch(setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(setPassword(value))
    }

    const onAuth = () => {
        dispatch(authUserByUsername({ username, password }))
    }

    return <div className={classNames(styles.LoginForm, {}, [className])}>
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
}