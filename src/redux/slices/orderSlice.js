import { createSlice } from "@reduxjs/toolkit";

const initialState = { loaded: false };

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    start: (state, action) => {
      return { ...state, loaded: action.payload };
    },
  },
});

export const { start } = orderSlice.actions;
export const selectOrder = (state) => state.order;
export default orderSlice.reducer;

