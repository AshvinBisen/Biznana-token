import React, { useState, useEffect, memo } from "react";
import AOS from "aos"; // Import AOS
import twitter from "../assets/BiznanaImages/jointwit.png";
import telegram from "../assets/BiznanaImages/jointele.png";
import "aos/dist/aos.css"; // Import AOS styles
import background from "../assets/BiznanaImages/joinbgimg.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
const Presale = memo(function Presale() {
  return (
    <>
      <div className="flex flex-col items-center " id="">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal w-full mb-6">
          <h1 className="text-center text-lg font-comic sm:text-2xl md:text-xl lg:text-4xl uppercase font-bold  ">
            JOIN THE $BIZNA PACK
          </h1>
        </div>

        <div className="relative w-full flex flex-col py-20 justify-center items-center text-center">
          <img src={background} className="absolute w-full h-full  " alt="" />
          <div className="relative w-full p-5 gap-5 md:gap-8 md:p-10 max-w-5xl flex flex-col items-center justify-center ">
            <p className="place-items-center text-center text-xl md:text-2xl">
              Presale buyers of $BIZNA can stake their tokens early in our smart
              contract to unlock exclusive rewards before launch! Laboriosam,
              repudiandae?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
              {/* <button className="shadow-md shadow-[#4d4d4e]  text-lg md:text-xl uppercase px-5 py-2 md:px-10 md:py-6 font-comic rounded-md border-2 border-[#000000] bg-[#E63946] text-white transition-all duration-300 hover:bg-white hover:text-black" 
              data-aos="zoom-in" data-aos-delay="600" ><a href="/presale" className="">BUY BIZNA</a></button> */}

              <div className="">
                <a href="https://web.telegram.org/k/#@biznanaofficialchannel" className="flex items-center gap-3 ">
                  <img src={telegram} className="" alt="" />
                  <p className="uppercase text-xl md:text-2xl">JOIN Telegram</p>
                </a>
              </div>

              <div className="">
                <a
                  href="https://x.com/biznana_meme"
                  className="flex items-center gap-3 "
                >
                  <img src={twitter} className="" alt="" />
                  <p className="uppercase text-xl md:text-2xl">follow us on</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Presale;
