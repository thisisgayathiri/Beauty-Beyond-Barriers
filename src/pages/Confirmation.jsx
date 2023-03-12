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
                    style={{ padding: "30px" }}
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
                    Appointment confirmed!
                </Title>
            </Row>


            <Row justify={"center"}>
                <Title
                    level={3}
                    style={{
                        padding: "0 10% 20px 10%",
                        textAlign: "center",
                        color: COLORS.SECONDARY,
                        fontWeight: 500
                    }}
                >
                    You've successfully made an appointment for Hairstyling for Mar 25, 2023 at 11:00
                </Title>
            </Row>

        </div>
    );
}

export default Confirmation;