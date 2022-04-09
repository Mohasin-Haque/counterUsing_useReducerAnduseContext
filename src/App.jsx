import { useCounter } from "./counter-context";
import "./styles.css";

export default function App() {
  const { state, dispatch } = useCounter();
  return (
    <div className="App">
      <h1 className="app-header">
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 22 })}>
          Click here to add 22
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 22 })}>
          Click here to subtract 22
        </button>
        <button onClick={() => dispatch({ type: "RESET", payload: 0 })}>
          Reset
        </button>
        <div className="app-body">Result : {state.counter}</div>
      </h1>
    </div>
  );
}
