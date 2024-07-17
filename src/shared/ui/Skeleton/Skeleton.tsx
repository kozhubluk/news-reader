import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Skeleton.module.scss'
import { CSSProperties } from "react";

interface SkeletonProps {
    className?: string
    width: string
    height: string
    border: string
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
    const { className, width, height, border } = props

    const style: CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return <div style={style} className={classNames(styles.Skeleton, {}, [className])}>
    </div>
}