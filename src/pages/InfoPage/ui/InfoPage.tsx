import { useTranslation } from 'react-i18next'
import { memo } from "react";

const InfoPage = memo(function InfoPage() {
    const { t } = useTranslation('info')

    return <div>
        {t('Информация тута')}
    </div>
})

export default InfoPage
