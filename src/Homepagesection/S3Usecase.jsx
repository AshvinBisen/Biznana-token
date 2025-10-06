import { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import "../Homepagesection/Usecase.css";
import bgimg2 from "../assets/BiznanaImages/Usecase/BIZNANA WEBSITE BANNERS1.png";
import bgimg1 from "../assets/BiznanaImages/Usecase/BIZNANA WEBSITE BANNERS2.png";
import bgimg3 from "../assets/BiznanaImages/Usecase/BIZNANA WEBSITE BANNERS3.png";


const S3Usecase = memo(function S3Usecase() {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function for the animation
      once: false, // Animation runs only once
    });
  }, []);
  return (
    <>
      <div
        className="flex flex-col   items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-5 md:py-0 lg:mt-0 mt-10"
        id="usecase"
      >
        <div className="w-full ">
          {/* <h1 data-aos="fade-up"  className="text-lg font-comic sm:text-2xl md:text-xl lg:text-4xl uppercase font-bold  " > 
            USE CASES
            </h1> */}
        </div>
      </div>

      {/* <div className="py-5 md:py-10 lg:py-20 px-5 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-10"> */}
      {/* <div className="border border-black  lg:px-20 py-20 md:py-20 bg-cover   text-center place-items-center usecase-image md:rotate-12 h-[220px]   lg:h-[320px] lg:w-[420px] transform transition-transform duration-300 hover:scale-105 ">
          <p className="text-xl lg:text-2xl px-3 md:px-0  ">
            Promote your business via meme campaigns
          </p>
        </div> */}
      {/* <img src={bgimg1} alt="" className="absolut border-2 border-white md:rotate-12" />
        <img src={bgimg2} alt="" className="absolut border-2 border-white" />
        <img src={bgimg3} alt="" className="absolut border-2 border-white md:-rotate-12" /> */}
      {/* <div className="border border-black  lg:px-20 py-20 md:py-20 bg-cover   text-center place-items-center usecase-image md:-rotate-12 h-[220px]   lg:h-[320px] lg:w-[420px]  transform transition-transform duration-300 hover:scale-105 ">
          <p className="text-xl lg:text-2xl px-3 md:px-0  ">
            Earn from community-driven trends and challenges
          </p>
        </div> */}
      {/* </div> */}

      <div className="py-5 md:py-10 lg:py-20 px-5 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-10 relative mx-auto">
        {/* Image 1 */}
        <img
          src={bgimg1}
          alt=""
          className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[350px] border-2 border-black rounded-lg object-cover transform md:rotate-12 transition-transform duration-300 hover:scale-105"
        />

        {/* Image 2 */}
        <img
          src={bgimg2}
          alt=""
          className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[350px] border-2 border-black rounded-lg object-cover transform transition-transform duration-300 hover:scale-105"
        />

        {/* Image 3 */}
        <img
          src={bgimg3}
          alt=""
          className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[350px] border-2 border-black rounded-lg object-cover transform md:-rotate-12 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </>
  );
});

export default S3Usecase;
