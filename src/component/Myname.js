import React from "react";
import { useState } from "react";

export default function Myname() {
  const [name, setName] = useState("john");

  const changeName = () => {
    setName("kimaiyo");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}>Click Me</button>
    </div>
  );
}
