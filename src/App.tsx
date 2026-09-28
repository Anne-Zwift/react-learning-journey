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
        <Link to="/demo">Demo Archive</Link> | {' '}
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> | {' '}
        <Link to="/">Home</Link> | <Link to="/towns">Towns</Link> | {' '}
        <Link to="/articles/$articleId" params={{ articleId: '1' }}>Article 1</Link> | {' '}
        <Link to="/articles/$articleId" params={{ articleId: '2' }}>Article 2</Link> | {' '}
        <Link to="/articles/$articleId" params={{ articleId: '99' }}>Article 99</Link> | {' '}
      </nav>
      <hr />

      <Outlet />
    </div>
  );
}

export default App;