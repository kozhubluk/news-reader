import {useTranslation} from "react-i18next";

function InfoPage() {
    const {t} = useTranslation("info")

    return <div>
        {t("Информация тута")}
    </div>
}

export default InfoPage;