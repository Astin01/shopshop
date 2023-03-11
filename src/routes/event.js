import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import event1 from "../img/event/event1.jpg";
import event2 from "../img/event/event2.jpg";
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
        <Nav.Link onClick={() => navigate("./one")}>
          <img src={event1} className="event"></img>
          <h4>1. 신규가입시 10%할인 쿠폰 즉시 지급</h4>
        </Nav.Link>
        <Nav.Link onClick={() => navigate("./two")}>
          {" "}
          <img src={event2} className="event"></img>
          <h4>2. 매주 추첨을 통해 3분께 와인 선물</h4>
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Event;
