import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Input.module.scss'
import { ChangeEvent, InputHTMLAttributes, memo, useCallback } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input = memo(function Input(props: InputProps) {
    const { className, onChange, value, type = 'text', ...otherProps } = props

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }, [onChange])

    return <input className={classNames(styles.Input, {}, [className])}
        value={value}
        type={type}
        onChange={onChangeHandler}
        {...otherProps}
    />
});