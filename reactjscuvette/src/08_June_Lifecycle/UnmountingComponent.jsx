import { useEffect } from "react";

// This phase occurs when the component is being removed from the DOM.

const UnmountingComponent = () => {
  useEffect(() => {
    console.log("Component Rendered");

    return () => {
      console.log("Component will unmount");
    };
  }, []);
  return <div>UnmountingComponent</div>;
};

export default UnmountingComponent;

// useEffect for Mounting: An effect with an empty dependency array runs only once after the initial render.
// useEffect for Updating: An effect with dependencies runs after each render if the dependencies have changed.
// useEffect for Unmounting: Return a cleanup function from the effect to handle component unmounting.