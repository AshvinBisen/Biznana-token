import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../MainComponent/Contact.jsx";
import "../index.css";
// import logo from "../assets/logo/silvernovalogo3.png";
import logo from "../assets/BiznanaImages/new Images/logo.png";
import gunimage from "../assets/BiznanaImages/new Images/f2.png";
// import footericon7 from "../assets/Image/footericon5.png";
import uni from "../assets/BiznanaImages/unicorn-icon.png";
import twit from "../assets/BiznanaImages/twitter-icon.png";
import tele from "../assets/BiznanaImages/telegram-icon.png";
import red from "../assets/BiznanaImages/reddit-icon.png";
import insta from "../assets/BiznanaImages/insta-icon.png";

import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setIsContactOpen(!isContactOpen);
  };

  const scrollToTop = () => {
    const duration = 1000; // Duration in milliseconds (1 second)
    const start = window.scrollY; // Starting scroll position
    const startTime = performance.now(); // Time when the scroll starts

    // Perform the scroll gradually
    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress between 0 and 1

      // Scroll to the top with smooth easing
      window.scrollTo(0, start - start * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Keep animating until 100% progress
      }
    };

    requestAnimationFrame(animateScroll); // Start the smooth scroll animation
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* <div className="w-[100%] h-[3px] bg-[#FF9D00] opacity-5  "></div> */}
      <footer className="mt-5 md:mt-10 border-2 rounded-xl border-[#ffffff] m-5 bg-black text-[#FFD700] z-10 ">
        <div className="mx-auto w-full max-w-screen-xl py-5 z-10 gap-3 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center justify-center gap-10 z-10">
            <div className="flex flex-col items-center justify-center text-center gap-4 max-w-96 sm:mb-0">
              {/* paragraph and */}
              <Link className="flex " smooth to="/">
                <img src={logo} className=" h-24 transform -scale-x-100" alt="BIZNANA Logo" />
              </Link>
              <div className="">
                <p className="text-lg">
                  {" "}
                  Business banana in a suit? That’s our mascot. That’s our vibe.
                </p>
              </div>
            </div>

            <div className="flex flex-col  items-center gap-6  ">
              <div className="flex gap-6">
                <ul className=" items-center  flex flex-col">
                  <li className="tablet:text-center text-lg">
                    <a href="/">Home</a>
                  </li>
                </ul>

                <ul className="items-center  flex flex-col">
                  <li className="tablet:text-center text-lg">
                    <a href="#story">Biznana Story</a>
                  </li>
                </ul>

                <ul className="items-center  flex flex-col ">
                  <li className="tablet:text-center text-lg">
                    <a href="#tokenomics">Tokenomics</a>
                  </li>

                  {/* <li className="tablet:text-center">
                    <a href="#howtobuy">how to buy</a>
                  </li> */}
                </ul>
              </div>

              <ul className=" items-center flex gap-4">
                {/* <li className="tablet:text-center">
                    <a href="/"> <img src={uni} alt="" className="h-8" /> </a>
                  </li> */}

                {/* <li className="tablet:text-center">
                  <a href="https://www.reddit.com/user/Biznana_Meme">
                    {" "}
                    <img src={red} alt="" className="h-12" />{" "}
                  </a>
                </li> */}
                <li className="tablet:text-center">
                  <a href="https://www.instagram.com/biznana_meme">
                    {" "}
                    <img src={insta} alt="" className="h-10" />{" "}
                  </a>
                </li>
                <li className="tablet:text-center">
                  <a href="https://x.com/biznana_meme" >
                    {" "}
                    <img src={twit} alt="" className="h-8" />{" "}
                  </a>
                </li>
                <li className="tablet:text-center">
                  <a href="https://web.telegram.org/k/#@biznanaofficialchannel">
                    {" "}
                    <img src={tele} alt="" className="h-8" />{" "}
                  </a>
                </li>
              </ul>
            </div>

            {/* image */}
            <div className="">
              <img src={gunimage} alt="" className="h-72 w-auto" />
            </div>

            {/* </div> */}
          </div>
        </div>
      </footer>

      {/* {isContactOpen && (
        <div className="fixed w-full h-full overflow-x-hidden  inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
          <div className=" p-4 relative rounded-lg sm:w-[99%] justify-center h-full flex flex-row  ">
            <Contact />
            <button
              onClick={toggleContactPopup}
              className="mt-4 h-10 px-4 py-2 absolute top-5 right-0 w-[10%] sm:w-[5%] bg-red-500 text-white rounded flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Footer;
