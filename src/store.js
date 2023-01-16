import { configureStore, createSlice } from "@reduxjs/toolkit";

let cartItem = createSlice({
  name: "cartItem",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Red Knit", count: 1 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increase(state, id) {
      const i = state.findIndex((element) => element.id == id.payload);
      state[i].count += 1;
    },
    inCart(state, product) {
      const i = state.findIndex((element) => element.id == product.payload.id);
      if (i != -1) state[i].count += 1;
      else return [...state, product.payload];
    },
    outCart(state, id) {
      const i = state.findIndex((element) => element.id == id.payload);
      let copy = [...state];
      copy.splice(i, 1);
      return copy;
    },
  },
});

let user = createSlice({
  name: "user",
  initialState: { name: "", address: "", tel: "", id: "", pw: "" },
  reducers: {
    changeUi(state, action) {
      state.name = action.payload.name;
      state.tel = action.payload.tel;
      state.id = action.payload.id;
      state.pw = action.payload.pw;
    },
  },
});
export let { increase, inCart, outCart, changeUi } = cartItem.actions;

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
    user: user.reducer,
  },
});
