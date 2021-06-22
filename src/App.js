import React from "react";
import "./styles.css";

import reducer from "./counter.reducer";

const initialState = {
  counter: 0,
  step: 1,
};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Counter with useReducer</h1>
      <h1>{state.counter}</h1>
      <h2>{state.step}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT_STEP" })}>
        Step + 1
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "DECREMENT_STEP" })}>
        Step - 1
      </button>
    </div>
  );
}
