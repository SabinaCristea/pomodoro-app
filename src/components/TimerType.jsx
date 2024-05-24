import { useState } from "react";
import Button from "./Button";

function TimerType() {
  const [activeButton, setActiveButton] = useState(null);

  function handleActiveButton(button) {
    setActiveButton(button);
  }

  const activeStyle = "bg-red text-darkBlue";
  const inactiveStyle = "bg-transparent text-lightGrey opacity-50";

  return (
    <div>
      <div className="flex bg-dark p-[0.7rem] rounded-[50rem]">
        <Button
          onClick={() => handleActiveButton("pomodoro")}
          className={activeButton === "pomodoro" ? activeStyle : inactiveStyle}
        >
          pomodoro
        </Button>
        <Button
          onClick={() => handleActiveButton("short break")}
          className={
            activeButton === "short break" ? activeStyle : inactiveStyle
          }
        >
          short break
        </Button>
        <Button
          onClick={() => handleActiveButton("long break")}
          className={
            activeButton === "long break" ? activeStyle : inactiveStyle
          }
        >
          long break
        </Button>
      </div>
    </div>
  );
}

export default TimerType;
