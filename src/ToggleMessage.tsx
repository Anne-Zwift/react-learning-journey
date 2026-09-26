import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>show/hide message</button>

      {isVisible && <p>Secret Message!</p>}
    </div>
  );
}

export default ToggleMessage;