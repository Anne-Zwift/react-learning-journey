import useCartStore from "../stores/cartStore";


function ProductAdder() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => addItem({ productId: 'p1', name: 'Apple'})}>Add Apple</button>
      <button onClick={() => addItem({ productId: 'p2', name: 'Banana'})}>Add Banana</button>
      <button onClick={() => addItem({ productId: 'p3', name: 'Orange'})}>Add Orange</button>
    </div>
  );
}

export default ProductAdder;