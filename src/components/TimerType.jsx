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
    <div className="mb-[4.5rem] z-20 flex justify-center">
      <div className="inline-flex bg-dark p-[0.7rem] rounded-[50rem] justify-center ">
        <Button
          onClick={() => handleActiveButton("pomodoro")}
          className={`${
            activeButton === "pomodoro" ? activeStyle : inactiveStyle
          } px-[2.5rem] py-[1.5rem]`}
        >
          pomodoro
        </Button>
        <Button
          onClick={() => handleActiveButton("short break")}
          className={`${
            activeButton === "short break" ? activeStyle : inactiveStyle
          } px-[2.5rem] py-[1.5rem]`}
        >
          short break
        </Button>
        <Button
          onClick={() => handleActiveButton("long break")}
          className={`${
            activeButton === "long break" ? activeStyle : inactiveStyle
          } px-[2.5rem] py-[1.5rem]`}
        >
          long break
        </Button>
      </div>
    </div>
  );
}

export default TimerType;
