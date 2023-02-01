import { Table, Form, Row, Container, Col, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Item from "./item.js";
import CheckOutprocess from "../utils/checkoutprocess.js";
function CheckOut() {
  let item = useSelector((state) => {
    return state.cartItem;
  });
  let user = useSelector((state) => {
    return state.user;
  });
  let price = 0;
  {
    item.map((item) => (price += item.tprice));
  }
  debugger;
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
              <td>{price}</td>
            </tr>
            <tr>
              <td>할인</td>
              <td>0</td>
            </tr>
            <tr>
              <td>배송비</td>
              <td>2500</td>
            </tr>
            <tr>
              <td>총결제금액</td>
              <td>{price + 2500}</td>
            </tr>
            <tr>
              <td>결제방법</td>
              <td>
                <div>
                  <form action method="get">
                    <input type="radio" id="bank" value="banksend" name="pay" />
                    <label for="bank">계좌이체</label>
                    <br></br>
                    <input
                      type="radio"
                      id="credit"
                      value="credit"
                      name="pay"
                    />{" "}
                    <label for="credit">신용/체크카드</label>
                    <br></br>
                    <input
                      type="radio"
                      id="phone"
                      value="phone"
                      name="pay"
                    />{" "}
                    <label for="phone">휴대폰</label>
                    <br></br>
                    <input
                      type="radio"
                      id="nobank"
                      value="nobank"
                      name="pay"
                    />{" "}
                    <label for="nobank">무통장입금</label>
                    <br></br>
                  </form>
                </div>
              </td>
            </tr>
          </Table>
        </div>
        <div>
          <form action="/create-checkout-session" method="POST">
            <button type="submit">Checkout</button>
          </form>
          <button onClick={CheckOutprocess}>결제하기</button>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
