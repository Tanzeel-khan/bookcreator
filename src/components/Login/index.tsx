import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "../../utils/style.css";
import { Container, Grids, LoginButton, SignUpPara } from "./style";
import Theme from "../../constants/theme";

const Login = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Container>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{color:'rgb(183 108 145)'}}>Remember me</Checkbox>
          </Form.Item>

          <a
            className="login-form-forgot"
            href="#/"
            style={{ position: "absolute", right: 0, color: 'rgb(183 108 145)' }}
          >
            Forgot your password?
          </a>
        </Form.Item>

        <Form.Item>
          <Grids>
            <LoginButton>
              Log in
            </LoginButton>
            <SignUpPara>
              Need an account? <a href="#/" style={{color:'rgb(183 108 145)'}}>sign-up here</a>
            </SignUpPara>
          </Grids>
        </Form.Item>
      </Form>
    </Container>
  );
};


export default Login;
