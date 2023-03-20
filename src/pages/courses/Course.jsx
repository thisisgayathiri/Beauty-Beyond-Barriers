import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Divider, Progress, Row } from "antd";
import Card from "antd/es/card/Card";
import Search from "antd/es/transfer/search";
import Title from "antd/es/typography/Title";
import React from "react";
import { useNavigate } from "react-router";
import TabMenu from "../../components/common/TabMenu";
import { COLORS } from "../../constants/colors";
import allMenuItems from "../../data/allyMenu";
import courses from "../../data/courses";
import menuItems from "../../data/menu";

const Courses = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate("/course");
  };

  const availableCourses = _.map(_.slice(courses, 0, 4), (course) => {
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
            textAlign: "left",
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
        ></Card>
      </>
    );
  });

  const coursesCard = _.map(_.slice(courses, 4, 8), (course) => {
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
            textAlign: "left",
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
      <Row
        style={{
          padding: "20px",
        }}
      >
        <Col push={1}>
          <MenuOutlined
            style={{
              fontSize: "20px",
              color: COLORS.PRIMARY,
              marginTop: "2px",
            }}
          />
        </Col>
        <Col push={21}>
          <UserOutlined
            style={{
              fontSize: "22px",
              color: COLORS.PRIMARY,
            }}
          />
        </Col>
      </Row>

      <div>
        <Row>
          <Title
            level={3}
            style={{
              textAlign: "left",
              color: COLORS.SECONDARY,
              marginLeft: "30px",
            }}
          >
            Become an
            <div
              style={{
                width: "50px",
                height: "50px",
                display: "inline-block",
                verticalAlign: "middle",
                margin: "0 10px",
              }}
            >
              <img
                src="/images/logo-ally.png"
                alt="logo"
                height={"100%"}
                width={"100%"}
              />
            </div>
            stylist
          </Title>
        </Row>

        <Row justify={"center"}>
          <Title
            level={5}
            style={{
              marginTop: "0px",
              fontWeight: "300",
              textAlign: "left",
              marginLeft: "30px",
              color: COLORS.SECONDARY,
            }}
          >
            Building a community for assisting those with special needs
          </Title>
        </Row>
      </div>

      <Row
        style={{
          marginLeft: "20px",
        }}
      >
        <Col
          span={23}
          size="large"
          style={{
            padding: "20px 10px",
          }}
        >
          <Search
            placeholder="Search courses"
            style={{
              padding: "20px",
              display: "inline-block",
            }}
            enterButton
          />
        </Col>
      </Row>

      <Row>
        <div
          style={{
            margin: "30px",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            background:
              "linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%)",
          }}
        >
          <Col
            span={18}
            style={{
              textAlign: "left",
              color: COLORS.WHITE,
              lineHeight: "1.75",
              fontWeight: 500,
            }}
          >
            You are few steps away from getting your  <div
              style={{
                width: "40px",
                height: "40px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              <img
                src="/images/logo-ally.png"
                alt="logo"
                height={"100%"}
                width={"100%"}
              />
            </div> badge!
          </Col>
          <Col span={4}>
            <div
              style={{
                height: "70px",
                width: "60px",
              }}
            >
              <img
                src="/images/ally-badge.png"
                width={"100%"}
                height={"100%"}
                alt="ally-badge"
              />
            </div>
          </Col>
        </div>
      </Row>

      <Row justify={"left"}>
        <Col span={16}>
          <Title
            level={5}
            style={{
              marginLeft: "30px",
              textAlign: "left",
              color: COLORS.SECONDARY,
              paddingTop: "0px",
              marginTop: "20px",
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
              paddingTop: "0px",
              marginTop: "20px",
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

      <Row
        justify={"left"}
      >
        <Col span={16}>
          <Title
            level={5}
            style={{
              marginLeft: "30px",
              textAlign: "left",
              color: COLORS.SECONDARY,
              paddingTop: "0px",
              marginTop: "20px",
            }}
          >
            Courses available for you
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
              paddingTop: "0px",
              marginTop: "20px",
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
          marginBottom: "50px",
        }}
      >
        {availableCourses}
      </div>

      <TabMenu menuItems={allMenuItems} />
    </>
  );
};

export default Courses;
