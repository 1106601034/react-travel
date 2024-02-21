import React from "react";
import styles from './Footer.module.css';
import { Layout, Typography, } from "antd";
import { useTranslation, withTranslation } from "react-i18next";

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className={styles["footer-content"]}>
                <Layout.Footer>
                    <div className={styles.inner}>
                        <Typography.Title level={3} style={{ textAlign: "center" }}>
                            {t("footer.detail")}
                        </Typography.Title>
                    </div>
                </Layout.Footer>
            </div>
        </>
    )
};