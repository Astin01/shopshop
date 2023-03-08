import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import event1 from "../img/event.jpg";
import event2 from "../img/event2.jpg";
function Event() {
  const navigate = useNavigate();
  let [on, seton] = useState(0);
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      {/* <div>
        <img src={event1} className="event"></img>
        <h4>1. 신규가입시 10%할인 쿠폰 즉시 지급</h4>
      </div> */}
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
