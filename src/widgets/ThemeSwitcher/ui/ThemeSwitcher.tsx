import { useTheme } from 'app/providers/theme'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from "react";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { toggleTheme } = useTheme()
    const { t } = useTranslation()

    return <button className={classNames('themeSwitcher', {}, [className])} onClick={toggleTheme}>
        {t('Change theme')}
    </button>
})
