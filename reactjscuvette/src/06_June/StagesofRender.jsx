import { useState, useEffect } from "react";

const StagesofRender = () => {
  const [count, setCount] = useState(0);

  //ComponentDidMount
  console.log("we are learning useEffect");

  useEffect(() => {
    console.log(count);
    console.log("Component mounted or count updated", count);

    return () => {
      console.log(
        "Cleanup Function on Component unmount or before count updates",
        count
      );
    };
  }, [count]);

  return (
    <>
      <div>
        <p>you clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </>
  );
};

export default StagesofRender;

// In React, functional components have become the standard for building components thanks to React Hooks, which were introduced in React 16.8. The useEffect Hook is one of the most powerful and commonly used hooks, enabling you to perform side effects in your functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM.

// =====>

// The useEffect hook allows you to run side effects in your functional components. It is essentially a combination of lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
