import axios from "axios";

function ckLogin({ setLogin, setUser }) {
  axios({
    method: "get",
    url: "/ckLogin",
  }).then((result) => {
    if (result.data == "로그인안하셨는데요?") {
      setLogin(0);
    } else {
      setUser(result.data.user);
      setLogin(1);
    }
  });
}

export { ckLogin };
