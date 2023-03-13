import React, { useState } from "react";
import { Avatar, Button, Image, Row } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { COLORS } from "../constants/colors";
import { DatePicker, Space } from 'antd';
import TitleHeader from "./common/TitleHeader";
import { useNavigate } from "react-router";

function Appointment() {
  const [showSlots, setShowSlots] = useState(false);
  const [slotsClicked, setSlotsCliked] = useState(false);
  const [rclicked, setRClicked] = useState(false);
  const navigate = useNavigate();

  const onDateChange = () => {
    setShowSlots(true);
  };

  const onSlotsCliked = () => {
    setSlotsCliked(true);
  }

  const onRecurringClicked = () => {
    setRClicked(true);
  }

  const confirm = () => {
    navigate("/confirmation");
  }

  return (
    <div
      style={{
        backgroundColor: COLORS.PRIMARY,
        height: "250vh",
        paddingLeft: "20px"
      }}
    >

      <Row justify={"center"}>
        <Image
          style={{ padding: "30px", borderRadius: "95%" }}
          preview={{ visible: false }}
          width={300}
          height={200}
          src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/GettyImages-947995974-1920x1152.jpg"
          onClick={() => setVisible(false)}
        />
      </Row>


      <Row justify={"center"}>
        <Title
          level={3}
          style={{
            textAlign: "center",
            color: COLORS.SECONDARY,
          }}
        >
          Studio 11
        </Title>
      </Row>


      <TitleHeader title="Professional" />
      <Row style={{ padding: "20px" }}>
        <Avatar style={{ height: "50px", width: "50px" }} src="https://www.betterteam.com/images/hair-stylist-job-description-6010x4012-20201120.jpeg?crop=21:16,smart&width=420&dpr=2" />
        <Text style={{ padding: "10px" }}>Pheobe</Text>
      </Row>


      <TitleHeader title="Service" />
      <Row style={{ padding: "20px" }}>
        <Avatar style={{ height: "50px", width: "50px" }} src="https://www.refinery29.com/images/11139269.jpeg?crop=40%3A21" />
        <Text style={{ padding: "10px" }}>Hair Styling</Text>
      </Row>



      <TitleHeader title="Appointment Date" />
      <Row justify={"center"}>
        <DatePicker onChange={onDateChange} picker="week" />
      </Row>



      <TitleHeader title="Available Slots" />

      {showSlots && (<Row justify={"center"} >

        <Button
          size="large"
          htmlType="submit"
          onClick={onSlotsCliked}
          style={{
            backgroundColor: slotsClicked ? COLORS.WHITE : COLORS.PRIMARY,
            color: slotsClicked ? COLORS.PRIMARY : COLORS.PRIMARY_LIGHT,
            fontWeight: 500,
            borderColor: COLORS.PRIMARY_LIGHT,
            marginRight: "10px"
          }}
          className="login-form-button"
        >
          11:00
        </Button>


        <Button
          size="large"
          htmlType="submit"
          style={{
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.PRIMARY_LIGHT,
            fontWeight: 500,
            borderColor: COLORS.PRIMARY_LIGHT,
            marginRight: "10px"
          }}
          className="login-form-button"
        >
          12:00
        </Button>


        <Button
          size="large"
          htmlType="submit"
          style={{
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.PRIMARY_LIGHT,
            fontWeight: 500,
            borderColor: COLORS.PRIMARY_LIGHT,
            marginRight: "10px"
          }}
          className="login-form-button"
        >
          13:00
        </Button>

      </Row>)}

      

      <TitleHeader title="Recurring Appointment" />


      <Row justify={"center"} >
        <Button
          size="large"
          htmlType="submit"
          onClick={onRecurringClicked}
          style={{
            backgroundColor: rclicked ? COLORS.WHITE : COLORS.PRIMARY,
            color: rclicked ? COLORS.PRIMARY : COLORS.PRIMARY_LIGHT,
            fontWeight: 500,
            borderColor: COLORS.PRIMARY_LIGHT,
            marginRight: "10px"
          }}
          className="login-form-button"
        >
          Biweekly
        </Button>


        <Button
          size="large"
          htmlType="submit"
          style={{

            backgroundColor: COLORS.PRIMARY,
            color: COLORS.PRIMARY_LIGHT,
            fontWeight: 500,
            borderColor: COLORS.PRIMARY_LIGHT,

          }}
          className="login-form-button"
        >
          Monthly
        </Button>

      </Row>


      <Button
        onClick= {confirm}
        size="large"
        htmlType="submit"
     
        style={{
          marginTop: "80px",
          backgroundColor: COLORS.PRIMARY,
          color: COLORS.PRIMARY_LIGHT,
          fontWeight: 500,
          borderColor: COLORS.PRIMARY_LIGHT,
         
        }}
        className="login-form-button"
      >
        Confirm Appointment
      </Button>

    </div>
  );
}

export default Appointment;