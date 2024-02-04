import React from "react";
import styles from "./App.module.css";
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners, } from "./components";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups/fakeProducts";
import sideImage1 from './assets/images/sider_2019_12-09.png';
import sideImage2 from './assets/images/sider_2019_02-04.png';
import sideImage3 from './assets/images/sider_2019_02-04-2.png';
import parterImage1 from "./assets/images/microsoft-80658_640.png";
import parterImage2 from "./assets/images/icon-720944_640.png";
import parterImage3 from "./assets/images/follow-826033_640.png";
import parterImage4 from "./assets/images/facebook-807588_640.png";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles['page-content']}>
        <Header />
        <Row style={{ marginTop: 20 }}>
          <Col span={6}><SideMenu /></Col>
          <Col span={18}><Carousel /></Col>
        </Row>
        <ProductCollection
          title={<Typography.Title level={3} type='warning'>
            Big Deal
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
          title= "Business Partners"
          partners={[parterImage1, parterImage2, parterImage3, parterImage4]}
        />
      </div>
      <Footer />
    </div >
  );
}
export default App;
