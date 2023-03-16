import { Affix, Tabs } from "antd";
import React from "react";
import menuItems from "../../data/menu";
import {
  AppstoreTwoTone,
  HeartTwoTone,
  ScheduleTwoTone,
} from "@ant-design/icons";
import { COLORS } from "../../constants/colors";
import "./TabMenu.css";

const TabMenu = () => {
  const getIcon = (icon) => {
    if (_.isEqual(icon, "explore"))
      return <AppstoreTwoTone twoToneColor={COLORS.PRIMARY} />;
    else if (_.isEqual(icon, "bookings"))
      return <ScheduleTwoTone twoToneColor={COLORS.PRIMARY} />;
    else if (_.isEqual(icon, "account"))
      return <HeartTwoTone twoToneColor={COLORS.PRIMARY} />;
  };

  return (
    <Affix offsetBottom={0}>
      <Tabs
        style={{
          backgroundColor: "white",
          padding: "0px 20px",
          alignItems: "center",
        }}
        defaultActiveKey="1"
        items={menuItems.map(({ name, icon, id }) => {
          return {
            label: (
              <span
                style={{
                  backgroundColor: "white",
                }}
              >
                {getIcon(icon)}
                {name}
              </span>
            ),
            key: id,
          };
        })}
      />
    </Affix>
  );
};

export default TabMenu;
