import { useEffect, useState } from "react";

function Timer({ duration }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    const interval = 1000;

    const startTimer = () => {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevProgress + 100 / (duration / interval);
        });
      }, interval);
    };

    startTimer();

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [duration]);

  return (
    <div className="mb-[6.3rem]">
      <div className="outCircle flex items-center justify-center w-[41rem] h-[41rem] shrink-0 rounded-full bg-gradient shadow-custom z-0">
        <div className="inCircle flex items-center justify-center w-[36.6rem] h-[36.6rem] rounded-full bg-dark">
          {/* <div className="progressContainer w-[33.9rem] h-[33.9rem] shrink-0  relative"> </div> */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-lightGray text-center text-[10rem] font-bold">
              17:59
            </div>
            <div className="text-lightGray text-[1.6rem] uppercase font-bold tracking-[1.5rem] text-center place-self-center pl-[1rem]">
              pause
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
