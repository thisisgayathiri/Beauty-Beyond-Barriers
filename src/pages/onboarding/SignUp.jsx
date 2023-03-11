import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import "./Signup.css";

const SignUp = () => {
  const onFinish = () => {
    console.log("Signup successful!");
  };

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Row
        style={{
          padding: "50px 20px 0px 20px",
          backgroundColor: COLORS.PRIMARY,
        }}
      >
        <NavLink to="/">
          <ArrowLeftOutlined
            style={{
              fontSize: "30px",
              color: COLORS.SECONDARY,
            }}
          />
        </NavLink>
      </Row>
      <Row
        style={{
          backgroundColor: COLORS.PRIMARY,
        }}
      >
        <Title
          style={{
            padding: "0 20px",
            color: COLORS.SECONDARY,
          }}
          level={3}
        >
          Set up your profile
        </Title>
      </Row>
      <Row
        style={{
          backgroundColor: COLORS.PRIMARY,
        }}
      >
        <Title
          style={{
            padding: "0 20px 20px 20px",
            textAlign: "left",
            fontWeight: 400,
            marginTop: "10px",
            color: COLORS.SECONDARY,
          }}
          level={5}
        >
          Create an account so you can manage your bookings and services at ease
        </Title>
      </Row>

      <Form
        name="sign-up"
        className="signup-container"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item className="signup-form-item" name="name" label="Name">
          <Input />
        </Form.Item>

        <Form.Item className="signup-form-item" name="email" label="Email">
          <Input />
        </Form.Item>

        <Form.Item
          className="signup-form-item"
          name="dob"
          label="Date of birth"
        >
          <Input />
        </Form.Item>

        <Form.Item className="signup-form-item button">
          <Button
            size="large"
            htmlType="submit"
            style={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.PRIMARY_LIGHT,
              fontWeight: 500,
              borderColor: COLORS.PRIMARY_LIGHT,
            }}
            className="login-form-button"
          >
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
