import { motion, useAnimation } from "framer-motion";

const Features = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-20">
        <h1 className="text-7xl font-['Neue Montreal'] tracking-tighter">
          Featured Projects
        </h1>
      </div>
      <div className="px-20 ">
        <div className="cards w-full flex gap-5 mt-10">
          <motion.div
            key={0}
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold z-[9] text-8xl leading-none tracking-tighter font-['TradeGothic_LT_CondEighteen']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="name flex items-center gap-2 mb-3 px-3">
              <div className="circle w-[.7vw] h-[.7vw] bg-black rounded-full "></div>
              <h4 className="tracking-tighter">FYDE</h4>
            </div>
            <div className="card w-full rounded-xl h-full overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            key={1}
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <div className="name flex items-center gap-2 mb-3 px-3">
              <div className="circle w-[.7vw] h-[.7vw] bg-black rounded-full "></div>
              <h4 className="tracking-tighter">VISE</h4>
            </div>
            <div className="card w-full rounded-xl h-full overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-[102%] translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold z-[999] text-8xl leading-none tracking-tighter font-['TradeGothic_LT_CondEighteen'] ">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex gap-5 mt-20">
          <motion.div
            key={0}
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold z-[9] text-8xl leading-none tracking-tighter font-['TradeGothic_LT_CondEighteen']">
              {"SPACESHIP".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ 
                    ease: [0.22, 1, 0.36, 1], 
                    duration: 1 
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="name flex items-center gap-2 mb-3 px-3">
              <div className="circle w-[.7vw] h-[.7vw] bg-black rounded-full "></div>
              <h4 className="tracking-tighter">CARDBOARD SPACESHIP</h4>
            </div>
            <div className="card w-full rounded-xl h-full overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            key={1}
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <div className="name flex items-center gap-2 mb-3 px-3">
              <div className="circle w-[.7vw] h-[.7vw] bg-black rounded-full "></div>
              <h4 className="tracking-tighter">AH2 & MATTHORN</h4>
            </div>
            <div className="card w-full rounded-xl h-full overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-[102%] translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold z-[999] text-8xl leading-none tracking-tighter font-['TradeGothic_LT_CondEighteen'] ">
                {"MATTHORN".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex gap-5 mt-20">
          <motion.div
            key={0}
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold z-[9] text-8xl leading-none tracking-tighter font-['TradeGothic_LT_CondEighteen']">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ 
                    ease: [0.22, 1, 0.36, 1], 
                    duration: 1 
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="name flex items-center gap-2 mb-3 px-3">
              <div className="circle w-[.7vw] h-[.7vw] bg-black rounded-full "></div>
              <h4 className="tracking-tighter">TRAWA</h4>
            </div>
            <div className="card w-full rounded-xl h-full overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            key={1}
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <div className="name flex items-center gap-2 mb-3 px-3">
              <div className="circle w-[.7vw] h-[.7vw] bg-black rounded-full "></div>
              <h4 className="tracking-tighter">PREMIUM BLEND</h4>
            </div>
            <div className="card w-full rounded-xl h-full overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-[102%] translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold z-[999] text-8xl leading-none tracking-tighter font-['TradeGothic_LT_CondEighteen'] ">
                {"PREMIUM".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
