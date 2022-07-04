import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.basket.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.basket[i].name}</td>
              <td>{state.basket[i].count}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
