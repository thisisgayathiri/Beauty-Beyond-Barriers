import React from "react";
import services from "../../data/services";
import {Redirect, useNavigate} from 'react-router-dom';
import ServiceOptions from "./ServiceOptions";
import TitlePreviousPage from "../common/TitlePreviousPage";
import TitleHeader from "../common/TitleHeader";
import SubTitleHeader from "../common/SubTitleHeader";
import { Button } from "antd";
import { COLORS } from "../../constants/colors";


function Services() {
  const navigate = useNavigate();


  const confirm = () => {
    navigate("/salons");
  }

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <TitlePreviousPage showBack={false} showSkip={true} />
      <TitleHeader title="What you are looking you?" />
      <SubTitleHeader subTitle="And we'll help you find best services near you" />

      <ServiceOptions />

      <Button
        onClick= {confirm}
        size="large"
        htmlType="submit"
     
        style={{
          marginTop: "50px",
          backgroundColor: COLORS.PRIMARY,
          color: COLORS.PRIMARY_LIGHT,
          fontWeight: 500,
          width: "150px",
          borderColor: COLORS.PRIMARY_LIGHT,
         
        }}
        className="login-form-button"
      >
        Continue
      </Button>
    </div>
  );
}

export default Services;