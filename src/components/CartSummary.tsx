import CartDisplay from "../pages_cart/CartDisplay";
import useCartStore from "../stores/cartStore";
import ProductAdder from "./ProductAdder";

function CartSummary() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{
      marginTop: '20px',
      borderTop: '2px solid black',
      paddingTop: '10px',
    }}
    >
      <h3>Total Amount</h3>
      <p>
        Total items added to cart: <strong>{totalItems}</strong>
      </p>
      <CartDisplay />
      <ProductAdder />
      <CartDisplay />
    </div>
  )
}

export default CartSummary;