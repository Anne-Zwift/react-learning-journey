import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
    onClick={toggleTheme}
    style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '10px 20px',
      border: '1px solid #ccc',
      cursor: 'pointer',
    }}
    >
    Theme: {theme}
    </button>
  );
}

export default ThemedButton;