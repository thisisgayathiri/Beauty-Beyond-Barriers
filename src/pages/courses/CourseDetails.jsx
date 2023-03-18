import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Divider, Progress, Row } from "antd";
import Card from "antd/es/card/Card";
import Title from "antd/es/typography/Title";
import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import courses from "../../data/courses";
import Items from "./Items";

const CourseDetails = () => {

    return (<div>


        <Row justify={"left"}
            style={{
                marginLeft: '5px',
                padding: "50px 20px 0px 20px",

            }}
        >
            <NavLink >
                <ArrowLeftOutlined
                    style={{
                        fontSize: "30px",
                        color: COLORS.SECONDARY,
                    }}
                />
            </NavLink>


            <Title
                level={3}
                style={{
                    margin: "auto",
                    textAlign: "center",
                    color: COLORS.SECONDARY,
                    fontWeight: '400'
                }}
            >
                Course Details
            </Title>

        </Row>


        <Row justify={"center"}>
            <Title
                level={3}
                style={{
                    paddingTop: "10px",
                    textAlign: "center",
                    color: COLORS.SECONDARY,
                    fontWeight: '500'
                }}
            >
                International Sign Language
            </Title>
        </Row>

        <Card
            hoverable
            style={{
                backgroundColor: COLORS.PRIMARY_LIGHT,
                width: "300px",
                margin: "20px 10px",
                display: "inline-block",
            }}
            cover={
                <div
                    style={{
                        overflow: "hidden",
                        backgroundColor: "#000000",
                    }}
                >
                    <img alt="salon" style={{ height: "100%", width: '350px' }} src="/images/courses/sign.jpeg" />
                </div>
            }
        >
        </Card>


        <Row justify={"left"}>

            <Col span={10}>
                <Title
                    level={5}
                    style={{
                        marginLeft: "30px",
                        textAlign: "center",
                        color: "gray",
                        fontSize: "20px"
                    }}
                >
                    Class
                </Title>
            </Col>

            <Col span={10}>
                <Title
                    level={5}
                    style={{
                        marginLeft: "30px",
                        textAlign: "center",
                        color: "gray",
                        fontSize: "20px"
                    }}
                >
                    40 Videos
                </Title>
            </Col>

        </Row>



        <Items style={{marginTop: '0px'}} />



    </div>)
}

    ;

export default CourseDetails;
