import React from "react";
import styles from "./HomePage.module.css";
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners, } from "../../components";
import { Row, Col, Typography, Spin, } from "antd";
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
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { giveMeDataActionCreator } from "../../redux/recommendProducts/recommendProductsActions";

const mapStateToProps = (state: RootState) => {
    return {
        loading: state.recommendProducts.loading,
        error: state.recommendProducts.error,
        productList: state.recommendProducts.productList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        giveMeData: () => {
            dispatch(giveMeDataActionCreator());
        }
    }
}

type PropsType = WithTranslation &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>

class HomePageComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.giveMeData();
    }

    render() {
        const { t, productList, loading, error, } = this.props;
        if (loading) {
            return <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        }
        if (error) {
            return <div>woops, something goes wrong: {error}</div>;
        }
        return <>
            <div className={styles['page-content']}>
                <Header />
                <Row>
                    <Col span={6}>
                        <SideMenu />
                    </Col>
                    <Col span={18}>
                        <Carousel image={[carouselImage1, carouselImage2, carouselImage3]} />
                    </Col>
                </Row>
                <ProductCollection
                    string={[
                        <Typography.Title level={3} type='warning'>
                            {t("home_page.big_deal")}
                        </Typography.Title>
                        , t("home_page.from")
                    ]}
                    sideImage={sideImage1}
                    products={productList[0].touristRoutes}
                />
                <ProductCollection
                    string={[
                        <Typography.Title level={3} type='danger'>
                            {t("home_page.new_arrival")}
                        </Typography.Title>
                        , t("home_page.from")
                    ]}
                    sideImage={sideImage2}
                    products={productList[1].touristRoutes}
                />
                <ProductCollection
                    string={[
                        <Typography.Title level={3} type='success'>
                            {t("home_page.feature")}
                        </Typography.Title>
                        , t("home_page.from")
                    ]}
                    sideImage={sideImage3}
                    products={productList[2].touristRoutes}
                />
                <BusinessPartners
                    title={<Typography.Title>
                        {t("home_page.partners")}
                    </Typography.Title>}
                    partners={[parterImage1, parterImage2, parterImage3, parterImage4]}
                />
            </div>
            <Footer />
        </>
    }
}

export const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withTranslation()(
        HomePageComponent
    )
);