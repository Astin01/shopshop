import { useDispatch } from "react-redux";
import { increase, decrease, outCart } from "../store.js";
function Item({ number, id, name, count, price }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{number + 1}</td>
      <td>{name}</td>
      <td>{count}</td>
      <td>
        <button onClick={() => dispatch(increase(id))}>+</button>
        <button onClick={() => dispatch(decrease(id))}>-</button>
        <button onClick={() => dispatch(outCart(id))}>X</button>
      </td>
      <td>{price * count}</td>
    </tr>
  );
}
export default Item;
