import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./CSS/gmailLogin.css";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/img.jpg";
import { useState } from "react";
import { loginform } from "../formSource";

const ReLogin = ({ handleSubmit }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const getInputValue = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setUserInfo({ ...userInfo, [id]: value });
  };
  console.log(userInfo);
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  //   handleSubmit(values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  const handleFinish = () => {
    handleSubmit(userInfo);
  };

  return (
    <>
      <div className="loginForm">
        {loginform.map((input) => (
          <>
            <div className="formInput" key={input.id}>
              <div className="Icon">{input.icon}</div>
              <input
                id={input.id}
                type={input.type}
                onChange={getInputValue}
                required="required"
              ></input>
              <span className="placeholder">{input.placeholder}</span>
              <span className="label">{input.label}</span>
            </div>
          </>
        ))}
      </div>
      <div className='signupLine'>
        <button onClick={handleFinish} className="loginBtn">
          Login
        </button>
        <div className="spanAcc">
          <span>Create your account?    </span>
          <button
                className="registerBtn"
                onFocus={() => {
                  navigate("/registration/signup")
                }}
              >
                Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default ReLogin;
