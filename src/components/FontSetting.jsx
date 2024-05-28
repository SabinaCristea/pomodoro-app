function FontSetting() {
  return (
    <div className="settingFontContainer pr-[3.8rem] pl-[4rem] pt-[2.4rem] ">
      <div className="flex justify-between items-center pb-[2.4rem] border-b">
        <h2 className="text-dark font-sans text-[1.3rem] font-bold tracking-[0.5rem] uppercase">
          font
        </h2>
        <div className="flex gap-[1.6rem]">
          <button className="w-[4rem] h-[4rem] rounded-full bg-egg flex items-center justify-center text-dark opacity-[0.7297] font-bold font-sans">
            Aa
          </button>
          <button className="w-[4rem] h-[4rem] rounded-full bg-egg flex items-center justify-center text-dark opacity-[0.7297] font-bold font-slab">
            Aa
          </button>
          <button className="w-[4rem] h-[4rem] rounded-full bg-egg flex items-center justify-center text-dark opacity-[0.7297] font-bold font-mono">
            Aa
          </button>
        </div>
      </div>
    </div>
  );
}

export default FontSetting;
