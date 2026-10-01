import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

function CounterPage() {
  return (
    <div>
      <h2>Zustand Counter</h2>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
}

export default CounterPage;