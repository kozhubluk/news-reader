import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Preloader.module.scss'

export enum PreloaderSize {
    SMALL = 'small',
    MIDDLE = 'middle',
    LARGE = 'large'
}

interface PreloaderProps {
    className?: string
    size?: PreloaderSize
}

export const Preloader: React.FC<PreloaderProps> = (props) => {
    const { className, size = PreloaderSize.LARGE } = props
    return <div className={classNames(styles.Preloader, {}, [className, styles[size]])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}