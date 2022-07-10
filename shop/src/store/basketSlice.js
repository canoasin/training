import { createSlice } from "@reduxjs/toolkit";

let basket = createSlice({
  name: "basket",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increase(state, id) {
      let num = state.findIndex((a) => {
        return a.id === id.payload;
      });
      state[num].count += 1;
    },
    addBasket(state, item) {
      state.push(item.payload);
    },
  },
});

export let { increase, addBasket } = basket.actions;

export default basket;
