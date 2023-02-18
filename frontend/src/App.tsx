import React, { createElement as e } from "react";
import "./App.scss";

function App() {
  return e("div", { className: "container" }, [
    e("h1", { className: "container" }, "Some text"),
    e("button", { className: "bg-danger" }, "Click Me"),
  ]);
  return <h1>Hello React !!!</h1>;
}

export default App;
