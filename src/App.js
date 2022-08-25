import "./app.css";
import React from "react";
import Button from "./components/button.js";

function App() {
  return (
    <div className="app">
      <Button text="google" link="https://google.com" />
      <Button text="facebook" link="" />
      <Button text="digikala" link="" />
    </div>
  );
}

export default App;
