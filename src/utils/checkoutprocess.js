import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import CheckoutForm from "./checkoutform";
import { useSelector } from "react-redux";

export default function CheckOutprocess() {
  const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
  let userInformation = useSelector((state) => {
    return state.user;
  });

  let cartInfo = useSelector((state) => {
    return state.cartItem;
  });

  loadTossPayments(clientKey).then((tossPayments) => {
    tossPayments
      .requestPayment("카드", {
        // 결제 수단 파라미터
        // 결제 정보 파라미터
        amount: cartInfo.tprice,
        orderId: "TUfXTCWu5eIkW2mLrFxpH",
        orderName: cartInfo[0].name + "외" + cartInfo.length + "건",
        customerName: userInformation.name,
        successUrl: "http://localhost:8000/success",
        failUrl: "http://localhost:8000/fail",
      })
      .catch(function (error) {
        if (error.code === "USER_CANCEL") {
          // 결제 고객이 결제창을 닫았을 때 에러 처리
        } else if (error.code === "INVALID_CARD_COMPANY") {
          // 유효하지 않은 카드 코드에 대한 에러 처리
        }
      });
  });
  return <></>;
}
