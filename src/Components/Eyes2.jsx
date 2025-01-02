import { useState } from "react";
import { useEffect } from "react";

const Eyes2 = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"  className="w-100% relative h-screen bg-[#CDEA68] justify-center items-center">
      <div className="start text-[11vw] mt-10 py-10 text-center leading-none tracking-tighter font-bold font-['TradeGothic_LT_CondEighteen']">
        <h1>READY</h1>
        <h1>TO START</h1>
        <h1>THE PROJECT?</h1>
      </div>
      <div className="middle absolute top-1/4 flex left-[40%]">
        <div className="flex items-center justify-center w-[11vw] h-[11vw] rounded-full bg-zinc-100">
          <div className="relative items-center justify-center rounded-full w-2/3 h-2/3 bg-zinc-900">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 line"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[11vw] h-[11vw] rounded-full bg-zinc-100">
          <div className="relative items-center justify-center rounded-full w-2/3 h-2/3 bg-zinc-900">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 line"
            >
              <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="end flex gap-5 justify-center items-center mt-5">
        <button className="px-5 py-2 rounded-full border-[1px] leading-none bg-black text-white ">START THE PROJECT</button>
        <button className="px-5 py-2 rounded-full border-[1px] leading-none border-black">HELLO@OCHI.DESIGN</button>
      </div>
    </div>
  );
};

export default Eyes2;
