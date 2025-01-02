import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-screen pt-1 ">
      <div className="px-20 mt-40 text-structure ">
        {["We create", "Eye opening", "presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="flex w-fit">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{width:"9vw"}}
                    transition={{ ease: [0.76, 0, 0.24,1], duration: 1}}
                    dur
                    className="mr-[.6vw] w-[9vw] relative top-[.9vw] object-cover"
                  >
                    <img
                      className="rounded-md"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="h-full uppercase text-[9vw] tracking-[-.6vw] leading-[7vw] font-['TradeGothic_LT_CondEighteen'] font-bold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-28 border-t-[1px] border-zinc-700 flex justify-between items-center py-5 px-20">
        {[
          "For public and private Companies",
          "From the first pitch to the IPO",
        ].map((item, index) => (
          <p key={index} className="leading-none tracking-tight text-md">
            {item}
          </p>
        ))}
        <div className="flex items-center gap-3 start">
          <div className="px-5 py-2 border-[1px]  capitalize text-md border-zinc-500 rounded-full">
            Start the Project
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[1px] border-zinc-500 rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
