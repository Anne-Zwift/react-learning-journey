// src/App.tsx
import { Outlet, Link } from '@tanstack/react-router';
import './App.css';

function App() {
  return (
    <div>
      <h1>TanStack Router Demo</h1>
      <nav>
        <Link to="/">Welcome</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
        <Link to="/info">Info</Link> |{' '}
        <Link to="/articles">Articles</Link> |{' '}
        <Link to="/shop">Shop</Link> |{' '}
        <Link to="/demo">Demo Archive</Link>
      </nav>
      <hr />

      <Outlet />
    </div>
  );
}

export default App;