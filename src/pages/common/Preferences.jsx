import React from "react";

import { Card, List } from "antd";

const data = [
  {
    title: "Wheelchair accessible",
    icon: "♿︎",
  },
  {
    title: "Lift",
    icon: "🛗",
  },
  {
    title: "Ramps",
    icon: "",
  },
  {
    title: "Noiseless",
    icon: "🔇",
  },
  {
    title: "Silent rooms",
    icon: "🤫",
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
        <List.Item>
          <Card style={{
            padding: '0px 10px',
          }}>
            <div>{item.icon}</div>
            <span>{item.title}</span>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default Preferences;
