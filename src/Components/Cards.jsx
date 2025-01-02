const Cards = () => {

  const navbar = document.getElementById('#navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="w-full h-screen  px-[5vw] flex items-center gap-5">
      <div className="cardcontiner  h-[50vh] w-1/2 ">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-7 bottom-5 px-3 py-1 rounded-full border-[1px] text-white ">
            &copy;2023-2024
          </button>
        </div>
      </div>
      <div className="cardcontiner gap-5 flex h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-gray-900">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-7 bottom-5 px-3 py-1 rounded-full border-[1px] text-white ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-gray-900">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-7 bottom-5 px-3 py-1 rounded-full border-[1px] text-white ">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
