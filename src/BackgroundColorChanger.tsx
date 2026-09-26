import { useState } from "react";

function BackgroundColorChanger() {
  const [backgroundColor, setBackgroudColor] = useState('white');

  function handleChangeColor() {
    setBackgroudColor(backgroundColor === 'white' ? 'lightblue' : 'white');
  }

  return (
    <div style={{ 
      backgroundColor: backgroundColor, 
      height: '100px', 
      border: '1px solid black', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'}}
      >
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );


}

export default BackgroundColorChanger;