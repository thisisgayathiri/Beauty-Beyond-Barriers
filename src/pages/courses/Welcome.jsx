import { RightCircleTwoTone } from "@ant-design/icons";
import { Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants/colors";

const Welcome = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Row>
          <div
            style={{
              width: "400px",
              height: "300px",
            }}
          >
            <img
              src="/images/logo-img.svg"
              height={"100%"}
              width={"100%"}
              alt="logo"
            />
          </div>
        </Row>

        <Row
          justify={"center"}
          style={{
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              marginRight: "15px",
            }}
          >
            <img
              src="/images/logo-1.png"
              height={"100%"}
              width={"100%"}
              alt="logo"
            />
          </div>
          <Title
            style={{
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            beauty beyond barriers'
          </Title>
        </Row>

        <Row
          justify={"center"}
          style={{
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "250px",
            }}
          >
            <img
              src="/images/logo-ally.png"
              alt="logo"
              height={"100%"}
              width={"100%"}
            />
          </div>
        </Row>
        <Row justify={"center"}>
          <Title level={5}>Empowering you to beautify the world.</Title>
        </Row>

        <Row
          justify={"center"}
          style={{
            marginTop: "40px",
          }}
        >
          <NavLink to="/courses">
            <RightCircleTwoTone
              style={{ fontSize: "50px" }}
              twoToneColor={COLORS.PRIMARY}
            />
          </NavLink>
        </Row>
      </div>
    </>
  );
};

export default Welcome;
