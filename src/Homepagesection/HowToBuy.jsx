import { memo } from "react";

import bizimg from "../assets/BiznanaImages/howtobuyimg.png";
import bgimg from "../assets/BiznanaImages/use-img.png";
const HowToBuy = memo(function HowToBuy() {
  return (
    <>
      <div className="flex flex-col py-5 md:py-10 " id="howtobuy">
        {/* <div className="w-full">
          <h1 data-aos="fade-up" className="text-lg font-comic sm:text-2xl md:text-xl text-center lg:text-4xl uppercase font-bold  " > 
            how to buy
            </h1>
        </div> */}

        <div className="flex flex-col md:flex-row justify-center  items-center">
          <div className="px-5 md:px-10">
            <img src={bizimg} alt="" className="w-[50%] md:w-full " />
          </div>

          <div className="relative font-comic w-full md:w-[80%]">
            <img src={bgimg} alt="" className="absolute h-full w-full" />
            <div className="relative flex flex-col p-20 md:p-20 lg:p-28 xl:px-28 gap-2 md:gap-5">
              <div className="m-2 md:ms-5">
                <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl uppercase mb-3">
                  1 Create a Wallet
                </h3>
                <p className="  text-xs sm:text-base md:text-lg lg:text-xl">
                  {" "}
                  Download MetaMask or Trust Wallet.
                </p>
              </div>
              <div className="m-2 md:ms-5">
                <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl uppercase mb-3">
                  2 Get Some BNB or ETH
                </h3>
                <p className="  text-xs sm:text-base md:text-lg lg:text-xl">
                  {" "}
                  Purchase BNB/ETH from an exchange like Binance or Coinbase.
                </p>
              </div>
              <div className="m-2 md:ms-5">
                <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl uppercase mb-3">
                  3 Connect to PancakeSwap or Uniswap
                </h3>
                <p className="  text-xs sm:text-base md:text-lg lg:text-xl">
                  {" "}
                  Depending on the network (BEP-20 or ERC-20), go to the correct
                  DEX.
                </p>
              </div>
              <div className="m-2 md:ms-5">
                <h3 className=" text-base sm:text-lg md:text-2xl lg:text-3xl uppercase mb-3">
                  4 Swap for $BIZNA
                </h3>
                <p className=" text-xs sm:text-base md:text-lg lg:text-xl">
                  {" "}
                  Paste our official contract address (coming soon) and make the
                  trade.
                </p>
              </div>
              <div className="m-2 md:ms-5">
                <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl uppercase mb-3">
                  5 Join the Community
                </h3>
                <p className="  text-xs sm:text-base md:text-lg lg:text-xl">
                  {" "}
                  Follow us on socials, participate in challenges, and start
                  promoting!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default HowToBuy;
