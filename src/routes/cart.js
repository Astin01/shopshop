import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Item from "./item.js";
import { ckLogin } from "../utils/ckLogin.js";
function Cart({ login }) {
  let item = useSelector((state) => {
    return state.cartItem;
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
  const navigate = useNavigate();
  return (
    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>{cartItem}</tbody>
      <tr>
        <td>
          <button
            onClick={() =>
              login == 1 ? navigate("/checkout") : navigate("/login")
            }
          >
            결제하기
          </button>
        </td>
      </tr>
    </Table>
  );
}

export default Cart;
