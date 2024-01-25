import React from "react";
import styles from './Footer.module.css';
import { Layout, Typography, } from "antd";

export const Footer: React.FC = () => {
    return (
        <Layout.Footer>
            <Typography.Title level={3} style={{ textAlign: "center" }}>
                Copyrights @ Travel.com
            </Typography.Title>
        </Layout.Footer>
    )
};