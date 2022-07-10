import { Col } from "react-bootstrap";

export default function Product(props) {
  if (props.shoes[props.num].id == 0) {
    var imgNum = 1;
  } else imgNum = props.shoes[props.num].id;

  return (
    <Col md={4}>
      {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%"/> */}
      <img
        src={"https://codingapple1.github.io/shop/shoes" + imgNum + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes[props.num].title}</h4>
      <p>{props.shoes[props.num].price}</p>
    </Col>
  );
}
