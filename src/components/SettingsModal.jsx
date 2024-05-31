import { createPortal } from "react-dom";
import Button from "./Button";
import CustomInput from "./CustomInput";
import { useState } from "react";
import FontSetting from "./FontSetting";
import ColorSetting from "./ColorSetting";
import { useSettings } from "../context/SettingsContext";

function SettingsModal({ onClick }) {
  const { state, dispatch } = useSettings();
  const [pomodoro, setPomodoro] = useState(state.timers.normal / 60);
  const [shortBreak, setShortBreak] = useState(state.timers.shortPause / 60);
  const [longBreak, setLongBreak] = useState(state.timers.longPause / 60);
  const [selectedColor, setSelectedColor] = useState(state.themeColor);
  const [selectedFont, setSelectedFont] = useState(state.font);

  const handleApply = () => {
    dispatch({
      type: "SET_TIMERS",
      payload: {
        normal: pomodoro * 60,
        shortPause: shortBreak * 60,
        longPause: longBreak * 60,
      },
    });

    dispatch({
      type: "SET_THEME_COLOR",
      payload: selectedColor,
    });

    dispatch({
      type: "SET_FONT",
      payload: selectedFont,
    });

    onClick();
  };

  return createPortal(
    <div className="modalContainer bg-white flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[54rem] h-[46.4rem] z-[999] rounded-[2.5rem] pt-[3.4rem] pb-[5.9rem] ">
      <div className="headerContainer flex justify-between items-end pb-[3.2rem] border-b border-b-[#E3E1E1] mb-[2.8rem] pr-[3.8rem] pl-[4rem]">
        <h1
          className="text-dark text-[2.8rem] font-bold leading-normal"
          style={{ fontFamily: state.font }}
        >
          Settings
        </h1>
        <button onClick={onClick}>
          <img src="/assets/icon-close.svg" alt="Close svg icon" />
        </button>
      </div>

      <div className="settingTimesContainer pr-[3.8rem] pl-[4rem] ">
        <h2
          className="text-dark font-sans text-[1.3rem] font-bold tracking-[0.5rem] uppercase mb-[2.4rem]"
          style={{ fontFamily: state.font }}
        >
          time (minutes)
        </h2>
        <div className="settingsContainer flex gap-[2rem] pb-[2.4rem] border-b">
          <CustomInput
            label="pomodoro"
            value={pomodoro}
            onChange={(e) => setPomodoro(e.target.value)}
          />
          <CustomInput
            label="short break"
            value={shortBreak}
            onChange={(e) => setShortBreak(e.target.value)}
          />
          <CustomInput
            label="long break"
            value={longBreak}
            onChange={(e) => setLongBreak(e.target.value)}
          />
        </div>
      </div>
      <FontSetting
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
      />
      <ColorSetting
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <div className="pr-[3.8rem] pl-[4rem] flex items-center justify-center absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]">
        <Button
          className="bg-red hover:bg-[#f98d8d] px-[4.7rem] py-[1.6rem] text-[1.6rem] cursor-pointer"
          onClick={handleApply}
          style={{ fontFamily: state.font }}
        >
          Apply
        </Button>
      </div>
    </div>,
    document.body
  );
}

export default SettingsModal;
