import { createPortal } from "react-dom";
import Button from "./Button";

function SettingsModal() {
  return createPortal(
    <div className="modalContainer bg-white flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[54rem] h-[46.4rem] z-[999] rounded-[2.5rem] pt-[3.4rem] pb-[5.9rem] ">
      <div className="headerContainer flex justify-between items-end pb-[3.2rem] border-b border-b-[#E3E1E1] mb-[2.8rem] pr-[3.8rem] pl-[4rem]">
        <h1 className="font-sans text-dark text-[2.8rem] font-bold leading-normal ">
          Settings
        </h1>
        <div>
          <img src="../public/assets/icon-close.svg" alt="Close svg icon" />
        </div>
      </div>

      <div className="settingTimesContainer pr-[3.8rem] pl-[4rem]"></div>
      <div className="settingFontContainer pr-[3.8rem] pl-[4rem]"></div>
      <div className="settingColorContainer pr-[3.8rem] pl-[4rem]"></div>
      <div className="pr-[3.8rem] pl-[4rem] flex items-center justify-center absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]">
        <Button className="bg-red px-[4.7rem] py-[1.6rem] text-[1.6rem]">
          Apply
        </Button>
      </div>
    </div>,
    document.body
  );
}

export default SettingsModal;
