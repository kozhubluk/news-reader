import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './NewsFeed.module.scss'

interface NewsFeedProps {
    className?: string
}

const NewsFeed: React.FC<NewsFeedProps> = (props) => {
    const { className } = props
    return <div className={classNames(styles.NewsFeed, {}, [className])}>
        news feed here
    </div>
}

export default NewsFeed