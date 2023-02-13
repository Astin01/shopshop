import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../css/serviceceneter.modeule.css";
import { Row, Container, Button } from "react-bootstrap";
export default function ServiceCenter() {
  let user = useSelector((state) => state.user);
  useEffect(() => {
    axios({
      method: "post",
      url: "/chat",
      data: {
        id: user.id,
      },
    }).then();
  }, []);
  return (
    <>
      <Container className="container p-4 detail">
        <Row className="row">
          <div className="col-9 p-0">
            <div className="chat-room">
              <ul className="list-group chat-content">
                <li>
                  <span className="chat-box">채팅방1 내용</span>
                </li>
                <li>
                  <span className="chat-box">채팅방1 내용</span>
                </li>
                <li>
                  <span className="chat-box mine">채팅방1 내용</span>
                </li>
              </ul>
              <div className="input-group">
                <input className="form-control" id="chat-input" />
                <Button className="btn btn-secondary" id="send">
                  전송
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
