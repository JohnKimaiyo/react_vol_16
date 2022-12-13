import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
import Myname from "./component/Myname";
import Mycount from "./component/Mycount";
import Form from "./component/Form";
import Users from "./component/Users";
import Event from "./component/Event";
import Range from "./component/Range";
import Submit from "./component/Submit";
import InputFocus from "./component/InputFocus";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend Dveloepr" />
      <Title name="Soldity Developer" />
      <Myname />
      <Mycount />
      <Form />
      <Users />
      <Event />
      <Range />
      <Submit />

      <InputFocus />
    </div>
  );
}

export default App;
