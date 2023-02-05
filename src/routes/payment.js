import { Table, Form, Row, Container, Col, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "../css/payment.module.css";
import React, { useState, useEffect } from "react";

import { loadTossPayments } from "@tosspayments/payment-sdk";

function CheckOut() {
  let [pay, setPay] = useState(0);
  let item = useSelector((state) => {
    return state.cartItem;
  });
  let user = useSelector((state) => {
    return state.user;
  });
  let price = 0;
  {
    item.map((item) => (price += item.tprice));
  }
  useEffect(() => {
    if (pay == 1) {
      const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
      debugger;
      loadTossPayments(clientKey).then((tossPayments) => {
        tossPayments
          .requestPayment("카드", {
            // 결제 수단 파라미터
            // 결제 정보 파라미터
            amount: price,
            orderId: "TUfXTCWu5eIkW2mLrFxxH",
            orderName: item[0].name + "외" + item.length + "건",
            customerName: user.name,
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
    }
  }, [pay]);
  return (
    <>
      <Container className={styles.container}>
        <Row>
          {" "}
          <Table className={styles.table}>
            <tr>
              <th style={{ width: "10%" }}>구매자 정보</th>
            </tr>
            <tr>
              <td>이름</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>{user.tel}</td>
            </tr>
          </Table>
        </Row>
        <Row>
          {" "}
          <Table className={styles.table}>
            <tr>
              <th>받는사람정보</th>
            </tr>
            <tr>
              <td>이름</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>배송주소</td>
              <td>{user.address}</td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>{user.tel}</td>
            </tr>
            <tr>
              <td>배송요청사항</td>
              <td></td>
            </tr>
          </Table>
        </Row>
        <Row>
          <Table className={styles.table}>
            <tr>
              <th style={{ width: "30%", paddingLeft: "100px" }}>상품정보</th>
              <th>수량</th>
              <th>가격</th>
            </tr>
            {item.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.tprice}</td>
              </tr>
            ))}
          </Table>
        </Row>
        <Row>
          {" "}
          <Table className={styles.table}>
            <tr>
              <th style={{ width: "10%" }}>결제정보</th>
            </tr>
            <tr>
              <td>총상품가격</td>
              <td>{price}</td>
            </tr>
            <tr>
              <td>할인</td>
              <td>0</td>
            </tr>
            <tr>
              <td>배송비</td>
              <td>2500</td>
            </tr>
            <tr>
              <td>총결제금액</td>
              <td>{price + 2500}</td>
            </tr>
            <tr>
              <td>결제방법</td>
              <td>
                <form action method="get">
                  <input type="radio" id="bank" value="banksend" name="pay" />
                  <label for="bank">계좌이체</label>
                  <br></br>
                  <input
                    type="radio"
                    id="credit"
                    value="credit"
                    name="pay"
                  />{" "}
                  <label for="credit">신용/체크카드</label>
                  <br></br>
                  <input
                    type="radio"
                    id="phone"
                    value="phone"
                    name="pay"
                  />{" "}
                  <label for="phone">휴대폰</label>
                  <br></br>
                  <input
                    type="radio"
                    id="nobank"
                    value="nobank"
                    name="pay"
                  />{" "}
                  <label for="nobank">무통장입금</label>
                  <br></br>
                </form>
              </td>
            </tr>
          </Table>
        </Row>{" "}
        <button
          onClick={() => {
            setPay(1);
          }}
        >
          결제하기
        </button>
      </Container>
    </>
  );
}

export default CheckOut;
