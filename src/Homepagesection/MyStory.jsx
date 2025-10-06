import { useEffect, memo } from "react";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../assets/BiznanaImages/ab_img.jpg"


const MyStory = memo(() => {
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
        id="story"
        className="relative w-full z-2 flex flex-col items-center gap-5 py-10 mt-6  sm:gap-10 md:gap-20  "
      >
        {/* Heading Section */}
        <div
          className="flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 "
          id="story"
        >
          <div className="w-full ">
          <h1 data-aos="fade-up"  className="text-lg font-comic sm:text-2xl md:text-xl lg:text-7xl uppercase font-bold  " > 
            Biznana Story
            </h1>
          </div>
        </div>

        {/* Main Content Section */}
        <div id="abt4" className="w-full flex ">
            <div
                id="listing"
                className="relative flex justify-center items-center w-full px-3 md:px-5 py-3"
                >
                {/* Single Image Section */}
                <div
                    data-aos="fade-zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="w-[90%] md:w-[60%] flex justify-center"
                >
                    <img
                    src={aboutImage} 
                    alt="About"
                    className="rounded-xl object-cover border-2 border-black w-full"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
});

MyStory.displayName = "MyStory";
export default MyStory;
