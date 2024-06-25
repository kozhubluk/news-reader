import { classNames } from 'shared/lib/classNames/classNames'

interface LoginFormProps {
    className?: string
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { className } = props
    return <div className={classNames(styles.LoginForm, {}, [className])}>
    </div>
}