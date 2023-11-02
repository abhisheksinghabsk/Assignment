import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startandstop = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    console.log("resf");
    setTime(0);
  };

  return (
    <div>
      <h1>STOPWATCH</h1>
      <p>{time}</p>
      <div>
        <button onClick={startandstop}> {isRunning ? "Stop" : "start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
