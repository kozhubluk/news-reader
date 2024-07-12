import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Input.module.scss'
import { InputHTMLAttributes, memo } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    value?: string
    error?: boolean
}

enum InputTheme {
    ERROR = 'error'
}

export const Input = memo(function Input(props: InputProps) {
    const {
        className,
        value,
        error,
        type = 'text',
        ...otherProps
    } = props

    return <input className={classNames(styles.Input, { [styles[InputTheme.ERROR]]: error }, [className])}
        value={value}
        type={type}
        {...otherProps}
    />
});