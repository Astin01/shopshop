import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../css/serviceceneter.modeule.css";
import { Row, Container, Button, InputGroup, Form } from "react-bootstrap";
import { type } from "@testing-library/user-event/dist/type";
import { io } from "socket.io-client";
export default function ServiceCenter() {
  let user = useSelector((state) => state.user);
  let [send, setSend] = useState("");
  let [submit, setSubmit] = useState(0);
  let [chat, setChat] = useState([]);
  let socket = io();
  socket.emit("joinroom");
  socket.on("broadcast", function (data) {
    console.log(data);
    let copy = [...chat];
    copy.push(data);
    setChat(copy);
    setSend("");
  });
  // let eventSource;
  // eventSource = new EventSource("/message/" + user.id);
  // eventSource.addEventListener("test", function (e) {
  //   console.log(e.data);
  //   debugger;
  //   let pardata = JSON.parse(e.data);
  //   pardata.forEach(function (i) {
  //     let copy = [...chat];
  //     copy.append(i.content);
  //     setChat(copy);
  //   });
  // });
  // useEffect(() => {
  //   axios({
  //     method: "post",
  //     url: "/chat",
  //     data: {
  //       id: user.id,
  //     },
  //   }).then(() => {

  //   });
  // }, []);
  // useEffect(() => {
  //   if (eventSource != undefined) {
  //     eventSource.close();
  //   }

  // }, [status]);
  // useEffect(() => {
  //   if (submit == 1) {
  //     axios({
  //       method: "post",
  //       url: "/message",
  //       data: {
  //         parent: user.id,
  //         content: send,
  //       },
  //     }).then(function () {
  //       setSubmit(0);
  //       setSend("");
  //     });
  //   }
  // }, [submit]);
  return (
    <>
      <Container className="container p-4 detail">
        <Row className="row">
          <ul className="list-group chat-content">
            {chat.map((data) => {
              return (
                <li>
                  <span className="chat-box mine">{data}</span>
                </li>
              );
            })}
          </ul>
          <div className="input-group">
            <input
              className="form-control"
              id="chat-input"
              onChange={(e) => {
                setSend(e.target.value);
              }}
            />
            <Button
              className="btn btn-secondary"
              id="send"
              onClick={() => {
                // let copy = [...chat];
                // copy.push(send);
                // setChat(copy);
                socket.emit("room1-send", send);
                console.log(send);
                // setSubmit(1);
              }}
            >
              전송
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}
