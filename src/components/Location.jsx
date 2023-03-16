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
      <span
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          width: "170px",
          display: "inline-block",
        }}
      >
        {location}
      </span>
    </Card>
  );
};

export default Location;
