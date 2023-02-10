import axios from "axios";

function onLogout() {
  axios({
    method: "post",
    url: "/logout",
  });
}

export { onLogout };
