import React from "react";
import styles from './BusinessPartners.module.css';
import { Row, Col, Divider } from "antd";

interface PropsType {
    title: JSX.Element;
    partners: any[];
}

export const BusinessPartners: React.FC<PropsType> = ({ title, partners }) => {
    return (
        <div className={styles.content}>
            <Divider orientation="left">{title}</Divider>
            <Row>
                <Col span={6}>
                    <img src={partners[0]} height={120} width={240} alt="" />
                </Col>
                <Col span={6}>
                    <img src={partners[1]} height={120} width={240} alt="" />
                </Col>
                <Col span={6}>
                    <img src={partners[2]} height={120} width={240} alt="" />
                </Col>
                <Col span={6}>
                    <img src={partners[3]} height={120} width={240} alt="" />
                </Col>
            </Row>
        </div>
    );
};
