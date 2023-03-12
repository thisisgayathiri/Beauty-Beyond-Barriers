import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import SubTitleHeader from "../common/SubTitleHeader";
import TitleHeader from "../common/TitleHeader";
import TitlePreviousPage from "../common/TitlePreviousPage";
import "./Signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    console.log("Signup successful!");
    navigate("/user-preferences");
  };

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <TitlePreviousPage navTo={"/"} />
      <TitleHeader title="Set up your profile" />
      <SubTitleHeader subTitle="Create an account so you can manage your bookings and services at ease" />

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
