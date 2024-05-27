import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer() {
  return (
    <div className="mb-[6.3rem]">
      <div className="outCircle flex items-center justify-center w-[41rem] h-[41rem] shrink-0 rounded-full bg-gradient shadow-custom z-0">
        <div className="inCircle relative flex items-center justify-center w-[36.6rem] h-[36.6rem] rounded-full bg-dark">
          <div className="flex flex-col items-center justify-center absolute">
            <CircularProgressbarWithChildren
              value={100}
              strokeWidth={4}
              minValue={0}
              maxValue={100}
              className="w-[34rem] h-[34rem]"
              styles={buildStyles({
                pathColor: "#f87070",
                trailColor: "transparent",
              })}
            >
              <div className="text-lightGray text-center text-[10rem] font-bold">
                22:22
              </div>
              <div className="text-lightGray text-[1.6rem] uppercase font-bold tracking-[1.5rem] text-center place-self-center pl-[1rem]">
                pause
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
