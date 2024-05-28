function ColorSetting() {
  return (
    <div className="settingColorContainer pr-[3.8rem] pl-[4rem] pt-[2.4rem] ">
      <div className="flex justify-between items-center ">
        <h2 className="text-dark font-sans text-[1.3rem] font-bold tracking-[0.5rem] uppercase">
          color
        </h2>
        <div className="flex gap-[1.6rem]">
          <button className="w-[4rem] h-[4rem] rounded-full bg-red flex items-center justify-center" />
          <button className="w-[4rem] h-[4rem] rounded-full bg-cian flex items-center justify-center" />
          <button className="w-[4rem] h-[4rem] rounded-full bg-pink flex items-center justify-center" />
        </div>
      </div>
    </div>
  );
}

export default ColorSetting;
