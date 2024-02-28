import styles from "./SignInForm.module.css";
import { Form, Input, Button, Checkbox, message, } from "antd";
import { signIn } from "../../redux/user/slice";
import { useSelector, useAppDispatch, } from "../../redux/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const SignInForm = () => {
  const { t } = useTranslation();
  const loading = useSelector(s => s.user.loading)
  const jwt = useSelector(s => s.user.token)
  const error = useSelector(s => s.user.error)

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt !== null) {
      navigate("/");
    }
  }, [jwt])

  const onFinish = (values: any) => {
    console.log("Success:", values);
    try {
      dispatch(signIn({
        email: values.username,
        password: values.password
      }))
    } catch (error) {
      alert(`${t("form.loginFail")}\n${error}`)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
          <Input.Password placeholder={t("form.password")} />
        </Form.Item>
      </div>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>
          {t("form.stayLogin")}
        </Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          {t("form.login")}
        </Button>
      </Form.Item>
    </Form>
  );
};
