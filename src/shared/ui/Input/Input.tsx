import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Input.module.scss'
import { ChangeEvent, InputHTMLAttributes, memo, useCallback } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    value?: string
}

export const Input = memo(function Input(props: InputProps) {
    const { className, value, type = 'text', ...otherProps } = props

    return <input className={classNames(styles.Input, {}, [className])}
        value={value}
        type={type}
        {...otherProps}
    />
});