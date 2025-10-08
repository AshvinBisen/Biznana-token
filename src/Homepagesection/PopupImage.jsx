import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import popupImg from "../assets/BiznanaImages/popup.png"; // ✅ your image path

const PopupImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] animate-fadeIn"
      onClick={closePopup}
    >
      <div
        className="relative rounded-2xl animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
    
        <button
          className="absolute -top-8 -right-8 text-white hover:text-[#ffb27e] text-5xl transition-all"
          onClick={closePopup}
        >
          <FaTimesCircle />
        </button>

       
        <a
          href="https://x.com/biznana_meme" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={closePopup} 
        >
          <img
            src={popupImg}
            alt="Popup"
            className="w-[1000px] max-w-[95vw] max-h-[85vh] h-auto object-contain shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default PopupImage;
