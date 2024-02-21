import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import {
  Alert, Layout, Typography, Input, Menu, Button,
  Dropdown, Space, Row, Col,
} from "antd";
import Marquee from "react-fast-marquee";
import { GlobalOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { addLanguageActionCreator, changeLanguageActionCreator, } from "../../redux/language/languageActions";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const languageList = useSelector((state) => state.language.languageList);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const menuClickHandler = (e) => {
    console.log(e);
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("sry jk :)", "new_lang"));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  };

  return (
    <div className={styles["app-header"]}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>

          <Row>
            <Col span={4}>
              <Space>
                <div className={styles["slogan"]}>
                  <Typography.Text>
                    {t("header.slogan")}
                  </Typography.Text>
                </div>
                <Dropdown overlay={<Menu
                  onClick={menuClickHandler}
                  items={[
                    ...languageList.map((l) => {
                      return { key: l.code, label: l.name };
                    }),
                    // { key: "new", label: t("header.add_new_language") },
                  ]} />} >
                  <Button>
                    <Space>
                      {t("header.language")}
                      {<GlobalOutlined />}
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
            </Col>

            <Col span={13} offset={2}>
              <Alert 
                banner
                style={{ borderRadius: 10, margin: 3, padding: 6 }}
                message={
                  <Marquee pauseOnHover gradient={true} delay={5}
                    autoFill={true} gradientWidth={20} >
                    This project fetchs product information data from database that belongs to imooc.com, and currently these data don't support i18n multi-language.
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Marquee>
                }
              />
            </Col>

            <Col span={4} offset={1}>
              <Button.Group className={styles["button-group"]}>
                <Button onClick={() => navigate("/createAccount")}>
                  {t("header.register")}
                </Button>
                <Button onClick={() => navigate("/signin")}>
                  {t("header.signin")}
                </Button>
              </Button.Group>
            </Col>
          </Row>

        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
            {t("header.title")}
          </Typography.Title>
        </span>
        <Input.Search
          placeholder={t("header.search_placeholder")}
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu
        mode={"horizontal"}
        className={styles["main-menu"]}
        items={[
          { key: 1, label: t("header.destinations") },
          { key: 2, label: t("header.planing") },
          { key: 3, label: t("header.hotels") },
          { key: 4, label: t("header.car_hire") },
        ]}
      />
    </div>
  );
};
