import axios from "axios";
export default function OrderList() {
  var options = {
    method: "GET",
    url: "https://api.tosspayments.com/v1/payments/orders/pIYGEMNtedzhjQNo_nj13",
    headers: {
      Authorization:
        "Basic dGVzdF9za196WExrS0V5cE5BcldtbzUwblgzbG1lYXhZRzVSOg==",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return <></>;
}
