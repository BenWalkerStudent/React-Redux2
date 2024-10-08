import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  let dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>hello {counter} </h1>
    </div>
  );
}

export default App;
