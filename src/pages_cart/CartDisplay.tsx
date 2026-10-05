import useCartStore from "../stores/cartStore";

function CartDisplay() {
  const items = useCartStore((state) => state.items);

  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  if (items.length === 0) {
    return <p>Cart is empty.</p>
  }

  return (
    <div>
      <h2>Cart (Zustand)</h2>
    <ul>
      {items.map((item) => (
        <li
          key={item.productId}
          style={{
            margin: '10px 0',
            borderBottom: '1px solid #eee',
            paddingBottom: '5px',
          }}
          >
            <span>Product ID: {item.productId}</span>
            <br />
            <span>Amount: {item.quantity}</span>
            <button 
            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
            style={{ marginLeft: '10px' }}
            >-
            </button>
            <button 
              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
              style={{ marginLeft: '5px' }}
            >+
            </button>
            <button 
              onClick={() => removeItem(item.productId)}
              style={{ marginLeft: '10px', color: 'red' }}
            >Remove item
            </button>            
        </li>
      ))}
    </ul>
    </div>
  );
}

export default CartDisplay;