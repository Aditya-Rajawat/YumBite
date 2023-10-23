import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla Redux => NOT MUTATE THE STATE, returning newState was mandatory
      // const newState = [...state]
      // newState.items.push(action.payload)
      // return newState

      // Redux Toolkit => WE NEED TO MUTATE THE STATE
      // Redux Toolkit uses ImmerJS BTS
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // state = [] => we can't mutate state like this because actually it's not mutating the state it is just changing the reference to the state.
    //   state.items.length = 0;
      //   RTK - Either mutate the state or return []
      return {items : []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
