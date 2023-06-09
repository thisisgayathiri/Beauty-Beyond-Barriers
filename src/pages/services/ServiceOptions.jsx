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
      style={{ marginLeft: "10px" }}
      dataSource={details}
      renderItem={(item) => (
        <List.Item>
          <Card
            onClick={() => click(item.id)}
            style={{
              padding: "0px 10px",
              display: 'flex',
              width: '100px',
              flexDirection: 'column',
              alignItems: 'center',
              borderColor: item.isSelected ? "darkgray" : "",
            }}
            cover={<img
            alt='service-logo'
              style={{ width: "50px", margin: '10px 0 0 0',  textAlign: 'center', }}
              src={item.image}
            ></img>}
          >
            <p style={{
              textAlign: 'center',
              padding: 0,
              margin: '5px'
            }}>
            {item.name}
            </p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default ServiceOptions;
