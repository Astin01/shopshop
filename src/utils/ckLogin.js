import axios from "axios";
import { useDispatch } from "react-redux";
import { changeUi } from "../store";

function ckLogin({ setLogin }) {
  let dispatch = useDispatch();
  axios({
    method: "get",
    url: "/cklogin",
  }).then((result) => {
    if (result.data == "로그인안하셨는데요?") {
      setLogin(0);
    } else {
      dispatch(changeUi(result.data.user));
      // console.log(result.data);
      setLogin(1);
    }
  });
}

export { ckLogin };
