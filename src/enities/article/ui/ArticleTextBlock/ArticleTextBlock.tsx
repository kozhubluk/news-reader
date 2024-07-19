import { ArticleText, BlockType } from "enities/article/model/types/ArticleSchems";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import * as styles from "./ArticleTextBlock.module.scss"

interface ArticleTextProps {
    className?: string
    block: ArticleText
}

export const ArticleTextBlock: React.FC<ArticleTextProps> = (props) => {
    const { className, block } = props
    const { type, paragraphs } = block
    return <div className={
        classNames(styles.ArticleTextBlock, { [styles.quote]: type === BlockType.QUOTE }, [className])}>
        {paragraphs.map((paragraph) =>
            <Text key={paragraph} theme={type === BlockType.QUOTE ? TextTheme.ITALIC : TextTheme.PRIMARY}>
                {paragraph}
            </Text>
        )}
    </div>
}