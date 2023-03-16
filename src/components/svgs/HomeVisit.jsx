import React from "react";
import { COLORS } from "../../constants/colors";

const HomeVisitIcon = (props) => {
  return (
    <svg
    width="30px"
    height="40px"
    viewBox="0 0 700 600"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={COLORS.PRIMARY} d="M186.67 233.33h70v140h-70zM163.33 396.67H280v23.332H163.33zM583.33 396.67H466.67c-25.762 0-46.668 20.906-46.668 46.668v116.67h210v-116.67c0-25.762-20.906-46.668-46.668-46.668z" />
    <path fill={COLORS.PRIMARY} d="M466.67 373.33v-1.328c-14.398-14.723-23.332-34.79-23.332-57.004s8.938-42.305 23.332-57.027V163.33h46.668l-70-51.566-.004-65.098h-46.668v30.707l-105-77.375-221.67 163.33h46.668v210h46.668l-.004-163.33h116.67v163.33zM373.334 210h46.668v46.668h-46.668zm0 70h46.668v46.668h-46.668zm-70-70h46.668v46.668h-46.668zm0 70h46.668v46.668h-46.668z" />
    <path fill={COLORS.PRIMARY} d="M583.33 315c0 32.215-26.117 58.332-58.332 58.332S466.666 347.215 466.666 315s26.117-58.332 58.332-58.332S583.33 282.785 583.33 315" />
  </svg>
  );
};

export default HomeVisitIcon;
