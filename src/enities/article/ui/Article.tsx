import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './Article.module.scss'
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useDispatch";
import { fetchArticle } from "enities/article/model/services/fetchArticle";
import { selectArticleState } from "enities/article/model/selectors/selectArticleState";
import { useSelector } from "react-redux";
import { DynamicReducerLoader } from "shared/ui/DynamicReducerLoader/DynamicReducerLoader";
import { articleReducer } from "enities/article/model/slice/ArticleSlice";
import { ArticleBlock, ArticleImage, BlockType } from "enities/article/model/types/ArticleSchems";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ArticleTextBlock } from "enities/article/ui/ArticleTextBlock/ArticleTextBlock";
import { ArticleImageBlock } from "enities/article/ui/ArticleImageBlock/ArticleImageBlock";

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

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case BlockType.SUBTITLE:
                if ("text" in block) return <Text key={block.id} size={TextSize.LARGE} theme={TextTheme.BOLD}>{block.text}</Text>
            case BlockType.TEXT:
            case BlockType.QUOTE:
                if ("paragraphs" in block) return <ArticleTextBlock key={block.id} block={block}/>
            case BlockType.IMAGE:
                if ("src" in block) return <ArticleImageBlock key={block.id} block={block}/>
            default:
                return null
        }
    }, [])

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
                <Text className={styles.info} size={TextSize.SMALL} theme={TextTheme.SECONDARY}>
                    {article?.views} просмотров
                </Text>
            </div>
            {article?.blocks.map((block: ArticleBlock) => renderBlock(block))}
        </div>
    </DynamicReducerLoader>
}