import "../components/CustomInput.css";

function CustomInput({ label, value, onChange }) {
  const settingStyle = "flex flex-col";
  const labelStyle =
    "text-dark font-sans text-[1.2rem] font-bold opacity-[0.4] mb-[0.8rem]";
  const inputStyle =
    "w-[14rem] h-[4.8rem] rounded-[1rem] bg-egg text-dark text-[1.4rem] font-bold pl-[1.6rem] ";

  return (
    <div>
      <div className={`${settingStyle}`}>
        <label className={labelStyle}>{label}</label>
        <div className="relative">
          <input
            className={`${inputStyle}`}
            type="number"
            min="0"
            value={value}
            onChange={onChange}
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
                src="../public/assets/icon-arrow-up.svg"
                alt="Svg arrow up"
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
                src="../public/assets/icon-arrow-down.svg"
                alt="Svg arrow down"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomInput;
