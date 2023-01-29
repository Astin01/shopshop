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
  let price;
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
  debugger;
  return (
    <>
      <div>
        <div>
          <Table>
            <tr>
              <th>구매자 정보</th>
            </tr>
            <tr>
              <td>이름</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>{user.tel}</td>
            </tr>
          </Table>
        </div>
        <div>
          <Table>
            <tr>
              <th>받는사람정보</th>
            </tr>
            <tr>
              <td>이름</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>배송주소</td>
              <td>{user.address}</td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>{user.tel}</td>
            </tr>
            <tr>
              <td>배송요청사항</td>
              <td></td>
            </tr>
          </Table>
        </div>
        <div>
          <Table>
            <tr>
              <th>상품정보</th>
              <th>수량</th>
              <th>가격</th>
            </tr>
            {item.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.tprice}</td>
              </tr>
            ))}
          </Table>
        </div>
        <div>
          <Table>
            <tr>
              <th>결제정보</th>
            </tr>
            <tr>
              <td>총상품가격</td>
              <td>{item.map((item) => (price += item.tprice))}</td>
            </tr>
            <tr>
              <td>할인</td>
              <td></td>
            </tr>
            <tr>
              <td>배송비</td>
              <td></td>
            </tr>
            <tr>
              <td>총결제금액</td>
              <td></td>
            </tr>
            <tr>
              <td>결제방법</td>
              <td></td>
            </tr>
          </Table>
        </div>
        <div>
          <button>결제하기</button>
        </div>
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
