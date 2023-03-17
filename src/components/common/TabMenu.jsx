import { Affix, Tabs } from "antd";
import React from "react";
import {
  AppstoreTwoTone,
  HeartTwoTone,
  ScheduleTwoTone,
} from "@ant-design/icons";
import { COLORS } from "../../constants/colors";
import "./TabMenu.css";
import ProfileService from "../stylist-profile/ProfileService";
import ProfileBooking from "../stylist-profile/ProfileBooking";
import ProfileAbout from "../stylist-profile/ProfileAbout";

const TabMenu = ({ menuItems, type }) => {
  const getIcon = (icon) => {
    if (_.isEqual(icon, "explore"))
      return <AppstoreTwoTone twoToneColor={COLORS.PRIMARY} />;
    else if (_.isEqual(icon, "bookings"))
      return <ScheduleTwoTone twoToneColor={COLORS.PRIMARY} />;
    else if (_.isEqual(icon, "account"))
      return <HeartTwoTone twoToneColor={COLORS.PRIMARY} />;
  };

  const getChildren = (menu) => {
    if (_.isEqual(menu, "Services")) return <ProfileService />;
    else if (_.isEqual(menu, "Book")) return <ProfileBooking />;
    else if (_.isEqual(menu, "About")) return <ProfileAbout />;
    else return null;
  };

  return (
    <Affix offsetBottom={0}>
      <Tabs
        type={type}
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
            children: getChildren(name),
          };
        })}
      />
    </Affix>
  );
};

export default TabMenu;
