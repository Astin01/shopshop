import { Table, Form, Row, Container, Col, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Item from "./item.js";
function CheckOut() {
  let item = useSelector((state) => {
    return state.cartItem;
  });
  let user = useSelector((state) => {
    return state.user;
  });
  let cartItem = item.map((data, i) => (
    <Item
      key={i}
      number={i}
      id={data.id}
      name={data.name}
      count={data.count}
      price={data.price}
    ></Item>
  ));

  return (
    <>
      {cartItem}
      <div className="mb-3">
        <table>
          {[
            "주문자 정보",
            "이름",
            "이메일 주소",
            "주소지",
            "휴대폰번호",
            "기타 사항",
          ].map((type) => (
            <tr>
              <td>{type}</td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>
      <Form>
        <div className="mb-3">
          <form action="/action_page.php">
            {["무통장입금", "신용카드결제", "실시간 계좌이체", "간편결제"].map(
              (type) => (
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">{type}</label>
                  <br />
                </div>
              )
            )}
          </form>
        </div>
      </Form>
    </>
  );
}

function Tableform(props) {
  let array1 = [props.arr];
  let result = array1.map((text) => {
    return (
      <tr>
        <td>text</td>
        <td></td>
      </tr>
    );
  });
  return { result };
}

export default CheckOut;
