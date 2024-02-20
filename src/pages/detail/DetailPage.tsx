import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spin, Row, Col, Divider, Typography, Anchor, Menu, } from "antd";
import styles from "./DetailPage.module.css";
import { Header, Footer, ProductIntro, ProductComments, BusinessPartners, } from "../../components";
import { DatePicker, } from "antd";
import { commentMockData } from "./mockup";
import { ProductDetailSlice } from "../../redux/productDetail/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";

const { RangePicker } = DatePicker;

type MatchParams = {
  detailID: string;
};

export const DetailPage: React.FC = () => {
  const { detailID } = useParams<MatchParams>();
  const loading = useSelector(state => state.productDetail.loading)
  const error = useSelector(state => state.productDetail.error)
  const product = useSelector(state => state.productDetail.data)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(ProductDetailSlice.actions.fetchStart())
      try {
        const { data } = await axios.get(
          `http://82.157.43.234:8080/api/touristRoutes/${detailID}`
        );
        dispatch(ProductDetailSlice.actions.fetchSuccess(data))
      } catch (error) {
        dispatch(ProductDetailSlice.actions.fetchFail(
          error instanceof Error ? error.message : "error"
        ))
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>Woops, something just happened : {error}</div>;
  }
  return (
    <>
      <div className={styles['page-header']}>
        <Header />
      </div>
      <div className={styles["page-content"]}>

        <div className={styles["product-intro-container"]}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product.title}
                shortDescription={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p) => p.url)}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{ marginTop: 20 }} />
            </Col>
          </Row>
        </div>

        <div className={styles["anchor-container"]}>
          <Anchor className={styles["product-detail-anchor"]}>
            <Menu mode="horizontal">
              <Menu.Item key='1'>
                <Anchor.Link href="#feature" title="Overview"></Anchor.Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Anchor.Link href="#fees" title="Prices"></Anchor.Link>
              </Menu.Item>
              <Menu.Item key='3'>
                <Anchor.Link href="#notes" title="Policy"></Anchor.Link>
              </Menu.Item>
              <Menu.Item key='4'>
                <Anchor.Link href="#comments" title="Comments"></Anchor.Link>
              </Menu.Item>
            </Menu>
          </Anchor>
        </div>

        <div id="feature" className={styles["product-detail-container"]}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>
              Overview
            </Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.features }}
            style={{ margin: 50 }}
          ></div>
        </div>

        <div id="fees" className={styles["product-detail-container"]}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>
              Prices
            </Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.fees }}
            style={{ margin: 50 }}
          ></div>
        </div>

        <div id="notes" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>
              Policy
            </Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.notes }}
            style={{ margin: 50 }}
          ></div>
        </div>

        <div id="comments" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>
              Comments
            </Typography.Title>
          </Divider>
          <div style={{ margin: 40 }}>
            <ProductComments data={commentMockData} />
          </div>
        </div>
      </div>

      <div className={styles['page-footer']}>
        <BusinessPartners />
        <Footer />
      </div>
    </>
  );
};
