import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './ArticlePage.module.scss'
import { Article } from "enities/article/ui/Article";
import { useParams } from "react-router-dom";

interface ArticlePageProps {
    className?: string
}

const ArticlePage: React.FC<ArticlePageProps> = (props) => {
    const { className } = props
    const { id } = useParams<string>()

    return <div className={classNames(styles.ArticlePage, {}, [className])}>
        <Article id={id}/>
    </div>
}

export default ArticlePage