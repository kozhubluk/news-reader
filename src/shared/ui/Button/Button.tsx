import {classNames} from "shared/lib/classNames/classNames";
import * as styles from "./Button.module.scss";
import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {children, className, ...otherProps} = props;
    return <button className={classNames(styles.button, {}, [styles[className]])} {...otherProps}>
        {children}
    </button>
}