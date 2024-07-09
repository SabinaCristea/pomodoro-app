import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSettings } from "../context/SettingsContext";
import { useEffect, useState } from "react";

function Timer() {
  const { state } = useSettings();
  const [timeLeft, setTimeLeft] = useState(state.activeTimer.duration);
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setTimeLeft(state.activeTimer.duration);
  }, [state.activeTimer]);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(state.activeTimer.duration);
  };

  const handleClick = () => {
    if (timeLeft === 0) {
      resetTimer();
    } else if (isActive) {
      pauseTimer();
    } else {
      startTimer();
    }
  };

  const baseStyle = {
    fontFamily: state.font,
    color: "lightGray",
  };

  const hoverStyle = {
    color: state.themeColor,
  };

  return (
    <div className="mb-[6.3rem]">
      <div
        className="outCircle flex items-center justify-center w-[30rem] h-[30rem] md:w-[41rem] md:h-[41rem] shrink-0 rounded-full bg-gradient shadow-custom z-0 cursor-pointer"
        onClick={handleClick}
      >
        <div className="inCircle relative flex items-center justify-center w-[26.7rem] h-[26.7rem] md:w-[36.6rem] md:h-[36.6rem] rounded-full bg-dark">
          <div className="flex flex-col items-center justify-center absolute">
            <CircularProgressbarWithChildren
              value={(timeLeft / state.activeTimer.duration) * 100}
              strokeWidth={3}
              minValue={0}
              maxValue={100}
              className="w-[24.8rem] h-[24.8rem] md:w-[34rem] md:h-[34rem]"
              styles={buildStyles({
                pathColor: state.themeColor,
                trailColor: "transparent",
              })}
            >
              <div
                className={`text-lightGray text-center text-[8rem] md:text-[10rem] ${
                  state.font === "Space Mono" ? "tracking-[-1rem]" : "font-bold"
                } ${state.font === "Kumbh Sans" ? "tracking-[-0.5rem]" : ""}`}
                style={{ fontFamily: state.font }}
              >
                {`${Math.floor(timeLeft / 60)
                  .toString()
                  .padStart(2, "0")}:${(timeLeft % 60)
                  .toString()
                  .padStart(2, "0")}`}
              </div>
              <div
                className={`text-lightGray text-[1.4rem] md:text-[1.6rem] uppercase font-bold tracking-[1.5rem] text-center place-self-center pl-[1rem]`}
                style={isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {timeLeft === 0 ? "restart" : isActive ? "pause" : "start"}
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
