// // import MovieApp from "./MovieApp";
// // import ParentComponent from "./ParentComponent";
// // import Box from "./Box";
// // import Counter from "./Counter";
// // import { Shubham, Abc, Def, Xyz } from "./Modules";
// // import MyForm from "./MyForm";
// // import StagesofRender from "./06_June/StagesofRender";
// // import UnmountingComponent from "./08_June_Lifecycle/UnmountingComponent";
// import UserProfile from "./08_June_Lifecycle/UserProfile";

// function App() {
//   return (
//     <>
//       <UserProfile />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import TimerComponent from "./08_June_Lifecycle/TimerComponent";

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {showTimer && <TimerComponent />}
    </div>
  );
};

export default App;

// Initially, the TimerComponent is mounted, and the timer starts.

// Clicking the "Hide Timer" button unmounts the TimerComponent, triggering the cleanup function that stops the timer.

// Clicking the "Show Timer" button again remounts the TimerComponent, starting a new timer.

// passing the data b / w Component

// props
// useContext API
// Redux
