import axios from "axios";
function onSignIn(event) {
  event.preventDefault();
  console.log(event);
  axios({
    method: "post",
    url: "/signin",
    data: {
      name: event.target[0].value,
      address: event.target[1].value,
      tel: event.target[2].value,
      email: event.target[3].value,
      id: event.target[4].value,
      pw: event.target[5].value,
    },
  });
}
export { onSignIn };
