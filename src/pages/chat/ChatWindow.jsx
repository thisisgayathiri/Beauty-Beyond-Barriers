import React, { useState } from "react";
import "./layout.css";

function ChatWindow() {
  const [text, setText] = useState("");

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const onMessageSend = () => {
    setText(message);
    setMessage("");
  };

  return (
    <div>
      <div className="container clearfix">
        <div className="chat">
          <div className="chat-header clearfix">
            <img
              src="/images/stylists/1.jpg"
              style={{width: "50px"}}
              alt="avatar"
            />

            <div className="chat-about">
              <div className="chat-with" style={{paddingTop: "10px"}}>Alessandra Fadel</div>
            </div>
            <i className="fa fa-star"></i>
          </div>

          <div className="chat-history">
            <ul>
              <li className="clearfix">
                <div className="message-data align-right">
                  <span className="message-data-time">10:10 AM, Today</span> &nbsp;
                  &nbsp;
                  <span className="message-data-name">Alessandra Fadel</span>{" "}
                  <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                  Good Morning Sandra, How may I help you?
                </div>
              </li>

              <li>
                <div className="message-data">
                  <span className="message-data-name">
                    <i className="fa fa-circle online"></i>Sandra
                  </span>
                  <span className="message-data-time">10:12 AM, Today</span>
                </div>
                <div className="message my-message">
                  Good Morning! I am looking for a new hair cut that suits me.
                  Do you have any suggestions?
                </div>
              </li>

              <li className="clearfix">
                <div className="message-data align-right">
                  <span className="message-data-time">10:14 AM, Today</span> &nbsp;
                  &nbsp;
                  <span className="message-data-name">Alessandra Fadel</span>{" "}
                  <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                  Do you have a certain look in your mind?
                </div>
              </li>

              <li>
                <div className="message-data">
                  <span className="message-data-name">
                    <i className="fa fa-circle online"></i> Sandra
                  </span>
                  <span className="message-data-time">10:16 AM, Today</span>
                </div>
                <div className="message my-message">
                  Yes. I prefer laser cut. The present muchroom cut does not
                  allow me to make a french plait or french roll.
                </div>
              </li>

              {text == "" ? null : (
                <li>
                  <div className="message-data">
                    <span className="message-data-name">
                      <i className="fa fa-circle online"></i> Sandra
                    </span>
                    <span className="message-data-time">10:18 AM, Today</span>
                  </div>
                  <div className="message my-message">{text}</div>
                </li>
              )}

              <div className="loading">
                Alessandra Fadel is typing
                <div></div>
                <div></div>
                <div></div>
              </div>

              <i className="fa fa-circle online"></i>
              <span className=" online" style={{ color: "#AED2A6" }}></span>
              <span className=" online" style={{ color: "#DAE9DA" }}></span>
            </ul>
          </div>

          <div className="chat-message clearfix">
            <textarea
              onChange={handleChange}
              value={message}
              name="message-to-send"
              id="message-to-send"
              placeholder="Type your message"
              rows="3"
            ></textarea>

            <button onClick={onMessageSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
