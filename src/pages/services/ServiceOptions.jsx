import React, { useState } from "react";

import { Avatar, Card, List } from "antd";
import services from "../../data/services";
import Meta from "antd/es/card/Meta";
import { COLORS } from "../../constants/colors";


const ServiceOptions = ({}) => {

  const [details, setDetails] = useState(services);

  const click = (id) => {
    const updated = details.map(detail => {
      if( detail.id == id && detail.isSelected == true) {
        detail.isSelected = false;
      } else if(detail.id == id && !detail.isSelected) {
         detail.isSelected = true;
      } 
      return detail;
    })
   
    setDetails(updated);
  }

  return (
    <List
      grid={{
        gutter: 3,
      }}
      style = {{marginLeft: "50px", paddingLeft: "10px", paddingTop: "20px"}}
      dataSource={details}
      renderItem={(item) => (
        <List.Item>
          <Card title = {item.name} onClick={() => click(item.id)} style={{
            padding: '0px 10px',
            width: "250px",
            borderColor: item.isSelected? "darkgray" : "",
            borderWidth: item.isSelected?  "thick": ""
          }}>
            <img  style={{ "width" : "100px", height: "100px"}} src={item.image}></img>

          </Card>
        </List.Item>
      )}
    />
  );
};

export default ServiceOptions;
