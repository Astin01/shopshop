import axios from "axios";
function onSignIn(event) {
  event.preventDefault();
  console.log(event);
  axios({
    method: "post",
    url: "/signin",
    data: {
      id: event.target[0].value,
      pw: event.target[1].value,
    },
  });
}
export { onSignIn };
