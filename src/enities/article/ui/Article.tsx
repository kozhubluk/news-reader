import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Article.module.scss'
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useDispatch";
import { fetchArticle } from "enities/article/model/services/fetchArticle";
import { selectArticleState } from "enities/article/model/selectors/selectArticleState";
import { useSelector } from "react-redux";
import { DynamicReducerLoader } from "shared/ui/DynamicReducerLoader/DynamicReducerLoader";
import { articleReducer } from "enities/article/model/slice/ArticleSlice";
import { BlockType } from "enities/article/model/types/ArticleSchems";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleProps {
    className?: string
    id?: string
}

export const Article: React.FC<ArticleProps> = (props) => {
    const { className, id } = props
    const dispatch = useAppDispatch()
    const { article, isLoading, error } = useSelector(selectArticleState)

    useEffect(() => {
        if (id)
        {
            dispatch(fetchArticle(id))
        }
    }, [dispatch, id]);

    if (isLoading) {
        return <div className={classNames(styles.Article, {}, [className])}>
            <Skeleton width='100%' height='35px' border='12px'/>
            <div className={styles.articleInfo}>
                <Skeleton width='70px' height='20px' border='6px'/>
                <Skeleton width='80px' height='20px' border='6px'/>
            </div>
            <Skeleton width='100%' height='180px' border='12px'/>
            <Skeleton width='100%' height='280px' border='12px'/>
        </div>
    } else if (error) {
        return <div>err</div>
    }

    return <DynamicReducerLoader keyName='article' reducer={articleReducer} removeAfterUnmount={false}>
        <div className={classNames(styles.Article, {}, [className])}>
            <Text size={TextSize.EXTRA_LARGE} theme={TextTheme.BOLD}>{article?.title}</Text>
            <div className={styles.articleInfo}>
                <Text className={styles.info} size={TextSize.SMALL} theme={TextTheme.SECONDARY}>{article?.date}</Text>
                <Text className={styles.info} size={TextSize.SMALL} theme={TextTheme.SECONDARY}>{article?.views} просмотров</Text>
            </div>
            {article?.blocks.map(item => item.type === BlockType.IMAGE ? <div>kartinka</div> : <Text>co</Text>)}
        </div>
    </DynamicReducerLoader>
}