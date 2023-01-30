import { configureStore, createSlice } from "@reduxjs/toolkit";
import fetchData from "./utils/userInfo";
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
      if (i != -1) {
        state[i].count += 1;
        state[i].id = product.payload.id;
        state[i].name = product.payload.name;
        state[i].price = product.payload.price;
        state[i].tprice = product.payload.tprice;
      } else return [...state, product.payload];
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
  initialState: {
    name: "kim",
    address: "서울",
    tel: "010-2222-2222",
    id: "test",
    pw: "test",
    email: "test@test.com",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.tel = action.payload.tel;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.pw = action.payload.pw;
      state.status = "complete";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = "fail";
    });
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
