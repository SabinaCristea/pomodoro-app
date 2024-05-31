import { useState } from "react";
import Button from "./Button";
import { useSettings } from "../context/SettingsContext";

function TimerType() {
  const { state, dispatch } = useSettings();
  const [activeButton, setActiveButton] = useState("pomodoro");
  const [hoveredBtn, setHoveredBtn] = useState(null);

  function handleActiveButton(button) {
    setActiveButton(button);
    let timerDuration;
    switch (button) {
      case "pomodoro":
        timerDuration = state.timers.normal;
        break;
      case "short break":
        timerDuration = state.timers.shortPause;
        break;
      case "long break":
        timerDuration = state.timers.longPause;
        break;
      default:
        timerDuration = state.timers.normal;
    }
    dispatch({
      type: "SET_ACTIVE_TIMER",
      payload: { type: button, duration: timerDuration },
    });
  }

  const activeStyle = {
    fontFamily: state.font,
    backgroundColor: state.themeColor,
    color: "#1e213f",
  };

  const inactiveStyle = {
    fontFamily: state.font,
    backgroundColor: "transparent",
    color: "lightGray",
    opacity: 0.5,
  };

  const hoveredStyle = {
    color: "lightGray",
    opacity: 1,
  };

  return (
    <div className="mb-[4.5rem] z-20 flex justify-center">
      <div className="inline-flex bg-dark p-[0.7rem] rounded-[50rem] justify-center">
        <Button
          onClick={() => handleActiveButton("pomodoro")}
          className={`px-[2.5rem] py-[1.5rem]`}
          style={
            activeButton === "pomodoro"
              ? activeStyle
              : {
                  ...inactiveStyle,
                  ...(hoveredBtn === "pomodoro" && hoveredStyle),
                }
          }
          onMouseEnter={() => setHoveredBtn("pomodoro")}
          onMouseLeave={() => setHoveredBtn(null)}
        >
          pomodoro
        </Button>
        <Button
          onClick={() => handleActiveButton("short break")}
          className={` px-[2.5rem] py-[1.5rem]`}
          style={
            activeButton === "short break"
              ? activeStyle
              : {
                  ...inactiveStyle,
                  ...(hoveredBtn === "short break" && hoveredStyle),
                }
          }
          onMouseEnter={() => setHoveredBtn("short break")}
          onMouseLeave={() => setHoveredBtn(null)}
        >
          short break
        </Button>
        <Button
          onClick={() => handleActiveButton("long break")}
          className={` px-[2.5rem] py-[1.5rem]`}
          style={
            activeButton === "long break"
              ? activeStyle
              : {
                  ...inactiveStyle,
                  ...(hoveredBtn === "long break" && hoveredStyle),
                }
          }
          onMouseEnter={() => setHoveredBtn("long break")}
          onMouseLeave={() => setHoveredBtn(null)}
        >
          long break
        </Button>
      </div>
    </div>
  );
}

export default TimerType;
