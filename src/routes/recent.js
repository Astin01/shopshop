import { Toast } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
function Recent() {
  let watch = localStorage.getItem("watched");
  let parseWatch = JSON.parse(watch);
  let recentGroup;
  const navigate = useNavigate();
  if (parseWatch) {
    recentGroup = parseWatch.map((data) => (
      <ListGroup.Item
        onClick={() => {
          navigate(`/detail/${data.title}`);
        }}
      >
        {data.title}
      </ListGroup.Item>
    ));
  }
  return (
    <Toast style={{ position: "absolute", top: "55px", right: "0" }}>
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          position="middle-end"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">Recent</strong>
      </Toast.Header>
      <Toast.Body>{recentGroup}</Toast.Body>
    </Toast>
  );
}

export default Recent;
