import { LeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const StylistProfile = () => {
  return (
    <>
      <Row
        gutter={24}
        style={{
          margin: "10px",
          alignItems: "center",
        }}
      >
        <Col span={2}>
          <NavLink to={"/stylists"}>
            <LeftOutlined />
          </NavLink>
        </Col>
      </Row>
    </>
  );
};

export default StylistProfile;
