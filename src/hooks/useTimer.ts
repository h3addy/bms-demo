import { useEffect, useState } from "react";

type IProps = {
  initialTime: number;
  currState: "start" | "pause" | "resume" | "";
};
export const useTimer = ({ initialTime, currState }: IProps) => {
  const [cuurTime, setCurrTime] = useState(0);
  console.log("Called here", initialTime);
  useEffect(() => {
    let timerId: number | undefined;
    if (currState !== "pause" && currState !== "")
      timerId = setInterval(() => {
        setCurrTime((prevState) => prevState + 1);
      }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [currState]);

  useEffect(() => {
    setCurrTime(initialTime);
  }, [initialTime]);

  if (currState === "") return 0;
  if (currState === "pause") return initialTime;
  return cuurTime;
};
