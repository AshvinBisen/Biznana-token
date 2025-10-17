import { memo } from "react";

import bizimg from "../assets/BiznanaImages/howtoone.png";
import bgimg from "../assets/BiznanaImages/use-img.png";
const HowToBuy = memo(function HowToBuy() {
  return (
    <>
      <div className="flex flex-col py-5 md:py-10 " id="howtobuy">
        <div className="w-full">
          <h1 data-aos="fade-up" className="text-lg font-comic sm:text-2xl md:text-xl text-center lg:text-4xl uppercase font-bold  " > 
            how to buy
            </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center align-middle  items-center">
          <div className="px-0   md:w-[40%] h-auto  flex   ">
            <img src={bizimg} alt="" className=" w-[200px]  sm:w-full   " />
          </div>
 
          <div className="relative font-comic w-full md:w-[60%]">
            <img src={bgimg} alt="" className=" hidden md:block  absolute h-full w-full" />
            <div className="relative flex flex-col p-5 md:p-20 lg:p-28 xl:px-22 gap-2 md:gap-2 ">
              <div className="m-2 md:ms-5 gap-2 flex flex-col">
                <h3 className="text-sm sm:text-lg  uppercase  ">
<a 
    href="https://pancakeswap.finance" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-black hover:text-blue-500  underline"
  >
    1: Connect Your Wallet
  </a>                </h3>
                <p className="  text-xs sm:text-base text-gray-700  ">
                    Open PancakeSwap and click “Connect Wallet” (top-right). Choose MetaMask, Trust Wallet, or WalletConnect, and ensure your network is set to Binance Smart Chain (BEP20).
                </p>
              </div>
              <div className="m-2 md:ms-5 gap-2 flex flex-col ">


     <h3 className="text-base sm:text-lg  uppercase  ">
{/* <a 
    href="https://pancakeswap.finance/swap?outputCurrency=YOUR_CONTRACT_ADDRESS" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-black hover:text-blue-500  underline"
  > */}
 2: Import Token

  {/* </a> */}


                </h3>
                <p className="  text-xs sm:text-base  text-gray-700 ">
                  {" "}
Click the link above, replace YOUR_CONTRACT_ADDRESS with your token’s contract, and confirm the import when prompted.
                </p>
              </div>
              <div className="m-2 md:ms-5 gap-2 flex flex-col">
                <h3 className="text-base sm:text-lg  uppercase ">
 3: Swap BNB for Biznana                </h3>
                <p className="  text-xs sm:text-base text-gray-700 ">
                 Select USDT in the “From” field and Biznana in the “To” field. Enter the amount you wish to buy, then click Swap → Confirm in your wallet.     </p>
              </div>
              <div className="m-2 md:ms-5 gap-2 flex flex-col">
                <h3 className=" text-base sm:text-lg  uppercase ">
4: Add Token to Wallet
                </h3>
                <p className=" text-xs sm:text-base text-gray-700 ">
Copy your contract address, open your wallet, tap “Add Custom Token”, paste the address, choose BEP20, and you’re done — your Biznana balance will appear .
                </p>
              </div>
              <div className="m-2 md:ms-5 gap-2 flex flex-col">
                <h3 className="text-base sm:text-lg  uppercase ">
                  5 Join the Community
                </h3>
                <p className="  text-xs sm:text-base text-gray-700 ">
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
