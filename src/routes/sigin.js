import { Button, Container, Form, Row } from "react-bootstrap";
import { onSignIn } from "../onSignIn";

function SignIn() {
  return (
    <Container>
      <Form onSubmit={onSignIn}>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            회원가입
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export { SignIn };
