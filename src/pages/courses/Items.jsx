import { Avatar, Button, Card, Col, Divider, List, Progress, Row, Space } from "antd";
import React from "react";
import { COLORS } from "../../constants/colors";
import coursedetails from "../../data/coursedetails";

const Items = () => {


    const coursesCard = _.map(coursedetails, (course) => {
        return (
            <>
                <List
                    dataSource={coursedetails}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                               style = {{padding: '0px 0px 0px 10px'}}
                                avatar={<Avatar style={{ backgroundColor: '#ffffff', color: 'black', borderBlockColor: COLORS.PRIMARY_DARK }}>{item.id}</Avatar>
                                }
                                title={item.title}
                            />
                            <Button
                                size="large"
                                htmlType="submit"
                                style={{
                                    backgroundColor: COLORS.PRIMARY,
                                    color: COLORS.PRIMARY_LIGHT,
                                    fontWeight: 500,
                                    borderColor: COLORS.PRIMARY_LIGHT,
                                    marginRight: "10px"
                                }}
                                className="login-form-button"
                            >
                                Play
                            </Button>
                        </List.Item>
                    )}
                />



            </>
        );
    });



    return (<div>




        {coursesCard}



    </div>)
}

    ;

export default Items;
