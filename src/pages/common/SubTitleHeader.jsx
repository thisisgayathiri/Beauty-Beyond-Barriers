import { Row } from "antd";
import React from "react";
import Title from "antd/es/typography/Title";
import { COLORS } from "../../constants/colors";

const SubTitleHeader = ({ subTitle }) => {
  return <div>
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
            {subTitle}
        </Title>
      </Row>
  </div>;
};

export default SubTitleHeader;
