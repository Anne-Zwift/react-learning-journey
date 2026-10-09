import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Product {
  productId: string | number;
  name: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  removeItem: (productId: string | number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.productId === product.productId,
      );

      if (existingItem) {
        const updatedItems = state.items.map(
          (item) =>
            item.productId === product.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
        );
        return { items: updatedItems };
      } else {
        const newItem = { ...product, quantity: 1 };
        const updatedItems = [...state.items, newItem];
        return { items: updatedItems };
      }
    }),
    updateQuantity: (productId, quantity) =>
      set((state) => {
        if (quantity <= 0) {
          const updatedItems = state.items.filter(
            (item) => item.productId !== productId,
          );
          return { items: updatedItems };
        } else {
          const updatedItems = state.items.map((item) => 
            item.productId === productId
            ? { ...item, quantity: quantity }
            : item,
          );
          return { items: updatedItems };
        }
      }),
      removeItem: (productId) =>
        set((state) => {
          const updatedItems = state.items.filter(
            (item) => item.productId !== productId
          );
          return {items: updatedItems };
        }),
      clearCart: () => set({ items: [] }),
}),
{
  name: "shopping-cart-storage",
  storage: createJSONStorage(() => localStorage),
}
  )
);

export default useCartStore;