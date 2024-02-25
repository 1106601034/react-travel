import React, { useEffect } from "react";
import { Skeleton, Card, Button, Typography, Table, } from "antd";
import { DeleteOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useTranslation } from "react-i18next";

const { Meta } = Card;
const { Title, Text } = Typography;

interface Item {
  key: number;
  item: string;
  amount: string | number | JSX.Element;
}

const columns: ColumnsType<Item> = [
  {
    title: "Product",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "Price",
    dataIndex: "amount",
    key: "amount",
  },
];

interface PropsType {
  loading: boolean;
  originalPrice: number;
  price: number;
  onShoppingCartClear: () => void;
  onCheckout: () => void;
}

export const PaymentCard: React.FC<PropsType> = ({
  loading,
  originalPrice,
  price,
  onShoppingCartClear,
  onCheckout,
}) => {
  const { t } = useTranslation();
  const paymentData: Item[] = [
    {
      key: 1,
      item: "",
      amount: <Text delete>{t("general.currency")} {originalPrice}</Text>,
    },
    {
      key: 3,
      item: "",
      amount: (
        <Title type="danger" level={2}>
          {t("general.currency")} {price}
        </Title>
      ),
    },
  ];

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <Button type="primary" danger onClick={onCheckout} loading={loading}>
          <CheckCircleOutlined />
          {t("paymentCard.payNow")}
        </Button>,
        <Button onClick={onShoppingCartClear} loading={loading}>
          <DeleteOutlined />
          {t("paymentCard.clear")}
        </Button>,
      ]}
    >
      <Skeleton loading={loading} active>
        <Meta
          title={<Title level={2}>{t("paymentCard.total")}</Title>}
          description={
            <Table<Item>
              columns={columns}
              dataSource={paymentData}
              showHeader={false}
              size="small"
              bordered={false}
              pagination={false}
            />
          }
        />
      </Skeleton>
    </Card>
  );
};
