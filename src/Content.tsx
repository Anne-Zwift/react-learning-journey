import { useContext } from "react";
import ThemedButton from "./ThemedButton";
import { ThemeContext } from "./contexts/ThemeContext";


function Content() {

  const { theme } = useContext(ThemeContext);

  return (
    <div
       style={{
        backgroundColor: theme === 'light' ? '#fff' : '#222',
        color: theme === 'light' ? '#333' : '#eee',
        minHeight: '100vh',
        padding: '20px',
        transition: 'background-color 0.3s',
      }}
      >
      <h2>Content Component</h2>
      <ThemedButton />
    </div>
  );
}

export default Content;