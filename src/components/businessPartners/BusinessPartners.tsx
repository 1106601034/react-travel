import React from "react";
import styles from './BusinessPartners.module.css';
import { Row, Col, Divider, Typography } from "antd";

interface PropsType {
    partners: any[];
}

export const BusinessPartners: React.FC<PropsType> = ({ partners }) => {
    return (
        <div className={styles.content}>
            <Row>
                {partners.map((url,index) => (
                    <Col span={6} key={"bussiness-partner-" + index}>
                        <img
                            alt="bussiness-partner"
                            src={url}
                            className={styles.partnerImages}
                        />
                    </Col>
                ))}
                {/* <Col span={6}>
                    <img src={partners[0]} className={styles.partnerImages} alt="business partners" />
                </Col>
                <Col span={6}>
                    <img src={partners[1]} className={styles.partnerImages} alt="business partners" />
                </Col>
                <Col span={6}>
                    <img src={partners[2]} className={styles.partnerImages} alt="business partners" />
                </Col>
                <Col span={6}>
                    <img src={partners[3]} className={styles.partnerImages} alt="business partners" />
                </Col> */}
            </Row>
        </div>
    );
};
