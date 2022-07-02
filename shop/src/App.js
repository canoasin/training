import "./App.css";

/* Library */
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from 'axios';

/* Data */
import data from "./data.js";

/* Pages, Components */
import Detail from "./pages/detail.js";
import About from "./pages/about.js";
import Event from "./pages/event.js";
import Product from "./components/products.js";

function App() {
  let [shoes, setShoes] = useState(data);
  let [moreBtn, setMoreBtn] = useState(2);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <Container>
                <Row>
                  {shoes.map(function (num, i) {
                    return <Product shoes={shoes} num={i} />;
                  })}
                </Row>
                
                {loading == true ? (
                  <h5>Loading...</h5>
                ) : null}
                <Button
                  variant="outline-warning"
                  onClick={() => {
                    let copy = [...shoes];
                    copy.sort((a, b) => a.title.localeCompare(b.title));
                    setShoes(copy);
                  }}
                >
                  정렬
                </Button>
                <Button variant="outline-danger" onClick={() => {
                  setLoading(true);
                  axios.get('https://codingapple1.github.io/shop/data' + moreBtn + '.json')
                  .then((result) => {
                    setLoading(false);
                    let copy = [...shoes, ...result.data];
                    setShoes(copy);
                    setMoreBtn(moreBtn + 1);
                  })
                  .catch(() => {
                    setLoading(false);
                    
                  });
                }}>더보기</Button>
              </Container>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

/** 컴포넌트.js 식으로 만들어 놓고
 *  그 안에 function을 여러개 쓰면 되지 않을지?
 *  근데 props랑 useState는 어떻게 사용해야될지?
 * */

export default App;
