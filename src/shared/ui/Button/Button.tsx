import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Button.module.scss'
import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme
}

export enum ButtonTheme {
    OUTLINE = 'outline'
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, className,theme, ...otherProps } = props
    return <button
        className={classNames(styles.Button, {},
            [className, styles[theme]])} {...otherProps}>
        {children}
    </button>
}