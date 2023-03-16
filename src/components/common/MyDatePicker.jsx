import { DatePicker } from "antd";
import React from "react";
import dayjs from "dayjs";

const MyDatePicker = () => {
  const dateFormat = "M/DD/YYYY";
  const currentDate = new Date();
  return (
    <DatePicker
      size="large"
      defaultValue={dayjs(
        `${
          currentDate.getMonth() + 1
        }/${currentDate.getDate()}/${currentDate.getFullYear()}`,
        dateFormat
      )}
      format={dateFormat}
      style={{
        width: "100%",
      }}
    />
  );
};

export default MyDatePicker;
