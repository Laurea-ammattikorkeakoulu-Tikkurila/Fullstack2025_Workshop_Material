import React from "react";
import { store } from "./main";
import "./App.css";

// This is a simple React component that displays a counter and buttons to increment, decrement, and reset the counter.
// The component uses Redux for state management. The counter value is stored in the Redux store, and the component subscribes to store changes to re-render when the state changes.
// The component renders the current counter value and three buttons: "lisää" (increment), "vähennä" (decrement), and "nollaa" (reset).
// The buttons dispatch actions to the Redux store when clicked. The actions are defined in the reducer function in main.jsx.
// The component uses the store's getState method to get the current counter value and the dispatch method to send actions to the store.
// The component is styled using CSS classes defined in App.css.
const App = () => {
  return (
    <div className="container">
      <div className="counter">{store.getState()}</div>
      <button onClick={() => store.dispatch({ type: "LISÄÄ" })}>lisää</button>
      <button onClick={() => store.dispatch({ type: "VÄHENNÄ" })}>
        vähennä
      </button>
      <button onClick={() => store.dispatch({ type: "NOLLAA" })}>nollaa</button>
    </div>
  );
};

export default App;