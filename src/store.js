import { configureStore, createSlice } from "@reduxjs/toolkit";

let cartItem = createSlice({
  name: "cartItem",
  initialState: [],
  reducers: {
    increase(state, id) {
      const i = state.findIndex((element) => element.id == id.payload);
      state[i].count += 1;
    },
    decrease(state, id) {
      const i = state.findIndex((element) => element.id == id.payload);
      if (state[i].count > 1) state[i].count -= 1;
      else alert("최소 수량은 1개입니다");
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
export let { increase, decrease, inCart, outCart } = cartItem.actions;

export let { changeUi } = user.actions;

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
    user: user.reducer,
  },
});
