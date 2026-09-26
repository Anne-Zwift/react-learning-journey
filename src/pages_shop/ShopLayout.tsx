import { Link, Outlet } from '@tanstack/react-router';

function ShopLayout() {
  return (
    <div>
      <h1>Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default ShopLayout;
