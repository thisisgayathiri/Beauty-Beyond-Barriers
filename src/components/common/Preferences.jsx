import React from "react";
import _ from 'lodash'
import './Preferences.css'

import { Card, List } from "antd";
import AccessibilityIcon from "../svgs/Accessibility";
import LiftIcon from "../svgs/Lift";
import NoiseFreeIcon from "../svgs/NoiseFree";
import HelpingHandIcon from "../svgs/HelpingHand";

const getComponentbyIcon = (preference) => {
  if(_.isEqual(preference, 'WHEELCHAIR'))
    return <AccessibilityIcon />
  else if (_.isEqual(preference, 'LIFT')) 
    return <LiftIcon />
  else if (_.isEqual(preference, 'NOISEFREE'))
    return <NoiseFreeIcon />
  else if (_.isEqual(preference, 'HELP'))
    return <HelpingHandIcon />
}

const data = [
  {
    title: "Wheelchair accessible",
    icon: "WHEELCHAIR",
  },
  {
    title: "Lift",
    icon: "LIFT",
  },
  {
    title: "Noiseless",
    icon: "NOISEFREE",
  },
  {
    title: "Helping hand",
    icon: "HELP",
  },
];

const Preferences = ({}) => {
  return (
    <List
      grid={{
        gutter: 3,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item justify="space-around">
          <Card hoverable style={{
            padding: '0px 10px',
          }}>
            <span className='list-item-icon'>{getComponentbyIcon(item.icon)}</span>
            <span>{item.title}</span>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default Preferences;
