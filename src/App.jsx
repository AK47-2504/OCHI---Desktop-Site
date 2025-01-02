import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Landing from "./Components/Landing";
import Marquee from "./Components/Marquee";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import Cards from "./Components/Cards";
import Eyes2 from "./Components/Eyes2";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen ">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Eyes2 />
      <Footer />
    </div>
  );
};

export default App;
