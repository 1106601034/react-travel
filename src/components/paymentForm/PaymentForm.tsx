import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { Input, Card } from "antd";
import styles from "./PaymentForm.module.css";
import { useTranslation } from "react-i18next";

export const PaymentForm = () => {
  const { t } = useTranslation();
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  return (
    <Card
      title = {t("paymentForm.credit")}
      bordered={false}
      className={styles["payment-credit-card"]}
    >
      <PaymentInputsWrapper {...wrapperProps}>
        <input {...getCardNumberProps()} />
        <input {...getExpiryDateProps()} />
        <input {...getCVCProps()} />
      </PaymentInputsWrapper>
    </Card>
  );
};