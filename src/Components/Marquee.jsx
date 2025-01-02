import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43] text-white">
      <div className="flex overflow-hidden border-t-2 border-b-2 text border-zinc-500 whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[18vw] leading-none tracking-[-.9vw] font-['TradeGothic_LT_CondEighteen']  uppercase font-semibold pr-10"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[18vw] leading-none tracking-[-.9vw] font-['TradeGothic_LT_CondEighteen']  uppercase font-semibold pr-10"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
