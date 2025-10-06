

const Button = ({ leftText, rightText }) => {
  return (
    <div className="flex flex-row align-middle w-full  py-5 justify-center  ">
      <button
        className="relative flex items-center justify-between font-semibold rounded-full text-base cursor-pointer transition-all duration-300 ease-in-out 
  w-[80%] sm:w-full h-[60px]  border-2 shadow-custom-drop   "
      >
        {/* Left side with gradient */}
        <div className="w-1/2 h-full flex items-center justify-center rounded-l-full ">
          <span className="text-black font-bold p-2 lg:px-8 rounded-xl border-2 border-[#781a1a]  z-10">
            {leftText}
          </span>
        </div>
        

        {/* Right side with dark background */}
        <div className="w-1/2 h-full flex items-center justify-center rounded-l-full ">
          <span className="text-white p-2 lg:px-8 rounded-lg bg-roadmap-circle-gradient3 z-10">
            {rightText}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Button;
