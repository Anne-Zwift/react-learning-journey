import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";
import { selectCartItemsArray } from "../features/cart/cartSlice";


function CartDisplayRTK() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItemsArray);

  if (items.length === 0) {
    return <p>Cart is empty.</p>
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.productId}>
            {item.name} - Amount: {item.quantity} {' '}
            <button onClick={() => 
              dispatch(
                updateQuantity({
                  productId: item.productId,
                  quantity: item.quantity + 1,
                })
              )
            }
            style={{ marginLeft: '5px', marginRight: '5px', color: "green"}}
            >
             +
            </button>
            <button onClick={() => 
              dispatch(
                updateQuantity({
                  productId: item.productId,
                  quantity: item.quantity - 1,
                })
              )
            }
            style={{ marginLeft: '5px', marginRight: '5px', color: "red"}}
            >
              -
            </button>
            <button onClick={() => dispatch(removeItem(item.productId))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartDisplayRTK;