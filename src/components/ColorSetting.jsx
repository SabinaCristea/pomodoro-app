import { useSettings } from "../context/SettingsContext";

function ColorSetting() {
  const { state, dispatch } = useSettings();

  const handleColorChange = (color) => {
    dispatch({ type: "SET_THEME_COLOR", payload: color });
  };

  return (
    <div className="settingColorContainer pr-[3.8rem] pl-[4rem] pt-[2.4rem] ">
      <div className="flex justify-between items-center ">
        <h2 className="text-dark font-sans text-[1.3rem] font-bold tracking-[0.5rem] uppercase">
          color
        </h2>
        <div className="flex gap-[1.6rem]">
          <button
            className="w-[4rem] h-[4rem] rounded-full bg-red flex items-center justify-center"
            onClick={() => handleColorChange("#f87070")}
          >
            {state.themeColor === "#f87070" && (
              <img src="../public/assets/icon-checked.svg" alt="" />
            )}
          </button>
          <button
            className="w-[4rem] h-[4rem] rounded-full bg-cian flex items-center justify-center"
            onClick={() => handleColorChange("#70f3f8")}
          >
            {state.themeColor === "#70f3f8" && (
              <img src="../public/assets/icon-checked.svg" alt="" />
            )}
          </button>
          <button
            className="w-[4rem] h-[4rem] rounded-full bg-pink flex items-center justify-center"
            onClick={() => handleColorChange("#d881f8")}
          >
            {state.themeColor === "#d881f8" && (
              <img src="../public/assets/icon-checked.svg" alt="" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorSetting;
