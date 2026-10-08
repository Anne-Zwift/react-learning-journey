import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";


function ProductAdderRTK() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => dispatch(addItem({ productId: 'p1', name: 'Apple'}))}>Add Apple</button>{' '}
      <button onClick={() => dispatch(addItem({ productId: 'p2', name: 'Banana'}))}>Add Banana</button>{' '}
      <button onClick={() => dispatch(addItem({ productId: 'p3', name: 'Orange'}))}>Add Orange</button>
    </div>
  );
}

export default ProductAdderRTK;