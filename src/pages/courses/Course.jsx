import { Col, Divider, Progress, Row, Space } from "antd";
import Card from "antd/es/card/Card";
import Title from "antd/es/typography/Title";
import React from "react";
import { useNavigate } from "react-router";
import { COLORS } from "../../constants/colors";
import courses from "../../data/courses";

const Courses = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate("/course");
  };
  const coursesCard = _.map(courses, (course) => {
    return (
      <>
        <Card
          title={course.name}
          onClick={next}
          hoverable
          style={{
            backgroundColor: COLORS.PRIMARY_LIGHT,
            width: "300px",
            margin: "10px 20px",
            display: "inline-block",
          }}
          cover={
            <div
              style={{
                overflow: "hidden",
                height: "200px",
                backgroundColor: "#000000",
              }}
            >
              <img alt="salon" style={{ height: "100%" }} src={course.image} />
            </div>
          }
        >
          <Progress
            style={{ padding: "10px" }}
            percent={course.completed}
            status="active"
          />
        </Card>
      </>
    );
  });

  return (
    <>
      <div>
        <Card
          hoverable
          style={{ width: "300px", display: "inline-block", marginTop: "60px" }}
          cover={<img alt="salon" src="/images/courses.png" />}
        ></Card>
      </div>

      <div>
        <Row justify={"center"}>
          <Title
            level={3}
            style={{
              textAlign: "center",
              color: COLORS.SECONDARY,
            }}
          >
            Be yourself, Be a special stylist
          </Title>
        </Row>

        <Row justify={"center"}>
          <Title
            level={5}
            style={{
              marginTop: "0px",
              fontWeight: "300",
              textAlign: "center",
              color: COLORS.SECONDARY,
            }}
          >
            Building a community for assisting those with special needs
          </Title>
        </Row>
      </div>

      <Divider orientation="right" plain>
        {" "}
      </Divider>

      <Row justify={"left"}>
        <Col span={16}>
          <Title
            level={5}
            style={{
              marginLeft: "30px",
              textAlign: "left",
              color: COLORS.SECONDARY,
            }}
          >
            Your Courses
          </Title>
        </Col>

        <Col span={6}>
          <Title
            level={5}
            style={{
              marginLeft: "30px",
              textAlign: "right",
              fontWeight: "400",
              color: COLORS.SECONDARY,
            }}
          >
            See all
          </Title>
        </Col>
      </Row>

      <div
        style={{
          whiteSpace: "nowrap",
          overflow: "scroll",
          padding: "10px",
        }}
      >
        {coursesCard}
      </div>
    </>
  );
};

export default Courses;
