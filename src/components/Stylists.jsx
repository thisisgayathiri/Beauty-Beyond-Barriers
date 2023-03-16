import Card from "antd/es/card/Card";
import React from "react";
import stylists from "../data/stylists";

const Stylists = () => {
  const salonCard = _.map(stylists, (stylist) => {
    return (
      <>
        <Card
          hoverable
          style={{ width: "200px", display: "inline-block", margin: "0 10px" }}
          cover={
            <div
              style={{
                overflow: "hidden",
                height: "200px",
                backgroundColor: "#000000",
              }}
            >
              <img
                style={{ height: "100%" }}
                alt="stylist"
                src={"/images/stylists/" + stylist.avatar}
              />
            </div>
          }
        >
          <span
            style={{
              padding: "10px 10px",
            }}
          >
            {stylist.name}
          </span>
        </Card>
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

export default Stylists;
