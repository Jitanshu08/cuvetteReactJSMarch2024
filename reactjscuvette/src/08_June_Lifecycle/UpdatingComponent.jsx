import { useState, useEffect } from "react";

// This phase happens when the component is being re-rendered due to changes in its props or state.

const UpdatingComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component re-rendered");
  }, []);

  useEffect(() => {
    console.log(`Count changes to ${count}`);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UpdatingComponent;
