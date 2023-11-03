import { useState } from "react";
import { useTimer } from "../hooks/useTimer";

const Timer = () => {
  const [currentState, setCurrentState] = useState<
    "start" | "pause" | "resume" | ""
  >("");
  const [initalTime, setInitialTime] = useState<number>(0);
  const secTime = useTimer({
    initialTime: initalTime,
    currState: currentState,
  });

  const handleStart = () => {
    setCurrentState("start");
    setInitialTime(0);
  };

  const handlePause = () => {
    setCurrentState("pause");
    setInitialTime(secTime);
  };

  const handleResume = () => {
    setCurrentState("resume");
    setInitialTime(secTime);
  };

  return (
    <div>
      <p>{secTime}</p>
      <button onClick={handleStart} disabled={currentState === "resume"}>
        Start
      </button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume} disabled={currentState === "start"}>
        Resume
      </button>
    </div>
  );
};

export default Timer;
