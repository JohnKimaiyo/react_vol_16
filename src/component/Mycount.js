import React from "react";
import { useState, useEffect } from "react";

export default function Mycount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`you have cicked the button ${count} times`);
  });

  return (
    <div>
      <h3>
        <p>Counting the number if clicks</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </h3>
    </div>
  );
}
