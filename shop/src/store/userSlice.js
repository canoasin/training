import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "Baek", age: 28 },
  reducers: {
    changeName(state) {
      state.name = "Jung";
    },
  },
});

export let { changeName } = user.actions;

export default user;
