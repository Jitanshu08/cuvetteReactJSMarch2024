import { useState, useEffect } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSec) => prevSec + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Timer cleaned up");
    };
  }, []);

  return (
    <>
      <p>Timer: {seconds} seconds</p>
    </>
  );
};

export default TimerComponent;
