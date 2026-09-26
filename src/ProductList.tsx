  const products = [
    { id: 'p1', name: 'Melkesjokolade' },
    { id: 'p2', name: 'Fiskeboller' },
    { id: 'p3', name: 'Knekkebrød' },
  ];


function ProductList() {
    return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (<li key={product.id}>{product.name}</li>))}
      </ul>
    </div>
  );
}

export default ProductList;