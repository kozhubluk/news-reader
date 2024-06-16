import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './LangSwitcher.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
    const { i18n } = useTranslation()

    const toggleLang = (): void => {
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en')
        } else {
            i18n.changeLanguage('ru')
        }
    }
    return <Button className={classNames('', {}, [styles[className]])}
        onClick={toggleLang}>
        {i18n.language}
    </Button>
}
