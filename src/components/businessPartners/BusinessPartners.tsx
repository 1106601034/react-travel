import React from "react";
import styles from './BusinessPartners.module.css';
import { Row, Col, } from "antd";
import parterImage1 from "../../assets/images/microsoft-80658_640.png";
import parterImage2 from "../../assets/images/icon-720944_640.png";
import parterImage3 from "../../assets/images/follow-826033_640.png";
import parterImage4 from "../../assets/images/facebook-807588_640.png";

export const BusinessPartners: React.FC= () => {
    const partners = [parterImage1,parterImage2,parterImage3,parterImage4]
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
            </Row>
        </div>
    );
};
