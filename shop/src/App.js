import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/detail.js';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>

            <Container>
              <Row>
                {shoes.map(function (num, i) {
                  return (
                    <Product shoes={shoes} num={i} />
                  );
                })}
              </Row>
            </Container>
          </>
        }/>
        <Route path="/detail" element={<Detail />}/>

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>}/>
          <Route path="location" element={<div>location</div>}/>
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>

        <Route path="*" element={<div>404 Not Found</div>}/>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <h4>안녕하세요</h4>
      <Outlet></Outlet>
    </>
  )
}

function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  )
}


/** 컴포넌트.js 식으로 만들어 놓고 
 *  그 안에 function을 여러개 쓰면 되지 않을지?
 *  근데 props랑 useState는 어떻게 사용해야될지?
 * */

function Product(props) {
  let imgNum = props.num + 1;
  return (
    <Col md={4}>
      {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%"/> */}
      <img src={'https://codingapple1.github.io/shop/shoes' + imgNum + '.jpg'} width="80%"/>
      <h4>{props.shoes[props.num].title}</h4>
      <p>{props.shoes[props.num].price}</p>
    </Col>
  )
}

export default App;