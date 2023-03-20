import Card from "antd/es/card/Card";
import React from "react";
import { NavLink } from "react-router-dom";
import salons from "../data/salons";

const Salons = () => {
  const salonCard = _.map(salons, (salon) => {
    return (
      <>
        <NavLink to="/profile-salon">
          <Card
            hoverable
            style={{
              width: "200px",
              display: "inline-block",
              margin: "0 10px",
            }}
            cover={<img alt="salon" src={salon.image} />}
          >
            <span
              style={{
                padding: "10px 10px",
              }}
            >
              {salon.name}
            </span>
          </Card>
        </NavLink>
      </>
    );
  });

  return (
    <div
      style={{
        whiteSpace: "nowrap",
        overflow: "scroll",
        padding: "10px",
        margin: "10px",
      }}
    >
      {salonCard}
    </div>
  );
};

export default Salons;
