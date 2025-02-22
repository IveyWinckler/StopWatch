import React, { useState, useRef, useEffect } from "react";

const Stopwatch = () => {
  // State to keep track of time (in seconds) and whether the stopwatch is running.
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // useRef to store the interval ID so we can clear it later.
  const intervalRef = useRef(null);

  // Function to start the stopwatch
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000); // update every second
    }
  };

  // Function to stop the stopwatch
  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // Function to reset the stopwatch
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  // Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <p style={{ fontSize: "2rem" }}>{time} seconds</p>
      <div>
        <button onClick={handleStart} style={{ margin: "0 5px" }}>Start</button>
        <button onClick={handleStop} style={{ margin: "0 5px" }}>Stop</button>
        <button onClick={handleReset} style={{ margin: "0 5px" }}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
