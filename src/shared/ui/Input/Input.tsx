import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Input.module.scss'
import { ChangeEvent, InputHTMLAttributes } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input: React.FC<InputProps> = (props) => {
    const { className, onChange, value, type = 'text', ...otherProps } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return <input className={classNames(styles.Input, {}, [className])}
        value={value}
        type={type}
        onChange={onChangeHandler}
        {...otherProps}
    />
}