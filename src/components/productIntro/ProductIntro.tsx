import styles from "./ProductIntro.module.css";
import React from "react";
import { Typography, Carousel, Image, Rate, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useTranslation } from "react-i18next";

interface PropsType {
  title: string;
  shortDescription: string;
  price: string | number;
  coupons: string;
  points: string;
  discount: string;
  rating: string | number;
  pictures: string[];
}

const columns: ColumnsType<RowType> = [
  {
    title: "title",
    dataIndex: "title",
    key: "title",
    align: "left",
    width: 120,
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
    align: "center",
  },
];

interface RowType {
  title: string;
  description: string | number | JSX.Element;
  key: number;
}

export const ProductIntro: React.FC<PropsType> = ({
  title,
  shortDescription,
  price,
  coupons,
  discount,
  rating,
  pictures,
}) => {
  const { t } = useTranslation();
  const tableDataSource: RowType[] = [
    {
      key: 0,
      title: t("productIntro.product"),
      description: title,
    },
    {
      key: 1,
      title: t("productIntro.price"),
      description: (
        <>
          {t("general.currency")} {" "}
          <Typography.Text type="danger" strong>
            {price}
          </Typography.Text>
        </>
      ),
    },
    {
      key: 2,
      title: t("productIntro.discount"),
      description: discount ? (
        <>
          <Typography.Text delete>
            {t("general.currency")}
            {price}
          </Typography.Text>
          <br />
          <Typography.Text type="danger" strong>
            {t("general.currency")}
            {discount}
          </Typography.Text>
        </>
      ) : (
        t("productIntro.noDiscount")
      ),
    },
    {
      key: 2,
      title: t("productIntro.coupons"),
      description: coupons ? discount : t("productIntro.noCoupons"),
    },
    {
      key: 2,
      title: t("productIntro.review"),
      description: (
        <>
          <Rate allowHalf defaultValue={+rating} />
          <Typography.Text style={{ marginLeft: 10 }}>
            {rating} {t("productIntro.star")}
          </Typography.Text>
        </>
      ),
    },
  ];

  return (
    <div className={styles["intro-container"]}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Typography.Text>{shortDescription}</Typography.Text>
      <div className={styles["intro-detail-content"]}>
        <Typography.Text style={{ marginLeft: 20 }}>
          {t("general.currency")}  <span className={styles["intro-detail-strong-text"]}>{price}</span>{" "}
          {t("productIntro.forEach")},
        </Typography.Text>
      </div>
      <Carousel autoplay slidesToShow={3}>
        {pictures.map((p) => (
          <Image height={150} src={p} />
        ))}
      </Carousel>
      <Table<RowType>
        columns={columns}
        dataSource={tableDataSource}
        size="small"
        bordered={false}
        pagination={false}
        showHeader={false}
      />
    </div>
  );
};
