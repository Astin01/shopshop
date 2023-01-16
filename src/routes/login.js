import { Button, Container, Form, Row } from "react-bootstrap";
import { onLogin } from "../utils/onLogin";
function Login() {
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
          <Button variant="primary" type="submit">
            로그인
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export { Login };
