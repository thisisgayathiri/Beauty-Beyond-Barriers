import { Row } from "antd";
import React from "react";
import Title from "antd/es/typography/Title";
import { COLORS } from "../../constants/colors";

const TitleHeader = ({ title }) => {
  return (
    <div>
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
          {title}
        </Title>
      </Row>
    </div>
  );
};

export default TitleHeader;
