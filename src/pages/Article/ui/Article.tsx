import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Article.module.scss'

interface ArticleProps {
    className?: string
}

const Article: React.FC<ArticleProps> = (props) => {
    const { className } = props
    return <div className={classNames(styles.Article, {}, [className])}>
        article text
    </div>
}

export default Article