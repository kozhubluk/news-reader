import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { memo, ReactNode } from "react";

interface AppLinkProps extends LinkProps {
    className?: string
    children?: ReactNode | string
}

export const AppLink = memo(function AppLink(props: AppLinkProps)  {
    const { className, children, to, ...otherProps } = props
    return <Link to={to} 
        {...otherProps} 
        className={classNames(styles.link, {}, [className])}>
        {children}
    </Link>
})
