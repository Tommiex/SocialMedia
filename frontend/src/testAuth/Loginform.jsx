import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./CSS/gmailLogin.css";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/img.jpg";
import { useState } from "react";
import { loginform } from "../formSource";

const ReLogin = ({ handleSubmit }) => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    handleSubmit(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      
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
              required="required"
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
          <Form.Item className="buttonDiv">
            <button
              type="primary"
              htmlType="submit"
              className="loginBtn"
            >
              Login
            </button>
            <p className="d-inline"> or </p>
            <button
              className="registerBtn"
              onFocus={() => {
                navigate("/registration/signup");
              }}
            >
              Register now!
            </button>
          </Form.Item>
        </Form>
    </div>
  );
};

export default ReLogin;
