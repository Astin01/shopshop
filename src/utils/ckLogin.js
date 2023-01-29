import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeUi } from "../store";

function ckLogin({ setLogin, setUser }) {
  // axios({
  //   method: "get",
  //   url: "/ckLogin",
  // }).then((result) => {
  //   if (result.data == "로그인안하셨는데요?") {
  //     setLogin(0);
  //   } else {
  //     dispatch(changeUi(result.data.user));
  //     console.log(result.data);
  //     setLogin(1);
  //   }
  // });
  axios({
    method: "get",
    url: "/ckLogin",
  }).then((result) => {
    if (result.data == "로그인안하셨는데요?") {
      setLogin(0);
    } else {
      // user.changeUi(result.data.user);
      console.log(result.data);
      setUser(result.data.user);
      setLogin(1);
    }
  });
  // return (dispatch) => {
  // axios({
  //   method: "get",
  //   url: "/ckLogin",
  // }).then((result) => {
  //   if (result.data == "로그인안하셨는데요?") {
  //     setLogin(0);
  //   } else {
  //     console.log(result);
  //     dispatch(changeUi(result.data.user));
  //     setLogin(1);
  //   }
  // });
}

export { ckLogin };
