import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App";

// this is a simple Redux store example.  Redux is a state management library for JavaScript applications.
// It provides a way to manage the state of an application in a predictable way.

// Redux uses a unidirectional data flow, meaning that data flows in one direction through the application.
// counterReducer is a function that takes the current state and an action as arguments and returns the new state.
const counterReducer = (state = 100, action) => {
  switch (action.type) {
    case "LISÄÄ":
      return state + 1;
    case "VÄHENNÄ":
      return state - 1;
    case "NOLLAA":
      return 0;
    default:
      return state;
  }
};

// Create a Redux store. The store is a single source of truth for the application state. 
// The store is created using a reducer function that defines how the state changes in response to actions
// The reducer function takes the current state and an action as arguments and returns the new state

export const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
// Subscribe to store changes and re-render the app
store.subscribe(renderApp);