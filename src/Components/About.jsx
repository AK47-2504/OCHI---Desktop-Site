const About = () => {
  return (
    <div className="-mt-20 w-full py-18 bg-[#CDEA68] text-black">
      <h1 className="w-[90%] font-['Neue Montreal'] text-[4vw] p-[5vw] leading-[4.5vw] tracking-tighter">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to <span className="underline">raise funds </span>,
        <span className="underline">sell products </span>,
        <span className="underline"> explain </span>
        <span className="underline"> complex ideas, </span>
        <span> and </span>
        <span className="underline">hire great people</span>.
      </h1>
      <div className="w-full border-t-[2px] border-[rgb(169,184,118)] mt-8">
        <div className="flex items-center justify-between w-full py-10 paragragh font-['Neue Montreal']">
          <div className="w-[40%] px-[5vw]  ">
            <h1 className="text-[2.5vw] underline">What you can expect :</h1>
          </div>
          <div className=" middle w-[25%]">
            <p className="mb-10 text-[1.2vw] text-left">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="text-[1.2vw] text-left">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="w-[10%] mr-[6vw] p-[5vw] relative">
            <div className="text-[1.1vw] flex flex-col underline gap-1 absolute bottom-[-2.5vw] left-[-2.5vw]">
              <h3>Instagram</h3>
              <h3>Behance</h3>
              <h3>Facebook</h3>
              <h3>Linkedin</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5  border-t-[2px] border-[rgb(169,184,118)] pt-20 mt-8">
        <div className="w-1/2  px-[5vw]  ">
          <h1 className="text-5xl tracking-tighter">Our approach:</h1>
          <button className="flex items-center gap-10 px-8 py-6 mt-6 text-white uppercase rounded-full tra6king-tighter bg-zinc-900">
            Read More
            <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
        <img className="rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
