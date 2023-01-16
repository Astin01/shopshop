import { Col, Container, Form, ListGroup, Row, Button } from "react-bootstrap";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

function Mypage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item action onClick={() => navigate("./user")}>
              사용자 정보
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
}

export default Mypage;
