import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { createSelector } from "reselect"


interface Product {
  productId: string | number;
  name: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: Record<string | number, CartItem>;
}

const initialState: CartState = { items: {} };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const { productId } = action.payload;
      if (state.items[productId]) {
        state.items[productId].quantity += 1;
      } else {
        state.items[productId] = { ...action.payload, quantity: 1 };
      }
    },

    removeItem(state, action: PayloadAction<string | number>) {
      delete state.items[action.payload];
    },
    updateQuantity(state, action: PayloadAction<{productId: string | number; quantity: number}>) {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        delete state.items[productId];
      } else if (state.items[productId]) {
        state.items[productId].quantity = quantity;
      }
    },

    clearCart(state) {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItemsMap = (state: RootState) => state.cart.items;

export const selectCartItemsArray = createSelector(
  [selectCartItemsMap],
  (itemsMap) => Object.values(itemsMap)
);

export const selectTotalCartQuantity = createSelector(
  [selectCartItemsArray],
  (itemsArray) => itemsArray.reduce((sum, item) => sum + item.quantity, 0)
);