import { Button } from "antd";
import React from "react";
import {Redirect, useNavigate} from 'react-router-dom';
import { COLORS } from "../../constants/colors";
import Preferences from "../common/Preferences";
import SubTitleHeader from "../common/SubTitleHeader";

import TitleHeader from "../common/TitleHeader";
import TitlePreviousPage from "../common/TitlePreviousPage";



const UserPreferences = () => {

  const navigate = useNavigate();

  const confirm = () => {
    navigate("/services");
  }

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <TitlePreviousPage showBack={false} showSkip={true} />
      <TitleHeader title="Tell us your preferences" />
      <SubTitleHeader subTitle="And we'll help you find best services near you" />

      <Preferences />



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
};

export default UserPreferences;
