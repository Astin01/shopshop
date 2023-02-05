import { Nav } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

function Event() {
  const navigate = useNavigate();
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
      <Nav className="ms-auto">
        {" "}
        <Nav.Link onClick={() => navigate("./one")}>이벤트1</Nav.Link>
        <Nav.Link onClick={() => navigate("./two")}>이벤트2</Nav.Link>
      </Nav>
    </div>
  );
}

export default Event;
