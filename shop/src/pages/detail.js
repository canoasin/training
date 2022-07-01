import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

/* let NewBtn = styled.button(YellowBtn)`
  font-size: 18px;
`; */

export default function Detail(props) {
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clreaTimeout(a);
    }; // useEffect 내에 있는 코드보다 먼저 동작
  }, []); // [] 입력 시 mount시에만 동작함

  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let imgNum = parseInt(id) + 1;

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 클릭 시 할인</div>
      ) : null}

      <YellowBtn
        bg="blue"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </YellowBtn>
      {/* <NewBtn bg="blue">버튼</NewBtn> */}
      <span>{count}</span>
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + imgNum + ".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
