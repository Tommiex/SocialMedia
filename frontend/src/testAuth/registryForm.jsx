import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import "../component/CSS/gmailSignUp.css";

const ReSignup = ({onSubmit}) => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="gmailSignUp">
      <h1>SignUp</h1>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="email"
          name="email"
          type="Email"
          placeholer="Email"
          className="authinput"
          id="txtEmail"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          type="Password"
          placeholer="Password"
          className="authinput"
          id="txtPassword"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <button
        onFocus={() => {
          navigate("/registration");
        }}
      >
        back to Login page
      </button>
      <button className="button" id="btnLogout">
        Logout
      </button>
    </section>
  );
};

export default ReSignup;
