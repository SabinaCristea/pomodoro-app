import { useSettings } from "../context/SettingsContext";

function ColorSetting({ selectedColor, setSelectedColor }) {
  const { state } = useSettings();
  const red = "#f87070";
  const cian = "#70f3f8";
  const pink = "#d881f8";

  return (
    <div className="settingColorContainer pr-[3.8rem] pl-[4rem] pt-[1.8rem] md:pt-[2.4rem] ">
      <div className="flex justify-between items-center flex-col md:flex-row ">
        <h2
          className="text-dark text-[1.1rem] md:text-[1.3rem] font-bold tracking-[0.5rem] uppercase pb-[1.8rem] md:pb-0"
          style={{ fontFamily: state.font }}
        >
          color
        </h2>
        <div className="flex gap-[1.6rem]">
          <button
            className={`w-[4rem] h-[4rem] rounded-full bg-red flex items-center justify-center ${
              selectedColor !== red &&
              "hover:ring-1 hover:ring-egg hover:ring-offset-4"
            }`}
            onClick={() => setSelectedColor(red)}
          >
            {selectedColor === red && (
              <img src="/assets/icon-checked.svg" alt="" />
            )}
          </button>
          <button
            className={`w-[4rem] h-[4rem] rounded-full bg-cian flex items-center justify-center ${
              selectedColor !== cian &&
              "hover:ring-1 hover:ring-egg hover:ring-offset-4"
            }`}
            onClick={() => setSelectedColor(cian)}
          >
            {selectedColor === cian && (
              <img src="/assets/icon-checked.svg" alt="" />
            )}
          </button>
          <button
            className={`w-[4rem] h-[4rem] rounded-full bg-pink flex items-center justify-center ${
              selectedColor !== pink &&
              "hover:ring-1 hover:ring-egg hover:ring-offset-4"
            }`}
            onClick={() => setSelectedColor(pink)}
          >
            {selectedColor === pink && (
              <img src="/assets/icon-checked.svg" alt="" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorSetting;
