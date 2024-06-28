import { useTranslation } from 'react-i18next'
import { memo } from "react";
import { ProfileCard } from "enities/profile/ui/ProfileCard/ProfileCard";

const ProfilePage = memo(function MainPage() {
    const { t } = useTranslation('main')

    return <div>
        {t('Тут профиль')}
        <ProfileCard />
    </div>
})

export default ProfilePage
