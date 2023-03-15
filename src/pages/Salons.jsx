import Card from "antd/es/card/Card";
import React from "react";
import salons from "../data/salons";

const Salons = () => {
  const salonCard = _.map(salons, (salon) => {
    return (
      <>
        <Card
          hoverable
          style={{ width: "200px", display: "inline-block" }}
          cover={<img alt="salon" src={salon.image} />}
        >
          <span>{salon.name}</span>
        </Card>
      </>
    );
  });

  return (
    <div style={{ whiteSpace: "nowrap", overflow: "scroll", padding: "20px" }}>
      {salonCard}
    </div>
  );
};

export default Salons;
