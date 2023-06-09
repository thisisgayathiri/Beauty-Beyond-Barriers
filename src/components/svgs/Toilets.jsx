import React from "react";
import { COLORS } from "../../constants/colors";

const ToiletsIcon = (props) => {
  return (
    <svg
      width="30px"
      height="40px"
      viewBox="0 0 700 600"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill={COLORS.PRIMARY} d="M255.73 264.23h316.4c3.863 0 7-3.137 7-7s-3.137-7-7-7h-316.4c-3.863 0-7 3.137-7 7s3.137 7 7 7zM168 259h39.199c11.582 0 21-9.418 21-21V105H147v133c0 11.582 9.418 21 21 21zM557.54 315.63H260.33c25.543 36.852 83.172 60.973 148.47 60.973 66.539 0 123.87-24.949 148.74-60.973zM569.54 287.93H147v13.691h418.31a68.043 68.043 0 0 0 4.223-13.691zM228.2 71.398c0-11.582-9.418-21-21-21h-39.199c-11.582 0-21 9.418-21 21V91H228.2zM343 382.3c-16.398-4.297-31.605-10.164-45.215-17.375v49.945H343zM273.93 428.87h69.066v35.465H273.93z" />
      <path fill={COLORS.PRIMARY} d="M460.6 385.54c-16.391 3.281-33.777 5.063-51.793 5.063-17.93 0-35.336-1.81-51.805-5.098l-.004 110.1h-210v17.035h432.14v-17.035h-118.54zM147 268.1h432.14v11.898H147z" />
    </svg>
  );
};

export default ToiletsIcon;
