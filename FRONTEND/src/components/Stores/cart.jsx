import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    incrementQty: (state, action) => {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (index >= 0) {
        state.items[index].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },

    decrementQty: (state, action) => {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (index >= 0) {
        const currentQty = state.items[index].quantity;
        // Ensure quantity does not go below 0
        const newQty = currentQty - quantity;

        state.items[index].quantity = newQty >= 0 ? newQty : 0;
      }
    },
     // Add this reducer for deleting an item from cart
    deleteItem: (state, action) => {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, incrementQty, decrementQty, deleteItem } = cartSlice.actions;
