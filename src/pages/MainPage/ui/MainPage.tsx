import { useTranslation } from 'react-i18next'

const MainPage: React.FC = () => {
    const { t } = useTranslation('main')

    return <div>
        {t('Тут главная страница')}
    </div>
}

export default MainPage
