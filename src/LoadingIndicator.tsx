import { useState } from "react";

function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading 
      ? <p>Loading data...</p>
      : <p>Loaded data!</p> 
      }

      <button onClick={() => setIsLoading(false)}>
        Simulate Loading Complete
      </button>
    </div>
  );
}

export default LoadingIndicator;