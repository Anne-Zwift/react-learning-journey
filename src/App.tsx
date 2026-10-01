// src/App.tsx
import { Outlet, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const contextValue = { theme: theme, toggleTheme: toggleTheme };

return (
    <ThemeContext.Provider value={contextValue}>
      <div>      
        <h1>TanStack Router Demo</h1>
        <nav>
          <Link to="/counter">Counter</Link> | {' '}
          <Link to="/theme">Theme</Link> | {' '}
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
    </ThemeContext.Provider>
  );
}

export default App;