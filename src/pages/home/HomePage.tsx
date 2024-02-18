import React from "react";
import styles from "./HomePage.module.css";
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners, } from "../../components";
import { Row, Col, Typography, Spin, } from "antd";
import { productList1, productList2, productList3 } from "../../assets/fakeProducts";
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
// import axios from "axios";

interface State {
    loading: boolean
    error: string | null,
    // productList: any[]
}

class HomePageComponent extends React.Component<WithTranslation, State> {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            // productList: [],
        };
    }

    async componentDidMount() {
        try {
            // const { data } = await axios.get("");
            this.setState({
                loading: false,
                error: null,
                // productList: data,
            });
        } catch (error) {
            if (error instanceof Error) {
                this.setState({ error: error.message, loading: false })
            }
        }
    }

    render() {
        const { t } = this.props;
        // const { productList, loading, error, } = this.state
        const { loading, error, } = this.state
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
                <Header logo={logoImage} />
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
                    products={productList1}
                />
                <ProductCollection
                    string={[
                        <Typography.Title level={3} type='danger'>
                            {t("home_page.new_arrival")}
                        </Typography.Title>
                        , t("home_page.from")
                    ]}
                    sideImage={sideImage2}
                    products={productList2}
                />
                <ProductCollection
                    string={[
                        <Typography.Title level={3} type='success'>
                            {t("home_page.feature")}
                        </Typography.Title>
                        , t("home_page.from")
                    ]}
                    sideImage={sideImage3}
                    products={productList3}
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

export const HomePage = withTranslation()(HomePageComponent);