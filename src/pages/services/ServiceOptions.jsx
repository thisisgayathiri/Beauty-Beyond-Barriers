import React, { useState } from "react";

import { Card, List } from "antd";
import services from "../../data/services";
import Meta from "antd/es/card/Meta";

const ServiceOptions = ({}) => {
  const [details, setDetails] = useState(services);

  const click = (id) => {
    const updated = details.map((detail) => {
      if (detail.id == id && detail.isSelected == true) {
        detail.isSelected = false;
      } else if (detail.id == id && !detail.isSelected) {
        detail.isSelected = true;
      }
      return detail;
    });

    setDetails(updated);
  };

  return (
    <List
      grid={{
        gutter: 12,
      }}
      style={{ marginLeft: "20px" }}
      dataSource={details}
      renderItem={(item) => (
        <List.Item>
          <Card
            onClick={() => click(item.id)}
            style={{
              padding: "0px 10px",
              borderColor: item.isSelected ? "darkgray" : "",
              borderWidth: item.isSelected ? "thick" : "",
            }}
            cover={<img
              style={{ width: "75px", height: "75px" }}
              src={item.image}
            ></img>}
          >
            <Meta style={{
              textAlign: 'center'
            }} title={item.name} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default ServiceOptions;
