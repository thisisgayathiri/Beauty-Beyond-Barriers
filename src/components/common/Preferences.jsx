import React, { useState } from "react";
import _, { set } from "lodash";
import "./Preferences.css";

import { Card, List } from "antd";
import AccessibilityIcon from "../svgs/Accessibility";
import LiftIcon from "../svgs/Lift";
import NoiseFreeIcon from "../svgs/NoiseFree";
import HelpingHandIcon from "../svgs/HelpingHand";
import preferences from "../../data/preferences";
import CafeIcon from "../svgs/Cafe";
import DisabledParkingIcon from "../svgs/DisabledParking";
import HomeVisitIcon from "../svgs/HomeVisit";
import KidSafeIcon from "../svgs/KidSafe";
import LockerRoomIcon from "../svgs/LockerRoom";
import ToiletsIcon from "../svgs/Toilets";
import GrabRailsIcon from "../svgs/GrabRails";
import { COLORS } from "../../constants/colors";

const getComponentbyIcon = (preference) => {
  if (_.isEqual(preference, "WHEELCHAIR")) return <AccessibilityIcon />;
  else if (_.isEqual(preference, "LIFT")) return <LiftIcon />;
  else if (_.isEqual(preference, "NOISEFREE")) return <NoiseFreeIcon />;
  else if (_.isEqual(preference, "HELP")) return <HelpingHandIcon />;
  else if (_.isEqual(preference, "CAFE")) return <CafeIcon />;
  else if (_.isEqual(preference, "R_PARKING")) return <DisabledParkingIcon />;
  else if (_.isEqual(preference, "RAILS")) return <GrabRailsIcon />;
  else if (_.isEqual(preference, "HOME_VISIT")) return <HomeVisitIcon />;
  else if (_.isEqual(preference, "KID_SAFE")) return <KidSafeIcon />;
  else if (_.isEqual(preference, "LOCKER_ROOMS")) return <LockerRoomIcon />;
  else if (_.isEqual(preference, "TOILETS")) return <ToiletsIcon />;
};




const Preferences = ({ }) => {
  const [preferencesList, setPreferencesList] = useState(preferences);
  const clickPreferences = (id) => {
    const prefs = preferencesList.map((item) => {
      if (item.id == id && item.isSelected == false) {
        item.isSelected = true;
      } else if (item.id == id && item.isSelected) {
        item.isSelected = false;
      }
      return item;
    })
    setPreferencesList(prefs);
  }

  return (
    <List
      grid={{
        gutter: 3,
      }}
      className='preferences-list'
      dataSource={preferencesList}
      renderItem={(item) => (
        <List.Item justify="space-around">
          <Card
            onClick={() => clickPreferences(item.id)}
            hoverable
            style={{
              padding: "0px 10px",
              borderColor: item.isSelected ? COLORS.PRIMARY_DARK : ''
            }}
          >
            <span className="list-item-icon">
              {getComponentbyIcon(item.icon)}
            </span>
            <span className="list-item-icon-text">{item.title}</span>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default Preferences;
