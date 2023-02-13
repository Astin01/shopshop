import { Container, Form, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
function User() {
  let user = useSelector((state) => state.user);
  return (
    <Container>
      <Form>
        <Row>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" defaultValue={user.name} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>주소</Form.Label>
            <Form.Control type="text" defaultValue={user.address} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="tel">
            <Form.Label>전화 번호</Form.Label>
            <Form.Control type="tel" defaultValue={user.tel} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" defaultValue={user.email} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              defaultValue={user.id}
            />
          </Form.Group>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            수정하기
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
export default User;
