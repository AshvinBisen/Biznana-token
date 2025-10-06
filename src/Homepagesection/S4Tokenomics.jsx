import { memo } from "react";
import "../index.css";

import tokenvideo from "../assets/BiznanaImages/new Images/token.gif";
// import Button from "../MainComponent/Button";
import Token1 from "../assets/BiznanaImages/biz-tokenomics.png";
// import token from "../assets/BiznanaImages/biz-tokenomics.png"
const S4Tokenomics = memo(function S4Tokenomics() {
  return (
    <>
      <div
        className=" token flex flex-col items-center  relative justify-center text-center pt-0 md:pt-10"
        
      >
        <div className="w-full relative flex flex-col  ">
          <div
            className="flex flex-col  items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-5 md:py-10 lg:py-16"
            id="tokenomics"
          >
            <div className="  ">
              <h1 data-aos="fade-up"  className="text-lg font-comic sm:text-2xl md:text-xl lg:text-7xl uppercase font-bold  " > 
              Tokenomics
              </h1>
              <p className="text-lg mt-8 md:text-xl lg:text-3xl uppercase"> $BIZNA Tokenomics – Fun Meets Function</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center align-middle px-5 md:px-2

            ">
            <img
              className="w-[45%] md:w-[20%] lg:w-[25%] h-auto object-cover"
              src={tokenvideo} 
              alt="Token GIF"
            />

            {/* <video
              className="w-[40%] md:w-[20%] lg:w-[25%] h-[100%] object-cover"
              src={tokenvideo}
              autoPlay
              loop
              muted
              playsInline > 
            </video> */}

            
            <img
              src={Token1}
              loading="lazy"
              alt="Tokenomics"
              className="w-full md:max-w-[35rem] lg:max-w-[50rem]   transform transition-transform duration-300 hover:scale-110"
            />
          </div>

         


        </div>
      </div>
    </>
  );
});

export default S4Tokenomics;
