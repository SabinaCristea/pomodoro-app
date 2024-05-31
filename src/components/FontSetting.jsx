import { useSettings } from "../context/SettingsContext";

function FontSetting({ selectedFont, setSelectedFont }) {
  const { state } = useSettings();
  const sans = "Kumbh Sans";
  const slab = "Roboto Slab";
  const mono = "Space Mono";

  return (
    <div className="settingFontContainer pr-[3.8rem] pl-[4rem] pt-[2.4rem] ">
      <div className="flex justify-between items-center pb-[2.4rem] border-b">
        <h2
          className="text-dark text-[1.3rem] font-bold tracking-[0.5rem] uppercase "
          style={{ fontFamily: state.font }}
        >
          font
        </h2>
        <div className="flex gap-[1.6rem]">
          <button
            className={`w-[4rem] h-[4rem] rounded-full ${
              selectedFont === sans
                ? "bg-dark text-white"
                : "bg-egg text-dark opacity-[0.7297]"
            } flex items-center justify-center  font-bold font-sans ${
              selectedFont !== sans &&
              "hover:ring-1 hover:ring-egg hover:ring-offset-4"
            }`}
            onClick={() => setSelectedFont(sans)}
          >
            Aa
          </button>
          <button
            className={`w-[4rem] h-[4rem] rounded-full ${
              selectedFont === slab
                ? "bg-dark text-white"
                : "bg-egg text-dark opacity-[0.7297]"
            } flex items-center justify-center  font-bold font-slab ${
              selectedFont !== slab &&
              "hover:ring-1 hover:ring-egg hover:ring-offset-4"
            }`}
            onClick={() => setSelectedFont(slab)}
          >
            Aa
          </button>
          <button
            className={`w-[4rem] h-[4rem] rounded-full ${
              selectedFont === mono
                ? "bg-dark text-white"
                : "bg-egg text-dark opacity-[0.7297]"
            } flex items-center justify-center font-bold font-mono ${
              selectedFont !== mono &&
              "hover:ring-1 hover:ring-egg hover:ring-offset-4"
            }`}
            onClick={() => setSelectedFont(mono)}
          >
            Aa
          </button>
        </div>
      </div>
    </div>
  );
}

export default FontSetting;
