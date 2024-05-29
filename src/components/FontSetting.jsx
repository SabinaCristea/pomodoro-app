import { useSettings } from "../context/SettingsContext";

function FontSetting() {
  const { state, dispatch } = useSettings();

  const handleFontChange = (font) => {
    dispatch({ type: "SET_FONT", payload: font });
  };

  return (
    <div className="settingFontContainer pr-[3.8rem] pl-[4rem] pt-[2.4rem] ">
      <div className="flex justify-between items-center pb-[2.4rem] border-b">
        <h2 className="text-dark font-sans text-[1.3rem] font-bold tracking-[0.5rem] uppercase">
          font
        </h2>
        <div className="flex gap-[1.6rem]">
          <button
            className={`w-[4rem] h-[4rem] rounded-full ${
              state.font === "sans"
                ? "bg-dark text-white"
                : "bg-egg text-dark opacity-[0.7297]"
            } flex items-center justify-center  font-bold font-sans`}
            onClick={() => handleFontChange("sans")}
          >
            Aa
          </button>
          <button
            className={`w-[4rem] h-[4rem] rounded-full ${
              state.font === "slab"
                ? "bg-dark text-white"
                : "bg-egg text-dark opacity-[0.7297]"
            } flex items-center justify-center  font-bold font-slab`}
            onClick={() => handleFontChange("slab")}
          >
            Aa
          </button>
          <button
            className={`w-[4rem] h-[4rem] rounded-full ${
              state.font === "mono"
                ? "bg-dark text-white"
                : "bg-egg text-dark opacity-[0.7297]"
            } flex items-center justify-center font-bold font-mono`}
            onClick={() => handleFontChange("mono")}
          >
            Aa
          </button>
        </div>
      </div>
    </div>
  );
}

export default FontSetting;
