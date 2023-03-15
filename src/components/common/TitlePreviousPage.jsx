import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Row, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants/colors";
const { Text } = Typography;

const TitlePreviousPage = ({ navTo, showBack = true, showSkip = false }) => {
  return (
    <div>
      {showBack && (
        <Row
          style={{
            padding: "50px 20px 0px 20px",
            backgroundColor: COLORS.PRIMARY,
          }}
        >
          <NavLink to={navTo}>
            <ArrowLeftOutlined
              style={{
                fontSize: "30px",
                color: COLORS.SECONDARY,
              }}
            />
          </NavLink>
        </Row>
      )}

      {showSkip && (
        <Row
          justify={"end"}
          style={{
            padding: "30px 20px 0px 20px",
            backgroundColor: COLORS.PRIMARY,
          }}
        >
          <NavLink to={navTo}>
            <Text
              style={{
                color: COLORS.SECONDARY,
              }}
            >
              Skip
            </Text>
          </NavLink>
        </Row>
      )}
    </div>
  );
};

export default TitlePreviousPage;
