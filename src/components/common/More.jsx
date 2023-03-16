import React from "react";

import Title from "antd/es/typography/Title";
import { COLORS } from "../../constants/colors";
import { NavLink } from "react-router-dom";

const More = ({navTo}) => {
  return (
    <NavLink to={navTo}>
      <Title
        style={{
          padding: "0 0px 0px 0px",
          fontWeight: 400,
          color: COLORS.SECONDARY,
        }}
        level={5}
      >
        More
      </Title>
    </NavLink>
  );
};

export default More;
