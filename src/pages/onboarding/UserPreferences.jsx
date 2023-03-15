import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import Preferences from "../common/Preferences";
import SubTitleHeader from "../common/SubTitleHeader";

import TitleHeader from "../common/TitleHeader";
import TitlePreviousPage from "../common/TitlePreviousPage";

const UserPreferences = () => {
  const navigate = useNavigate();

  const savePreferences = () => {
    navigate("/services");
  };

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
        onClick={savePreferences}
        size="large"
        htmlType="submit"
        style={{
          marginTop: "20px",
          backgroundColor: COLORS.PRIMARY,
          color: COLORS.PRIMARY_LIGHT,
          fontWeight: 500,
          borderColor: COLORS.PRIMARY_LIGHT,

          position: 'absolute',
          bottom: '20px',
          left: 0,
          margin: '0 10px 0 10px',
          width: '95%'
        }}
        className="login-form-button"
      >
        Save preferences
      </Button>
    </div>
  );
};

export default UserPreferences;
