import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import {
  Row, Col, Divider, Typography,
  Anchor, Menu, DatePicker, Button,
} from "antd";
import styles from "./DetailPage.module.css";
import {
  Header, Footer, ProductIntro, ProductComments,
  BusinessPartners, LoadingSpin,
} from "../../components";
import { commentMockData } from "./mockup";
// import { ProductDetailSlice } from "../../redux/productDetail/slice";
import { useSelector, useAppDispatch, } from "../../redux/hooks";
// import { useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/productDetail/slice";
import { useTranslation } from "react-i18next";
import { MainLayout } from "../../layouts/mainLayout";
import { ShoppingCartOutlined, } from "@ant-design/icons";
import { addShoppingCartItem, } from "../../redux/shoppingCart/slice";

const { RangePicker } = DatePicker;

type MatchParams = {
  detailID: string;
};

export const DetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { detailID } = useParams<MatchParams>();

  const loading = useSelector(state => state.productDetail.loading);
  const error = useSelector(state => state.productDetail.error);
  const product = useSelector(state => state.productDetail.data);

  const dispatch = useAppDispatch();
  const jwt = useSelector(s => s.user.token) as string;
  const shoppingCartLoading = useSelector(s => s.shoppingCart.loading);

  useEffect(() => {
    const fetchData = async () => {
      if (detailID) {
        dispatch(getProductDetail(detailID))
      }
    };
    fetchData();
  }, []);

  if (loading) { return <LoadingSpin /> }

  if (error) {
    return <div>{t("general.error")}{error}</div>;
  }
  return (
    <MainLayout>
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
            <Button
              style={{ marginTop: 50, marginBottom: 30, display: "block" }}
              type="primary"
              danger
              loading={shoppingCartLoading}
              onClick={() => {
                dispatch(
                  addShoppingCartItem({ jwt, touristRouteId: product.id })
                );
              }}
            >
              <ShoppingCartOutlined />
              {t("detail.addToCart")}
            </Button>
            <RangePicker open style={{ marginTop: 20 }} />
          </Col>
        </Row>
      </div>

      <Anchor className={styles["product-detail-anchor"]} >
        <Menu mode="horizontal">
          <Menu.Item key='1'>
            <Anchor.Link href="#feature" title={t("detail.overview")}></Anchor.Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Anchor.Link href="#fees" title={t("detail.price_and_policy")}></Anchor.Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Anchor.Link href="#comments" title={t("detail.comment")}></Anchor.Link>
          </Menu.Item>
        </Menu>
      </Anchor>

      <div id="feature" className={styles["product-detail-container"]}>
        <Divider orientation={'center'}>
          <Typography.Title level={3}>
            {t("detail.overview")}
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
            {t("detail.price_and_policy")}
          </Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.fees }}
          style={{ margin: 50 }}
        ></div>
      </div>

      <div id="comments" className={styles["product-detail-container"]}>
        <Divider orientation={"center"}>
          <Typography.Title level={3}>
            {t("detail.comment")}
          </Typography.Title>
        </Divider>
        <div style={{ margin: 40 }}>
          <ProductComments data={commentMockData} />
        </div>
      </div>

    </MainLayout>
  );
};
