import { classNames } from 'shared/lib/classNames/classNames'
import * as styles from './LangSwitcher.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from "react";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = memo(function LangSwitcher({ className }: LangSwitcherProps){
    const { i18n } = useTranslation()

    const toggleLang = useCallback((): void => {
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en')
        } else {
            i18n.changeLanguage('ru')
        }
    }, [i18n])

    return <Button className={classNames('', {}, [styles[className]])}
        onClick={toggleLang}>
        {i18n.language}
    </Button>
})
