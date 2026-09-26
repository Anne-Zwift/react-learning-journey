import { useState, useEffect } from "react";

function MouseTracker() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      console.log(`x: ${e.clientX}, y: ${e.clientY}`);
      setCoords({ x: e.clientX, y: e.clientY });
    };

    console.log('Mouse Tracker Active!');
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      console.log('Mouse Tracker Stopped.');
      window.addEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Mouse Tracker</h3>
        <p>
          X: {coords.x}, Y: {coords.y}
        </p>
    </div>
  )
}

export default MouseTracker;