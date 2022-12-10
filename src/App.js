import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
import Myname from "./component/Myname";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend Dveloepr" />
      <Title name="Soldity Developer" />
      <Myname/>
    </div>
  );
}

export default App;
