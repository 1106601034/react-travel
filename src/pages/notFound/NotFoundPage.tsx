import React from "react";
// import styles from "./NotFoundPagemodule.css";
import { useTranslation } from "react-i18next";

export const NotFoundPage : React.FC = () =>  {
    const { t } = useTranslation();
        return <>
            <h1>{t("general.error")}</h1>
        </>
}