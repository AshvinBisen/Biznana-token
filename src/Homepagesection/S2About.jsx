import { useEffect, memo } from "react"; // Import memo
// import about from "../assets/aboutimg/about.png"; // Imported image
// import about1 from "../assets/aboutimg/schcoin.png"; // Imported image
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutvideo from "../assets/BiznanaImages/about-video.mp4"
import rocket from "../assets/BiznanaImages/rocket-about.png"


const S2About = memo(() => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: false,
    });

  }, []);

  return (
    // <div className=" pt-60 sm:pt-60 md:pt-0 ">
    <div className=" ">
      <div
        id="about"
        className="relative w-full z-5 flex flex-col items-center gap-5 py-10 mt-6  sm:gap-10 md:gap-20  "
      >
        {/* Heading Section */}
        <div
          className="flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 "
          id="about"
        >
          <div className="w-full ">
          <h1 data-aos="fade-up"  className="text-lg font-comic sm:text-2xl md:text-xl lg:text-7xl uppercase font-bold  " > 
            ABOUT
            </h1>
          </div>
        </div>

        {/* Main Content Section */}
        <div id="abt4" className="w-full flex ">
          <div
            id="listing"
            className="relative  flex flex-col lg:flex-row gap-5 lg:gap-10 items-center"
          >
            {/* Image Section */}
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              id="filler-left"
              className="px-3 md:px-10 w-full md:w-[60%] flex justify-center md:justify-start"
            >
              <video
        className="rounded-xl clip-video object-cover border-2 border-black " itemType="mp4"
        src={aboutvideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <img src={rocket} className="hidden md:block absolute lg:top-10 md:left-[350px] lg:left-[280px] xl:left-[350px] 2xl:left-[420px] hover:scale-125 duration-300" alt="" />
            </div>

            {/* Text Content Section */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              id="filler-right"
              className="w-full md:w-[75%] flex flex-col justify-center gap-5 md:gap-10 text-center md:text-left"
            >
              <div className="flex flex-col gap-5 md:gap-8 md:w-[90%]">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-comic uppercase">$BIZNA: Where Serious Meets Silly</h2>
              <p
                data-aos="fade-left"
                data-aos-delay="1500"
                data-aos-duration="1000"
                className="text-md md:text-xl lg:text-2xl mx-auto md:mx-0" >
                Born at the intersection of internet culture and entrepreneurial ambition,  $BIZNA is more than just a meme coin—it’s a movement. Designed to empower creators, hustlers, and dreamers,  $BIZNA helps you break through the noise and stand out in a crowded world.
              </p>
              </div>

              <div className="px-2 md:px-0">
            <div className="mt-5 text-md lg:text-2xl text-left bg-white font-comic uppercase md:p-5 p-2 rounded border border-black shadow-md shadow-[#4e4d4d]">
            $BIZNA - The Meme That Means Business
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

S2About.displayName = "S2About";
export default S2About;
