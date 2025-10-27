import { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../index.css";

import logo1 from "../assets/BiznanaImages/partners/1.png";
import logo2 from "../assets/BiznanaImages/partners/2.png";
import logo3 from "../assets/BiznanaImages/partners/3.png";
import logo4 from "../assets/BiznanaImages/partners/4.png";
import logo5 from "../assets/BiznanaImages/partners/5.png";
import logo6 from "../assets/BiznanaImages/partners/6.png";
import logo7 from "../assets/BiznanaImages/partners/7.png";
import logo8 from "../assets/BiznanaImages/partners/8.png";
import logo9 from "../assets/BiznanaImages/partners/9.png";
import logo10 from "../assets/BiznanaImages/partners/10.png";
import logo11 from "../assets/BiznanaImages/partners/11.png";
import logo12 from "../assets/BiznanaImages/partners/12.png";
import logo13 from "../assets/BiznanaImages/partners/13.png";
import logo14 from "../assets/BiznanaImages/partners/14.png";
import logo15 from "../assets/BiznanaImages/partners/15.png";
import logo16 from "../assets/BiznanaImages/partners/16.png";
import logo17 from "../assets/BiznanaImages/partners/17.png";
import logo18 from "../assets/BiznanaImages/partners/18.png";
import logo19 from "../assets/BiznanaImages/partners/19.png";
import logo20 from "../assets/BiznanaImages/partners/20.png";
import logo21 from "../assets/BiznanaImages/partners/21.png";
import logo22 from "../assets/BiznanaImages/partners/22.png";
import logo23 from "../assets/BiznanaImages/partners/23.png";
import logo24 from "../assets/BiznanaImages/partners/24.png";
import logo25 from "../assets/BiznanaImages/partners/25.png";
import logo26 from "../assets/BiznanaImages/partners/26.png";


const partners = [
  { logo: logo1},
  { logo: logo2},
  { logo: logo3},
  { logo: logo4},
   { logo: logo5, link: " https://pump.fun/coin/7P5mdT2UpGJ7Eiz9Vch3HT51MamMnvLko2ByEe1mNccw" },
  { logo: logo6, link: "https://poocoin.app/tokens/0x3835cc32ebf60748ac052948b67b7dd526f839cd" },
  { logo: logo7 },
  { logo: logo8},
  { logo: logo9},
  { logo: logo10, link: "https://honeypot.is/?address=0x3835cC32ebf60748aC052948B67B7dd526F839Cd" },
  { logo: logo11, link: "https://gemfinder.cc/gem/27966" },
  { logo: logo12 },
  { logo: logo13, link: "https://www.geckoterminal.com/bsc/pools/0x24009642b793e6537c9dc443195a0697008c4228" },
  { logo: logo14, link: "https://www.dextools.io/app/en/bnb/pair-explorer/0x24009642b793e6537c9dc443195a0697008c4228?t=1761383848997" },
  { logo: logo15, link: "https://dex.guru/token/bsc/0x3835cc32ebf60748ac052948b67b7dd526f839cd" },
  { logo: logo16, link: "https://dexscreener.com/bsc/0x24009642b793e6537c9dc443195a0697008c4228" },
  { logo: logo17, link: "https://mycoinvote.com/submitCoin" },
  { logo: logo18, link: "https://cointoplist.net/" },
  { logo: logo19, link: "https://www.coinscope.co/coin/bizna" },
  { logo: logo20, link: "https://coingem.com/binance/0x3835cC32ebf60748aC052948B67B7dd526F839Cd" },
  { logo: logo21 },
  { logo: logo22 },
  { logo: logo23, link: "https://blockspot.io/" },
  { logo: logo24 },
  { logo: logo25},
  { logo: logo26, link: "https://www.coingabbar.com/en/crypto-airdrops/biznana-big-crypto-airdrops-memecoin-project" },
];

const S3Partners = memo(function S3Partners() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      id="partners"
      className="w-full py-8 lg:py-16 px-5 md:px-8 lg:px-12 text-center"
    >
      <h1
        data-aos="fade-up"
        className="text-xl font-comic sm:text-2xl md:text-3xl lg:text-5xl uppercase font-bold mb-12 lg:mb-20"
      >
        Strategic Partners
      </h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={25}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform transform hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={`partner-${index}`}
                className="w-56 h-16 object-contain border border-gray-200 rounded-lg shadow-md p-2 bg-black"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default S3Partners;
