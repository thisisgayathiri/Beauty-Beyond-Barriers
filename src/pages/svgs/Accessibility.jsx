import React from "react";
import { COLORS } from "../../constants/colors";

const AccessibilityIcon = (props) => {
  return (
    <svg
    width="30px"
    height="40px"
    viewBox="0 0 700 600"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={COLORS.PRIMARY} d="m401.36 393.26 45.652 52.785c-22.609 66.281-85.414 113.95-159.34 113.95-92.965 0-168.32-75.359-168.32-168.32 0-82.723 59.672-151.51 138.32-165.65v55.965c-48.188 13.199-83.715 57.371-83.715 109.69 0 62.699 51.012 113.71 113.71 113.71 62.176 0 112.84-50.16 113.7-112.13zM311.215 0c-32.508 0-58.863 26.355-58.863 58.863 0 32.508 26.359 58.863 58.863 58.863 32.508 0 58.863-26.355 58.863-58.863C370.078 26.355 343.723 0 311.215 0zm242.13 416.17H527.2l-71.703-86.195a27.333 27.333 0 0 0-20.996-9.84l-98.492.004v-50.28h78.133c15.074 0 27.301-12.228 27.301-27.306 0-15.082-12.227-27.305-27.301-27.305l-78.133-.004v-55.352c0-15.082-12.227-27.305-27.301-27.305-15.082 0-27.305 12.227-27.305 27.305v187.55c0 15.074 12.227 27.305 27.305 27.305h112.99l71.707 86.195a27.303 27.303 0 0 0 20.988 9.844h38.949c15.082 0 27.305-12.23 27.305-27.312-.004-15.078-12.223-27.305-27.305-27.305z" />
  </svg>
  );
};

export default AccessibilityIcon;
