import React from "react";
import { Image, Row } from "antd";
import Title from "antd/es/typography/Title";
import { COLORS } from "../constants/colors";

function Confirmation() {
    return (
        <div
            style={{
                backgroundColor: COLORS.PRIMARY,
                height: "100vh",
            }}
        >


            <Row justify={"center"}>
                <Image
                    style={{ padding: "50px" , width: "200px", height: "300px", borderRadius: "400px 200px"}}
                    preview={{ visible: false }}
                    width={200}
                    src="https://timesofindia.indiatimes.com/photo/95103361/95103361.jpg?v=3"
                    onClick={() => setVisible(false)}
                />
            </Row>


            <Row justify={"center"}>
                <Title
                    level={3}
                    style={{
                        padding: "5px 20px 0 20px",
                        textAlign: "center",
                        color: COLORS.SECONDARY,
                    }}
                >
                    We've got you confirmed for your appointment!
                </Title>
            </Row>


            <Row justify={"center"}>
                <Title
                    level={3}
                    style={{
                        padding: "0 0 0px 0px",
                        textAlign: "center",
                        color: COLORS.SECONDARY,
                        fontWeight: 500
                    }}
                >
                    Mar 25, 2023 | 11:00 AM
                </Title>
            </Row>

            <Row justify={"center"}>
                <Title
                    level={3}
                    style={{
                padding:"0px",
                        textAlign: "center",
                        color: COLORS.SECONDARY,
                        fontWeight: 400
                    }}
                >
                      Studio 11 | ATX South Branch
                </Title>
            </Row>

        </div>
    );
}

export default Confirmation;