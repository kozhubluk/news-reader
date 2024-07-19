import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Text.module.scss'
import { HTMLAttributes, memo, ReactNode } from 'react'

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children?: string | ReactNode
    theme?: TextTheme
    size?: TextSize
}

export enum TextTheme {
    BOLD = 'bold',
    ITALIC = 'italic',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error',
}

export enum TextSize {
    SMALL = 'small',
    MIDDLE = 'middle',
    LARGE = 'large',
    EXTRA_LARGE = 'extraLarge'
}

export const Text = memo(function Text(props: TextProps) {
    const {
        children,
        className,
        theme = TextTheme.PRIMARY,
        size = TextSize.MIDDLE,
        ...otherProps
    } = props

    return <div
        className={classNames(styles.Text, {},
            [className, styles[size], styles[theme]])} {...otherProps}>
        {children}
    </div>
})

