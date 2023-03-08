import axios from "axios";
export default function enterData(event) {
  event.preventDefault();
  axios({
    method: "post",
    url: "/enterdata",
    data: {
      name: event.target[0].value,
      image: event.target[1].value,
      price: event.target[2].value,
      content: event.target[3].value,
    },
  });
}
