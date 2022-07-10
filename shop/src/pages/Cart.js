import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store/userSlice";
import { increase } from "../store/basketSlice";

export default function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div>
      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>
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
              <td>{state.basket[i].id}</td>
              <td>{state.basket[i].name}</td>
              <td>{state.basket[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(increase(state.basket[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
