import React from "react";
import { Divider } from "antd";
import { Filter } from "./Filter";
import styles from "./FilterArea.module.css";
import { useTranslation } from "react-i18next";

export const FilterArea: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Filter title = {t("filter.review")} tags = {[
        t("filter.notRecommend"), 
        t("filter.notBad"), 
        t("filter.good"), 
        t("filter.great"), 
        t("filter.loveIt"),
        ]} />
      <Divider dashed className={styles["filter-divider"]} />
      <Filter title = {t("filter.departure")} tags = {[
        t("filter.beijing"),
        t("filter.shanghai"),
        t("filter.guangzhou"),
        t("filter.shenzhen"),
        ]} />
      <Divider dashed className={styles["filter-divider"]} />
      <Filter title = {t("filter.duration")} tags = {[
        t("filter.twoDays"), 
        t("filter.threeDays"),
        t("filter.fourDays"),
        t("filter.fiveDays"),
        t("filter.sixDays"),
        ]} />
      <Divider dashed />
    </>
  );
};
