import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message, Space, } from "antd";
import styles from "./RegisterForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const RegisterForm = () => {
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
      message.success('Your account has been created.');
      navigate("/signIn");
    } catch (error) {
      alert(`We are unable to create your account :( \n${error}`)
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
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password onChange={handlePasswordChange} placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            hasFeedback
            rules={[
              { required: true, message: "Please input your confirm password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords can't match.");
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </div>
        <Form.Item {...tailLayout}>
          <Space direction="vertical"  >
            <Checkbox checked={hasUpper}>At least one Upper letter</Checkbox>
            <Checkbox checked={hasLower}>At least one Lower letter</Checkbox>
            <Checkbox checked={hasNumber}>At least one number</Checkbox>
            <Checkbox checked={hasSpecialChar}>At least one special character</Checkbox>
            <Checkbox checked={doesNotStartWithSpecialChar}>Does not start with a special character</Checkbox>
            <Checkbox checked={minLength}>At least 6 characters</Checkbox>
          </Space>
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
