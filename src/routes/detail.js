import "./../css/App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { inCart } from "../store";

function Detail(props) {
  let [popalert, setPopalert] = useState(true);
  let [input, setInput] = useState("");
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState("");
  let dispatch = useDispatch();
  useEffect(() => {
    const watch = localStorage.getItem("watched");
    const parseWatch = JSON.parse(watch);
    parseWatch.push(product);
    const newArray = parseWatch.filter(
      (arr, index, callback) =>
        index === callback.findIndex((t) => t.id === arr.id)
    );
    const jsonWatch = JSON.stringify([...newArray]);
    localStorage.setItem("watched", jsonWatch);
  });
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, []);
  useEffect(() => {
    setTimeout(() => setPopalert(false), 10000);
  }, []);
  let { parms } = useParams();
  function isId(element) {
    if (element.id == parms) {
      return true;
    }
  }
  useEffect(() => {
    if (isNaN(input) == true) {
      alert("please write only number");
    }
  }, [input]);
  const product = props.shoes.find(isId);
  return (
    <div className={"container start " + fade}>
      {popalert == true ? (
        <div className="alert alert-warning">
          신규회원 가입시 10%할인 쿠폰 즉시 발급
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              product.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <input
            type="number"
            id="points"
            name="points"
            step="1"
            min="1"
            max="100"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() =>
              dispatch(
                inCart({
                  id: product.id,
                  name: product.title,
                  count: parseInt(input),
                  price: product.price,
                  tprice: product.price * input,
                })
              )
            }
            className="btn btn-danger"
          >
            장바구니
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}
function TabContent({ tab }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
export default Detail;
