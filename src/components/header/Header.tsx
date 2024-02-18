import React from "react";
import styles from "./Header.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import {
  useParams,
  useLocation,
  useNavigate
} from "react-router-dom";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
// import { Dispatch } from "redux";
import {
  // LanguageActionTypes,
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../redux/language/languageActions";
import { useTranslation } from "react-i18next";

interface PropsType {
  logo: any;
}

export const Header: React.FC<PropsType> = ({ logo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const language = useSelector((state) => state.language.language);
  const languageList = useSelector((state) => state.language.languageList);
  const dispatch = useDispatch();
  // const dispatch = useDispatch<Dispatch<LanguageActionTypes>>();
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
          <Space wrap>
            <Typography.Text>
              {t("header.slogan")}.
            </Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu
                  onClick={menuClickHandler}
                  items={[
                    ...languageList.map((l) => {
                      return { key: l.code, label: l.name };
                    }),
                    { key: "new", label: t("header.add_new_language") },
                  ]}
                />
              }
              icon={<GlobalOutlined />}
            >
              {t("header.language")}
            </Dropdown.Button>
          </Space>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => navigate("/register")}>
              {t("header.register")}
            </Button>
            <Button onClick={() => navigate("/signin")}>
              {t("header.signin")}
            </Button>
          </Button.Group>
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
