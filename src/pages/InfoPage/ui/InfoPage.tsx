import { useTranslation } from 'react-i18next'

const InfoPage: React.FC = () => {
    const { t } = useTranslation('info')

    return <div>
        {t('Информация тута')}
    </div>
}

export default InfoPage
