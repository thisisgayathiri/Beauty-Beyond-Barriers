import React from "react";
import SubTitleHeader from "../common/SubTitleHeader";

import TitleHeader from "../common/TitleHeader";
import TitlePreviousPage from "../common/TitlePreviousPage";

const UserPreferences = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <TitlePreviousPage showBack={false} showSkip={true} />
      <TitleHeader title="Tell us your preferences" />
      <SubTitleHeader subTitle="And we'll help you find best services near you" />
    </div>
  );
};

export default UserPreferences;