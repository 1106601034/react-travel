import React from "react";
import styles from "./HomePage.module.css";
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners, } from "../../components";
import { Row, Col, Typography } from "antd";
import { sideMenuList, productList1, productList2, productList3 } from "./fakeProducts";
import logoImage from "../../assets/logo.svg";
import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";
import sideImage1 from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import parterImage1 from "../../assets/images/microsoft-80658_640.png";
import parterImage2 from "../../assets/images/icon-720944_640.png";
import parterImage3 from "../../assets/images/follow-826033_640.png";
import parterImage4 from "../../assets/images/facebook-807588_640.png";
import { withTranslation, WithTranslation } from "react-i18next";

class HomePageComponent extends React.Component<WithTranslation> {
    render() {
        const { t } = this.props;
        return <>
            <div className={styles['page-content']}>
                <Header logo={logoImage}/>
                <Row style={{ marginTop: 20 }}>
                    <Col span={6}>
                        <SideMenu sideMenuList={sideMenuList} />
                    </Col>
                    <Col span={18}>
                        <Carousel image={[carouselImage1, carouselImage2, carouselImage3]} />
                    </Col>
                </Row>
                <ProductCollection
                    title={<Typography.Title level={3} type='warning'>
                        {t("home_page.hot_recommended")}
                    </Typography.Title>}
                    sideImage={sideImage1}
                    products={productList1}
                />
                <ProductCollection
                    title={<Typography.Title level={3} type='danger'>
                        New arrival
                    </Typography.Title>}
                    sideImage={sideImage2}
                    products={productList2}
                />
                <ProductCollection
                    title={<Typography.Title level={3} type='success'>
                        Feature
                    </Typography.Title>}
                    sideImage={sideImage3}
                    products={productList3}
                />
                <BusinessPartners
                    title="Business Partners"
                    partners={[parterImage1, parterImage2, parterImage3, parterImage4]}
                />
            </div>
            <Footer />
        </>
    }
}

export const HomePage = withTranslation()(HomePageComponent);