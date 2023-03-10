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
    const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
    if (pay == 1) {
      loadTossPayments(clientKey).then((tossPayments) => {
        tossPayments
          .requestPayment("카드", {
            // 결제 수단 파라미터
            // 결제 정보 파라미터
            amount: price,
            orderId: "TUfXTCWu5eIkW2mLrFxxH",
            orderName: item[0].name + "외" + item.length + "건",
            customerName: user.name,
            successUrl: "http://localhost:3000/",
            failUrl: "http://localhost:3000/checkout",
          })
          .catch(function (error) {
            if (error.code === "USER_CANCEL") {
              alert("취소되었습니다");
            } else if (error.code === "INVALID_CARD_COMPANY") {
              alert("유효하지 않은 카드입니다");
            }
          });
      });
    }
    if (pay == 2) {
      loadTossPayments(clientKey).then((tossPayments) => {
        tossPayments
          .requestPayment("가상계좌", {
            // 결제 수단 파라미터
            // 결제 정보 파라미터
            amount: price,
            orderId: "TUfXTCWu5eIkW2mLrFxxH",
            orderName: item[0].name + "외" + item.length + "건",
            customerName: user.name,
            successUrl: "http://localhost:3000/",
            failUrl: "http://localhost:3000/checkout",
            validHours: 24,
            cashReceipt: {
              type: "소득공제",
            },
          })
          .catch(function (error) {
            if (error.code === "USER_CANCEL") {
              alert("취소되었습니다");
            } else if (error.code === "INVALID_CARD_COMPANY") {
              alert("유효하지 않은 요청입니다");
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
              <th>구매자 정보</th>
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
              <td>
                <InputGroup>
                  <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
              </td>
            </tr>
          </Table>
        </Row>
        <Row>
          <Table className={styles.table}>
            <tr>
              <th>상품정보</th>
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
              <th>결제정보</th>
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
                <Form.Select id="payList" aria-label="paymentList">
                  <option>결제수단</option>
                  <option value="1">카드결제</option>
                  <option value="2">무통장입금</option>
                </Form.Select>
              </td>
            </tr>
          </Table>
        </Row>{" "}
        <button
          onClick={() => {
            let e = document.getElementById("payList");
            let value = e.options[e.selectedIndex].value;
            setPay(parseInt(value));
          }}
        >
          결제하기
        </button>
      </Container>
    </>
  );
}

export default CheckOut;
