import React from "react";
import styles from "./UserLayout.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
import { Header, Footer } from "../../components";
import { useTranslation } from "react-i18next";

const { Content } = Layout;

interface PropsTypes {
  children: React.ReactNode;
}

export const UserLayout: React.FC<PropsTypes> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Layout className={styles["user-layout-container"]}>
        <Content className={styles["content"]}>
          <div className={styles["top"]}>
            <div className={styles["desc"]}>
              <p>
                The server currently rejects register and accepts login only. <br />
                Please log in with account "alex1234@163.com", and password "Fake123$".<br />
              </p>
            </div>
            {props.children}
          </div>
        </Content>
      </Layout>
      <Footer />
    </>
  );
};
