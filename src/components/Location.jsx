import { EnvironmentOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const Location = ({ location }) => {
  return (
    <Card
      style={{
        padding: "10px",
      }}
    >
      <EnvironmentOutlined
        style={{
          marginRight: "5px",
        }}
      />
      <span>{location}</span>
    </Card>
  );
};

export default Location;
