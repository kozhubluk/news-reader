import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './ArticleImageBlock.module.scss'
import { ArticleImage } from "enities/article/model/types/ArticleSchems";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";

interface ArticleImageBlockProps {
    className?: string
    block: ArticleImage
}

export const ArticleImageBlock: React.FC<ArticleImageBlockProps> = (props) => {
    const { className, block } = props
    const { src, subtitle, text } = block
    return <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
        {subtitle ? <Text theme={TextTheme.BOLD} size={TextSize.LARGE}>{subtitle}</Text> : null}
        <img src={src}/>
        {text ? <Text theme={TextTheme.SECONDARY} size={TextSize.SMALL}>{text}</Text> : null}
    </div>
}