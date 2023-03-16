import { Divider, Progress, Row } from "antd";
import Card from "antd/es/card/Card";
import Title from "antd/es/typography/Title";
import React from "react";
import { COLORS } from "../../constants/colors";
import courses from "../../data/courses";

const Courses = () => {
    const coursesCard = _.map(courses, (course) => {
        return (
            <>
            <Progress style={{width: "80%"}} percent={course.completed} status="active" />
      
                <Card
                title ={course.name}

              
                    hoverable
                    style={{backgroundColor: '#E6E6FA', width: "300px", margin: "10px 20px" }}
                    cover={<img alt="salon" src={course.image} />}
                >

                   
                </Card>
            </>
        );
    });


    return (
        <>
            <div
                style={{
                    whiteSpace: "nowrap",
                    overflow: "scroll",

                }}
            >
                <Card
                    hoverable
                    style={{ width: "300px", display: "inline-block", "marginTop": "60px" }}
                    cover={<img alt="salon" src="/images/courses.png" />}
                >
                </Card>
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
                        Be yourself,  Be a special stylist
                    </Title>
                </Row>

                <Row justify={"center"}>
                    <Title
                        level={5}
                        style={{
                            marginTop: '0px',
                            fontWeight: '300',
                            textAlign: "center",
                            color: COLORS.SECONDARY,
                        }}
                    >
                        Building a community for assisting those with special needs
                    </Title>
                </Row>
            </div>

            <Divider orientation="right" plain>  </Divider>


            {}

            <Row justify={"left"}>
                    <Title
                        level={5}
                        style={{
                            marginLeft: '50px',
                            fontWeight: '500',
                            textAlign: "center",
                            color: COLORS.SECONDARY,
                        }}
                    >
                        Your Courses
                    </Title>
                </Row>



            <div
                style={{
                    whiteSpace: "nowrap",
                    overflow: "scroll",
                    padding: "10px",
                    marginTop: "20px",
                    marginLeft: '30px',
                }}
            >
                {coursesCard}
            </div>


        </>

    );
    ;


};

export default Courses;
