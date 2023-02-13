import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ckLogin } from "../utils/ckLogin";
import { onLogin } from "../utils/onLogin";
import userInfo from "../utils/userInfo";
function Login({ login, setLogin }) {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInfo());
    ckLogin({ setLogin });
  }, [login]);
  return (
    <Container>
      <Form onSubmit={onLogin}>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control name="id" type="text" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control name="pw" type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="기억하기" />
          </Form.Group>
        </Row>
        <Row>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              setLogin(1);
            }}
          >
            로그인
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export { Login };
