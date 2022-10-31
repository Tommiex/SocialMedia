import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "../component/CSS/gmailSignUp.css";
import "../component/CSS/gmailLogin.css";
import "../container/CSS/Login.css";
import { Link } from "react-router-dom";
import img from "../assets/img.jpg";


import { useState } from "react";
const ReLogin = ({ onSubmit }) => {
  const onFinish = (values) => {
    // console.log("Success:", values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="Login">
      <section>
        <div className="imgLogin">
          <img src={img} />
        </div>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            type="Email"
            className="authinput"
            id="txtEmail"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            type="Password"
            className="authinput"
            id="txtPassword"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            <p className="d-inline"> or </p>
            <Link to="/registration/signup">
              <li className="d-inline">Register now!</li>
            </Link>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default ReLogin;
