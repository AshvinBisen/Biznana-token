import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import bgbottom from "../assets/BiznanaImages/hero-bottom-bg.png";
import teavideo from "../assets/BiznanaImages/new Images/about.gif";
import homeimg from "../assets/BiznanaImages/new Images/hero.png";
import homebgimg from "../assets/BiznanaImages/biz_home_bg.png";
// import telegram from "../assets/BiznanaImages/telegram.png";

const S1Hero = memo(function S1Hero() {


  const imageUrl = "/down_img.jpg";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "biznana-token.jpg"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Wrap in memo
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="relative " id="home">
        {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src={homevideo}
        autoPlay
        loop
        muted
        playsInline
        ></video> */}

        {/* Content Section */}
        <div className="flex items-center justify-between relative ">
          {/* below css is for upper div */}
          {/* flex items-center justify-between */}

          <div className="relative">
            {/* <img
              src={telegram}
              alt=""
              className="absolute bottom-0 left-0 h-36 w-auto"
            /> */}
            <img
              src={homebgimg}
              className=" lg:block -z-10 hidden -top-[100px]  w-full absolute "
              alt=""
            />
            <div className="px-5 sm:px-10 gap-5 md:gap-0 md:flex-row flex flex-col-reverse items-center md:items-start md:justify-between justify-center text-center md:text-left">
              <div className="relative w-full md:w-1/2 text-center md:text-left justify-center md:px-10 flex flex-col gap-5 md:gap-5 lg:gap-8">
                <h1
                  data-aos="fade-up"
                  className="lg:mt-20 bg-clip-text text-transparent [text-stroke:0.5_#000000] [-webkit-text-stroke:2px_#000000] text-white font-comic shadow-inner-custom text-5xl md:text-[70px] lg:text-[100px] xl:text-[155px] font-bold tracking-wide "
                >
                  BIZNANA
                </h1>
                <h2 className="text-lg font-comic sm:text-xl md:text-2xl lg:text-4xl uppercase font-bold  ">
                  Welcome to the Future of Meme Utility - Meet $BIZNA{" "}
                </h2>
                <div className="relative flex flex-col lg:flex-row gap-2">
  <button
    className="shadow-md shadow-[#4e4d4d] uppercase px-8 py-3 font-comic rounded-md border-2 border-[#000000] bg-white text-black transition-all duration-300 hover:bg-[#E63946] hover:text-white"
    data-aos="zoom-in"
    data-aos-delay="600"
  >
    <a
      href="https://biznana.com/Biznana-Whitepaper.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm lg:text-lg"
    >
      Whitepaper
    </a>
  </button>

  <button
    className="shadow-md shadow-[#4e4d4d] uppercase px-8 py-3 text-sm lg:text-lg font-comic rounded-md border-2 border-[#000000] bg-white text-black transition-all duration-300 hover:bg-[#E63946] hover:text-white"
    data-aos="zoom-in"
    data-aos-delay="600"
    onClick={handleDownload}
  >
    Download $BIZNA
  </button>
</div>

                {/* <div className="relative flex gap-2">
                  <button
                    className="shadow-md shadow-[#4e4d4d] uppercase px-10 py-4 font-comic rounded-md border-2 border-[#000000] bg-white text-black transition-all duration-300 hover:bg-[#E63946] hover:text-white"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    <a
                      href="https://biznana.com/Biznana-Whitepaper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg"
                    >
                      Whitepaper
                    </a>
                  </button>

                                
                  <button
                    className="shadow-md shadow-[#4e4d4d] uppercase px-10  py-4 text-lg font-comic rounded-md border-2 border-[#000000] bg-white text-black transition-all duration-300 hover:bg-[#E63946] hover:text-white"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    onClick={handleDownload}
                  >
                    Download Image
                  </button>
                 
                </div> */}
              </div>
              <div className="md:w-1/2 pt-0 md:pt-0  ">
                <div className="flex flex-col sm:flex-row  items-center gap-4 md:items-start md:gap-1 md:flex-row justify-center ">
                  <img src={homeimg} className=" w-[90%] md:w-[70%]" alt="" />
                  {/* <button className="shadow-md md:mt-16 shadow-[#4e4d4d] md:-mx-20 uppercase px-5 py-2 md:px-10 md:py-4 font-comic rounded-md border-2 border-[#000000] bg-[#E63946] text-white transition-all duration-300 hover:bg-white hover:text-black" 
              data-aos="zoom-in" data-aos-delay="600" ><a href="/presale" className="">BUY BIZNA</a></button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* other section */}
        <div className="border-t-2 border-black rounded-3xl bg-[#FED431]  py-5 md:py-10 lg:py-20 ">
          <div className="relative flex flex-col gap-10">
            {/* white box */}
            <div className=" lg:max-w-[50%] px-5 md:px-10">
              <div className="mt-5 text-md lg:text-[24px] text-center bg-white font-comic uppercase md:p-5 p-2 rounded border border-black shadow-md shadow-[#4e4d4d]">
                $BIZNA - The Meme That Means Business
              </div>
            </div>

            {/* left section and video part */}
            <div className="z-10 flex flex-col md:flex-row relative items-start justify-between">
              <div className="flex flex-col gap-5 lg:gap-16 z-10 font-comic">
                <div className="flex flex-col gap-5 w-full lg:w-[50%] px-5 lg:px-20">
                  <h2 className="text-xl font-comic lg:text-4xl uppercase">
                    Laugh. Trade. Grow. Repeat.
                  </h2>
                  <p className="text-lg lg:text-2xl ">
                    Whether you're brewing Tea on the corner or building the
                    next big tech thing—if you've got the grind, $BIZNA has your
                    back. Big or small, we’re here to help you go viral.
                  </p>
                </div>

                <div className="relative">
                  <img
                    src={bgbottom}
                    alt=""
                    className="hidden lg:block lg:absolute w-full"
                  />
                  <p className="text-center sm:text-left text-lg md:text-2xl lg:text-4xl lg:w-[55%] px-5 md:px-5 lg:px-16 mt-0 md:mt-5 lg:mt-24 xl:mt-44 2xl:mt-40 relative z-10">
                    Every dream counts — from Tea stalls to crypto calls.
                  </p>
                </div>
              </div>

              {/* video part */}
              {/* <div className="top-0 lg:absolute md:place-items-end px-5 md:px-1 lg:w-[98%]">
                <img
                  src={teavideo}
                  className=" lg:max-w-md h-auto bg-black rounded-3xl"
                  alt=""
                />
              </div> */}
            </div>
            <div className="mt-5 lg:absolute md:place-items-end px-5 md:px-1 lg:w-[98%]">
              <img
                src={teavideo}
                className=" lg:max-w-lg h-auto bg-black rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default S1Hero;
