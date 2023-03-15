import React from "react";
import { COLORS } from "../../constants/colors";

const LiftIcon = (props) => {
  return (
    <svg
      width="30px"
      height="40px"
      viewBox="0 0 700 600"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill={COLORS.PRIMARY} d="M559.11 212.8h-34.105v89.598h34.105a5.095 5.095 0 0 0 5.094-5.094v-79.41a5.095 5.095 0 0 0-5.094-5.094zm-6.106 70a8.4 8.4 0 0 1-16.8 0v-11.199a8.402 8.402 0 0 1 8.402-8.402c4.637 0 8.398 3.761 8.398 8.402zm0-39.199a8.4 8.4 0 0 1-16.8 0v-11.203a8.4 8.4 0 0 1 16.8 0z" />
      <path fill={COLORS.PRIMARY} d="M553 464.8h-46.199V88.93a27.325 27.325 0 0 0-27.441-27.328H201.04a27.301 27.301 0 0 0-19.285 8.024 27.323 27.323 0 0 0-7.984 19.305V464.8H127.4a8.4 8.4 0 0 0 0 16.8H553a8.399 8.399 0 0 0 8.398-8.402 8.398 8.398 0 0 0-8.398-8.398zm-81.312 0V112c0-2.969-1.18-5.82-3.281-7.918a11.19 11.19 0 0 0-7.918-3.281h-112v364h-16.801v-364h-112c-6.184 0-11.2 5.011-11.2 11.199v352.8h-16.8V112a28 28 0 0 1 28-28h240.69c7.426 0 14.55 2.949 19.8 8.199a28.012 28.012 0 0 1 8.2 19.8v352.8z" />
    </svg>
  );
};

export default LiftIcon;
