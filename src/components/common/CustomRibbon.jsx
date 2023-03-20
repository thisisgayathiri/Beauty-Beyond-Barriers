import React from "react";
import { COLORS } from "../../constants/colors";
import "./CustomRibbon.css";

const CustomRibbon = ({ children, text, color }) => {
  return (
    <>
      <div
        className="custom-ant-ribbon ant-ribbon-placement-end"
        style={{
          color,
          backgroundColor: color,
        }}
      >
        <span className="ant-ribbon-text" style={{
          color: COLORS.WHITE
        }}>{text}</span>
      </div>
      {children}
    </>
  );
};

export default CustomRibbon;
