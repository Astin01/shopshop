import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userInfo = createAsyncThunk("userdata", async () => {
  try {
    const response = await axios.get("/ckLogin");
    return response.data.user;
  } catch (error) {
    console.error(error);
  }
});

export default userInfo;
