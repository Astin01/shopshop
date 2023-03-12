import "./css/App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { lazy, Suspense, useEffect, useState } from "react";
import data from "./data.js";
import Fruit from "./routes/Fruit.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Recent from "./routes/recent";
import { Login } from "./routes/login";
import { SignIn } from "./routes/sigin";
import Mypage from "./routes/mypage";
import UserInfo from "./routes/user";
import { useSelector } from "react-redux";
import CheckOut from "./routes/payment";
import Event from "./routes/event";
import { onLogout } from "./utils/onLogout";
import Chat from "./routes/chat";
import AdminPage from "./routes/adminPage";
import EventDetail from "./routes/EventDetail";
import event1 from "./img/event/event1.jpg";
import event2 from "./img/event/event2.jpg";

const Detail = lazy(async () => await import("./routes/detail.js"));
const Cart = lazy(async () => await import("./routes/cart"));

function App() {
  const navigate = useNavigate();
  let [fade, setFade] = useState("");
  let [fruit, setFruit] = useState([]);
  let [reload, setReload] = useState(0);
  // let [count, setCount] = useState(1);
  // let [loading, setLoading] = useState(false);
  let [login, setLogin] = useState(0);
  useEffect(() => {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);
  let user = useSelector((state) => {
    return state.user;
  });
  // function dataServer() {
  //   setLoading(true);
  //   if (count == 0) {
  //     axios
  //       .get("https://codingapple1.github.io/shop/data2.json")
  //       .then((result) => {
  //         let copy = [...shoes, ...result.data];
  //         setShoes(copy);
  //         setCount(count + 1);
  //         setLoading(false);
  //       })
  //       .catch(() => {
  //         console.log("실패");
  //       });
  //   } else if (count == 1) {
  //     axios
  //       .get("https://codingapple1.github.io/shop/data3.json")
  //       .then((result) => {
  //         let copy2 = [...shoes, ...result.data];
  //         setShoes(copy2);
  //         setCount(count + 1);
  //         setLoading(false);
  //       })
  //       .catch(() => {
  //         console.log("실패");
  //       });
  //   } else {
  //     alert("더이상 상품이 없습니다");
  //   }
  // }
  function dataServer() {
    axios({
      method: "get",
      url: "/fruit",
    }).then((result) => {
      setFruit(result.data.data);
    });
  }
  // function vfruitFunction() {
  //   setLoading(true);
  //   let data = fruit.slice(count * 3, (count + 1) * 3);
  //   if (count == 1) {
  //     // axios
  //     //   .get("https://codingapple1.github.io/shop/data2.json")
  //     //   .then((result) => {
  //     //     let copy = [...shoes, ...result.data];
  //     //     setShoes(copy);
  //     //     setCount(count + 1);
  //     //     setLoading(false);
  //     //   })
  //     //   .catch(() => {
  //     //     console.log("실패");
  //     //   });

  //     let copy1 = [...vfruit, ...data];
  //     setVfruit(copy1);
  //     setCount(count + 1);
  //     setLoading(false);
  //   } else if (count == 2) {
  //     // axios
  //     //   .get("https://codingapple1.github.io/shop/data3.json")
  //     //   .then((result) => {
  //     //     let copy2 = [...shoes, ...result.data];
  //     //     setShoes(copy2);
  //     //     setCount(count + 1);
  //     //     setLoading(false);
  //     //   })
  //     //   .catch(() => {
  //     //     console.log("실패");
  //     //   });
  //     let copy2 = [...vfruit, ...data];
  //     setVfruit(copy2);
  //     setCount(count + 1);
  //     setLoading(false);
  //   } else {
  //     alert("더이상 상품이 없습니다");
  //   }
  // }
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, []);
  useEffect(() => {
    dataServer();
  }, [fruit]);

  return (
    <div div className="App">
      <Navbar bg="dark" variant="dark" className="app-navbar">
        <Container>
          <Navbar.Brand href="/">
            <span className="logoTitle">Fruity</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/event")}>Event</Nav.Link>
            <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
          </Nav>
          {login == 0 ? (
            <Nav className="ms-auto">
              {" "}
              <Nav.Link onClick={() => navigate("/login")}>로그인</Nav.Link>
              <Nav.Link onClick={() => navigate("/signin")}>회원가입</Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              {" "}
              <Nav.Link onClick={() => navigate("/mypage")}>{user.id}</Nav.Link>
              <Nav.Link
                onClick={() => {
                  onLogout();
                  setLogin(0);
                }}
              >
                로그아웃
              </Nav.Link>{" "}
            </Nav>
          )}
        </Container>
      </Navbar>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="main-bg"></div>
                <div className="container" style={{ paddingTop: 20 }}>
                  <div className={"row start " + fade}>
                    <Fruit data={fruit} />
                  </div>
                  {/* {count < 3 ? (
                    <button onClick={vfruitFunction}>
                      {loading == true ? "로딩중..." : "더보기"}
                    </button>
                  ) : null} */}
                </div>
                <Recent></Recent>
              </div>
            }
          />
          <Route path="/event" element={<Event />}>
            <Route
              path="one"
              element={
                <EventDetail
                  image={event1}
                  title="1. 신규가입시 10%할인 쿠폰 즉시 지급"
                />
              }
            />
            <Route
              path="two"
              element={
                <EventDetail
                  image={event2}
                  title="2. 매주 추첨을 통해 와인 사은품 지급"
                />
              }
            />
          </Route>
          <Route
            path="/detail/:parms"
            element={<Detail setFruit={setFruit} fruit={fruit} />}
          />
          <Route path="/cart" element={<Cart login={login} />} />
          <Route
            path="/login"
            element={<Login login={login} setLogin={setLogin} />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/mypage" element={<Mypage />}>
            <Route path="user" element={<UserInfo />} />
            <Route path="chat" element={<Chat />} />
            <Route path="adminPage" element={<AdminPage />} />
          </Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
