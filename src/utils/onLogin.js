import axios from "axios";
function onLogin(e, { setLogin }) {
  e.preventDefault();
  axios({
    method: "post",
    url: "/login",
    data: {
      id: e.target[0].value,
      pw: e.target[1].value,
    },
  }).then(setLogin(1));
}

export { onLogin };
