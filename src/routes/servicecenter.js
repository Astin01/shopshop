import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../css/serviceceneter.modeule.css";
import { Row, Container, Button, InputGroup, Form } from "react-bootstrap";
import { type } from "@testing-library/user-event/dist/type";
export default function ServiceCenter() {
  let user = useSelector((state) => state.user);
  let [send, setSend] = useState("");
  let [submit, setSubmit] = useState(0);
  let [chat, setChat] = useState([]);
  useEffect(() => {
    axios({
      method: "post",
      url: "/chat",
      data: {
        id: user.id,
      }.then((result) => {
        setChat(result);
      }),
    });
  }, []);
  useEffect(() => {
    if (submit == 1) {
      axios({
        method: "post",
        url: "/message",
        data: {
          parent: user.id,
          content: send,
        },
      }).then(function () {
        setSubmit(0);
        setSend("");
      });
    }
  }, [submit]);
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
                let copy = [...chat];
                copy.push(send);
                setChat(copy);
                setSubmit(1);
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
