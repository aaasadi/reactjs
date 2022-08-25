import "./app.css";
import React from "react";
import Button from "./components/button.js";

function App() {
  return (
    <div className="app">
      <Button text="google" />
      <Button text="facebook" />
      <Button text="digikala" />
    </div>
  );
}

export default App;
