import axios from "axios";
export let logresult = 0;
function onLogin(e) {
  e.preventDefault();
  axios({
    method: "post",
    url: "/login",
    data: {
      id: e.target[0].value,
      pw: e.target[1].value,
    },
  }).then((logresult = 1));
}

export { onLogin };
