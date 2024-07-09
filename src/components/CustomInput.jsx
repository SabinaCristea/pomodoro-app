import "../components/CustomInput.css";
import { useSettings } from "../context/SettingsContext";

function CustomInput({ label, value, onChange }) {
  const { state } = useSettings();

  const settingStyle =
    "flex items-center justify-between md:items-start md:flex-col ";
  const labelStyle =
    "text-dark text-[1.2rem] font-bold opacity-[0.4] mb-[0.8rem]";
  const inputStyle =
    "w-[14rem] h-[4rem] md:h-[4.8rem] rounded-[1rem] bg-egg text-dark text-[1.4rem] font-bold pl-[1.6rem]";

  return (
    <div>
      <div className={`${settingStyle}`}>
        <label className={labelStyle} style={{ fontFamily: state.font }}>
          {label}
        </label>
        <div className="relative">
          <input
            className={`${inputStyle}`}
            type="number"
            min="0"
            value={value}
            onChange={onChange}
            style={{ fontFamily: state.font }}
          />
          <div className="arrow-buttons flex flex-col gap-[1rem] absolute top-[50%] translate-y-[-50%] right-[1.6rem]">
            <button
              type="button"
              onClick={() =>
                onChange({
                  target: { value: Math.max(parseInt(value, 10) + 1, 0) },
                })
              }
            >
              <img
                src="/assets/icon-arrow-up.svg"
                alt="Svg arrow up"
                className="opacity-[0.25] hover:opacity-[1]"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                onChange({
                  target: { value: Math.max(parseInt(value, 10) - 1, 0) },
                })
              }
            >
              <img
                src="/assets/icon-arrow-down.svg"
                alt="Svg arrow down"
                className="opacity-[0.25] hover:opacity-[1]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomInput;
