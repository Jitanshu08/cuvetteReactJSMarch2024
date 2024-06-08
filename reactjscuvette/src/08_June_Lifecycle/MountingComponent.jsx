// 1. In React, the component life cycle refers to the series of events that occur from the creation of a component to its destruction.

// 2. This life cycle can be divided into three main phases: Mounting, Updating, and Unmounting. Functional components in React use hooks to handle these life cycle events. One of the most commonly used hooks for this purpose is useEffect.

// 3. This is when the component is being created and inserted into the DOM. (Initial Render)

import { useEffect } from "react";

const MountingComponent = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []); //  Empty dependency array means this effect runs only once
  return <div>Mounting Component</div>;
};

export default MountingComponent;
