import { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../index.css";
// import "../Homepagesection/Usecase.css";

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

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15,
  logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24, logo25,
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

            <h1 data-aos="fade-up"  className="text-xl font-comic sm:text-2xl md:text-3xl lg:text-5xl uppercase font-bold mb-12 lg:mb-20 " > 
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
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`partner-${index}`}
              className="w-56 h-16 object-contain border border-gray-200 rounded-lg shadow-md p-2 bg-black"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default S3Partners;
