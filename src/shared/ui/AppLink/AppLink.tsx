import {classNames} from "shared/lib/classNames/classNames";
import * as styles from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";

interface AppLinkProps extends LinkProps{
    className?: string
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {className, children, to, ...otherProps} = props;
    return <Link to={to} {...otherProps} className={classNames(styles.link, {}, [styles[className]])}>
        {children}
    </Link>
}