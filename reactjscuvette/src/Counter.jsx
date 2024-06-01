import { useState } from "react";

import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  return (
    <>
      <div className="container" style={{ color: color }}>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <button onClick={() => setColor("red")}>Change my Color</button>
    </>
  );
}

export default Counter;

// Hook => Function Inbuit React to work our easier.
// useState => create a variable and providing a function to manage that variable.
