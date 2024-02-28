import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message, Space, } from "antd";
import styles from "./RegisterForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const RegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [passwordStrength, setPasswordStrength] = useState({
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecialChar: false,
    doesNotStartWithSpecialChar: false,
    minLength: false,
  });

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    try {
      await axios.post("http://82.157.43.234:8080/auth/register", {
        email: values.username,
        password: values.password,
        confirmPassword: values.confirm,
      });
      message.success(t("form.registerSuccess"));
      navigate("/signIn");
    } catch (error) {
      alert(`${t("form.registerFail")}\n${error}`)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPasswordStrength({
      hasUpper: /[A-Z]/.test(value),
      hasLower: /[a-z]/.test(value),
      hasNumber: /\d/.test(value),
      hasSpecialChar: /[^a-zA-Z0-9]/.test(value),
      doesNotStartWithSpecialChar: !/[^a-zA-Z0-9]/.test(value[0]),
      minLength: value.length >= 6,
    });
  };

  const {
    hasUpper, hasLower, hasNumber,
    hasSpecialChar, doesNotStartWithSpecialChar,
    minLength,
  } = passwordStrength;

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles["register-form"]}
      >
        <div className={styles["input"]}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: t("form.tpyeUsername") }]}
          >
            <Input placeholder={t("form.username")} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: t("form.tpyePassword") }]}
          >
            <Input.Password onChange={handlePasswordChange} placeholder={t("form.password")} />
          </Form.Item>

          <Form.Item
            name="confirm"
            hasFeedback
            rules={[
              { required: true, message: t("form.confirmPassword") },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(t("form.confirmFail"));
                },
              }),
            ]}
          >
            <Input.Password placeholder={t("form.confirm")} />
          </Form.Item>
        </div>
        <Form.Item {...tailLayout}>
          <Space direction="vertical"  >
            <Checkbox checked={hasUpper}>{t("form.upperRequired")}</Checkbox>
            <Checkbox checked={hasLower}>{t("form.lowerRequired")}</Checkbox>
            <Checkbox checked={hasNumber}>{t("form.numberRequired")}</Checkbox>
            <Checkbox checked={hasSpecialChar}>{t("form.specialRequired")}</Checkbox>
            <Checkbox checked={minLength}>{t("form.sixRequired")}</Checkbox>
            <Checkbox checked={doesNotStartWithSpecialChar}>{t("form.notStartRequired")}</Checkbox>
          </Space>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {t("form.rigister")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
