import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import telegram from "../assets/BiznanaImages/telegram.png";
// import twitter from "../assets/BiznanaImages/twitter.png";
// import instagram from "../assets/BiznanaImages/instagram.png";
// import reddit from "../assets/BiznanaImages/reddit.png";

import logo from "../assets/BiznanaImages/new Images/logo.png";
// import Popup from './Popupbuydog';

const Navbar = () => {
  const navigate = useNavigate();
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Toggle popup visibility
  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeMenu = () => {
    setIsNavVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`w-full overflow-x-hidden z-0 top-0 border-b border-none `}>
      <div className="relative max-w-full flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">
        {/* Logo */}
        <Link smooth to="/" onClick={closeMenu}>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            loading="lazy"
            src={logo}
            className="w-[4rem] sm:w-[6rem] h-auto transform -scale-x-100"
            alt="Biznana logo"
          />
            {/* <img
              loading="lazy"
              src={logo}
              className="w-[4rem] sm:w-[6rem] h-auto"
              alt="Biznana logo"
            /> */}
          </div>
        </Link>

        {/* Right Section */}
        <div className="flex md:order-2 sm:gap-5 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex gap-3 sm:gap-1   items-center">
            {/* <Link smooth to="/presale" onClick={closeMenu}> */}
              <div className="flex md:gap-8 ">
                <a
                  className="relative sm:px-20 sm:py-5  px-12 py-1 font-nunito font-bold shadow-md  shadow-[#ffffff8e]   border border-white  h-9 sm:h-full"
                  href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x3835cC32ebf60748aC052948B67B7dd526F839Cd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
                 {/* <a href="https://www.reddit.com/user/Biznana_Meme" target="_blank">
                  <img src={reddit} className="h-10 w-10" alt="twi" />
                </a>
                <a href="https://web.telegram.org/k/#@biznanaofficialchannel" target="_blank">
                  <img src={telegram} className="h-10 w-10" alt="tel" />
                </a>
                <a href="https://x.com/biznana_meme" target="_blank">
                  <img src={twitter} className="h-10 w-10" alt="twi" />
                </a>
                <a href="https://www.instagram.com/biznana_meme/" target="_blank">
                  <img src={instagram} className="h-10 w-10" alt="twi" />
                </a> */}
              </div>
            {/* </Link> */}
          </div>

          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-1 w-9 h-9  justify-center text-sm text-red-100 bg-red-700 border border-red-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-red-400 hover:bg-gray-900"
            aria-controls="navbar-sticky1"
            aria-expanded={isNavVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Items */}
        <div
          id="navbar-sticky1"
          className={`items-center justify-center    w-[99%] md:flex md:w-fit md:order-1 ${
            isNavVisible ? "block" : "hidden"
          }`}
        >
          <ul className="navbar flex flex-col p-4 md:py-1.5 mt-4 border border-[#FFED49] md:rounded-[50px] rounded-lg md:space-x-[3vmax] md:flex-row md:mt-0 md:border-0   font-semibold bg-[#000000cb] text-white md:text-black md:bg-[#ffed4900]   ">
            <li className="md:border-none border-b-[2px] border-[#fff]">
              <Link smooth to="/#home" onClick={closeMenu}>
                <div
                  className="uppercase font-semibold block py-2 px-3  text-lg     hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#E3E5E6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
  font-outfit"
                >
                  Home
                </div>
              </Link>
            </li>
            <li className="md:border-none border-b-[2px] border-[#E3E5E6]">
              <Link smooth to="/#story" onClick={closeMenu}>
                <div
                  className="uppercase font-semibold block py-2 px-3   text-lg  hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#E3E5E6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit"
                >
                  Biznana Story
                </div>
              </Link>
            </li>

            <li className="md:border-none border-b-[2px] border-[#E3E5E6]">
              <Link smooth to="/#tokenomics" onClick={closeMenu}>
                <div
                  className="uppercase font-semibold block py-2 px-3   text-lg  hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#E3E5E6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit"
                >
                  Tokenomics
                </div>
              </Link>
            </li>

            {/* <li className="md:border-none border-b-[2px] border-[#E3E5E6]">
              <Link smooth to="/#usecase" onClick={closeMenu}>
                <div
                  className="uppercase font-semibold block py-2 px-3   text-lg  hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#E3E5E6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit"
                >
                  UseCase
                </div>
              </Link>
            </li> */}

            <li className="md:border-none border-b-[2px] border-[#E3E5E6]">
              <Link smooth to="/#howtobuy" onClick={closeMenu}>
                <div
                  className="uppercase font-semibold block py-2 px-3      hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#E3E5E6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit"
                >
                  How to buy
                </div>
              </Link>
            </li>

            {/* <li className="md:border-none border-b-[2px] border-[#E3E5E6] ">
              <Link smooth to="/#presale" onClick={closeMenu}>
                <div
                  // onClick={togglePopup}
                  className="font-semibold block py-2 px-3     hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#E3E5E6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit cursor-pointer"
                >
                  Presale
                </div>
              </Link>
            </li> */}

            <li className="md:border-none  md:hidden border-b-[2px] border-[#E3E5E6]">
              <a
                target="blank"
                href="/public/biznana.pdfhttps://biznana.com/Biznana-Whitepaper.pdf"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <div
                  className=" block py-2 px-3   font-semibold  hover:bg-gray-700 md:hover:bg-transparent md:p-0  hover:border-b-2 hover:border-[#E3E5E6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 
 font-outfit"
                >
                  Whitepaper
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Popup */}
      {/* {isPopupOpen && <Popup onClose={togglePopup} />} */}
    </nav>
  );
};

export default Navbar;
