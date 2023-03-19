import { Avatar, Button, Card, Col, Divider, List, Progress, Row, Space } from "antd";
import React from "react";

import "./Call.css";

const Call = () => {


    return (


        <>


    

            <div className="call">
                <div className="pulsating">
                    <button>
                        <div className="inner-pulse">
                            <i className="material-icons">phone</i>
                        </div>
                    </button>
                </div>
            </div>

            <div style={{ fontWeight: "bold", fontFamily: "Poppins", fontSize: '20px', paddingTop: '20px' }}>
                Calling Alessandra Fadel
            </div>
        </>

    )
}

    ;

export default Call;
