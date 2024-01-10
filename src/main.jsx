import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
import reducer from "./reducer";
import { Provider, useSelector, useDispatch } from "react-redux";

const store = createStore(reducer);

const App = () => {
  const { good, ok, bad } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "GOOD" })}>good</button>
      <button onClick={() => dispatch({ type: "OK" })}>ok</button>
      <button onClick={() => dispatch({ type: "BAD" })}>bad</button>
      <button onClick={() => dispatch({ type: "ZERO" })}>reset stats</button>
      <div>good {good}</div>
      <div>ok {ok}</div>
      <div>bad {bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

renderApp();
// store.subscribe(renderApp);
