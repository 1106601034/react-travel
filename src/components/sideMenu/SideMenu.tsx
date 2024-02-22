import React from "react";
import styles from './SideMenu.module.css';
import { Menu, } from "antd";
import { CarOutlined } from "@ant-design/icons";
import { sideMenuList } from "./fakeProducts";
import { useTranslation } from "react-i18next";

export const SideMenu: React.FC = () => {
    const {t} = useTranslation();
    return (
        <Menu 
            mode={"vertical"}
            className={styles["side-menu"]}
            items={
                sideMenuList.map((m) => (
                    {
                        label: t(m.title),
                        icon: <CarOutlined />,
                        key: m.title,
                        children: m.subMenu.map((sm) => ({
                            label: t(sm.title),
                            key: sm.title,
                            disabled: true,
                            icon: <CarOutlined />,
                        }
                        )),
                    }))}
        ></Menu>
    );
};
