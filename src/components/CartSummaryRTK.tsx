import { useSelector } from "react-redux";
import { selectTotalCartQuantity } from "../features/cart/cartSlice";
import ProductAdderRTK from "./ProductAdderRTK";
import CartDisplayRTK from "./CartDisplayRTK";

function CartSummaryRTK() {
  const totalQuantity = useSelector(selectTotalCartQuantity);

  return (
  <div>
    <p>Total amount: {totalQuantity}</p>;
  <ProductAdderRTK />
  <CartDisplayRTK />
  </div>
  )
}

export default CartSummaryRTK;