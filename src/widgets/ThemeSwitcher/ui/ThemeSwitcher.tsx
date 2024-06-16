import { useTheme } from 'app/providers/theme'
import { classNames } from 'shared/lib/classNames/classNames'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
    const { toggleTheme } = useTheme()

    return <button className={classNames('themeSwitcher', {}, [className])} onClick={toggleTheme}>
        Change theme
    </button>
}
