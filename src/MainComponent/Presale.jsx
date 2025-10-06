import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import presale1 from "../assets/BiznanaImages/presale1.png";
import leaf from "../assets/BiznanaImages/presale-leaf.png";
import twitter from "../assets/BiznanaImages/jointwit.png";
import telegram from "../assets/BiznanaImages/jointele.png";
import "aos/dist/aos.css"; // Import AOS styles
import presaleborder from "../assets/BiznanaImages/presale-border.png";
import background from "../assets/BiznanaImages/joinbgimg.png";
import bizimg from "../assets/BiznanaImages/howtobuyimg.png";
import usdt from "../assets/BiznanaImages/biz-usdt.png";
import bizna from "../assets/BiznanaImages/biznanalogo.png";
import card from "../assets/BiznanaImages/card.png";
import Countdown from "./CountDown";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitProvider,
} from "@reown/appkit/react";
import { BrowserProvider, Contract, ethers, formatEther } from "ethers";
import {
  MIN_INVESTMENT_USD,
  USDT_ADDRESS,
  PRESALE_ADDRESS,
} from "./utils/constants";
import { PRESALE_ABI, USDT_ABI } from "./utils/presaleABI";

const PUBLIC_RPC_URL = "https://1rpc.io/bnb";
const publicProvider = new ethers.JsonRpcProvider(PUBLIC_RPC_URL);

// Reusable TokenInput component
const TokenInput = ({ value, onChange }) => {
  return (
    <div className="flex border border-[#FFCE2A] py-3 px-1">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter Amount"
        className="w-[70%] bg-black border-b border-dotted text-white outline-none"
        aria-label="USDT amount input"
      />
      <div className="flex items-center gap-2">
        <img src={usdt} alt="USDT" className="h-10" />
        <p>USDT</p>
      </div>
    </div>
  );
};

// Reusable TokenInput2 component (read-only for BIZNA)
const TokenInput2 = ({ value }) => {
  return (
    <div className="flex border border-[#FFCE2A] py-3 px-1">
      <input
        type="text"
        value={value}
        readOnly
        placeholder="Enter Amount"
        className="w-[70%] bg-black border-b border-dotted text-white outline-none"
        aria-label="BIZNA amount output"
      />
      <div className="flex items-center gap-2">
        <img src={bizna} alt="BIZNA" className="h-10" />
        <p>BIZNA</p>
      </div>
    </div>
  );
};

const Presale = () => {
  const { address } = useAppKitAccount();
  const { open } = useAppKit();
  const { walletProvider } = useAppKitProvider("eip155");
  const [loading, setLoading] = useState(false);
  const [totalSold, setTotalSold] = useState("0");
  const [totalRaised, setTotalRaised] = useState("0");
  const [progressPercent, setProgressPercent] = useState(0);
  const [price, setPrice] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [usdtAmount, setUsdtAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [error, setError] = useState("");
  const [bnbBalance, setBnbBalance] = useState("0");

  console.log("Address:", address); 

  // Calculate token amount based on USDT input
  const calculateTokenAmount = (usdt) => {
    const usdtNum = parseFloat(usdt) || 0;
    const tokenPrice = parseFloat(price);
    if (tokenPrice === 0) return (0).toFixed(6);
    return (usdtNum / tokenPrice).toFixed(6);
  };

  // Handle USDT input
  const handleUsdtInput = (value) => {
    const cleanedValue = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\./g, "$1");
    setUsdtAmount(cleanedValue);
    if (cleanedValue && !isNaN(cleanedValue)) {
      setTokenAmount(calculateTokenAmount(cleanedValue));
    } else {
      setTokenAmount("");
      if (value && cleanedValue === "") {
        toast.error("Please enter a valid number", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  // Fetch BNB balance
  const fetchBnbBalance = async () => {
    if (!address) return;
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const balance = await ethersProvider.getBalance(address);
      setBnbBalance(formatEther(balance));
    } catch (error) {
      console.error("Error fetching BNB balance:", error);
      toast.error("Failed to fetch BNB balance", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  // Fetch presale information
  const fetchPresaleInfo = async () => {
    try {
      const presaleContract = new Contract(
        PRESALE_ADDRESS,
        PRESALE_ABI,
        publicProvider
      );
      const [sold, raised, tokenPrice] = await Promise.all([
        presaleContract.totalTokensSold(),
        presaleContract.totalUSDTCollected(),
        presaleContract.tokensPerUSDT(),
      ]);

      const soldInTokens = Number(sold) / 1e18;
      const raisedInUSDT = Number(raised) / 1e18;
      const priceInTokensPerUSDT = Number(tokenPrice) / 1e4;
      const priceInTokensPerUSDTs = priceInTokensPerUSDT
        ? 1 / priceInTokensPerUSDT
        : 0;

      setTotalSold(soldInTokens.toFixed(2));
      setTotalRaised(raisedInUSDT.toFixed(2));
      setProgressPercent(
        Math.min((raisedInUSDT.toFixed(2) / 10000) * 100, 100)
      );
      setPrice(priceInTokensPerUSDTs);
    } catch (error) {
      console.error("Error fetching presale info:", error);
      setError("Failed to load presale data");
      toast.error("Failed to load presale data", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  // Check USDT allowance
  const checkAllowance = async () => {
    if (!address) return;
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const usdtContract = new Contract(USDT_ADDRESS, USDT_ABI, signer);
      const allowance = await usdtContract.allowance(address, PRESALE_ADDRESS);
      const requiredAmount = ethers.parseUnits(usdtAmount || "0", 18);
      setIsApproved(allowance >= requiredAmount);
    } catch (error) {
      console.error("Error checking allowance:", error);
      setError("Failed to check allowance");
      toast.error("Failed to check allowance", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  // Approve USDT
  const approveUSDT = async () => {
    if (!address) {
      setError("Please connect your wallet");
      toast.error("Please connect your wallet", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (!usdtAmount || parseFloat(usdtAmount) < MIN_INVESTMENT_USD) {
      setError(`Minimum investment is $${MIN_INVESTMENT_USD}`);
      toast.error(`Minimum investment is $${MIN_INVESTMENT_USD}`, {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    setLoading(true);
    setError("");
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const usdtContract = new Contract(USDT_ADDRESS, USDT_ABI, signer);
      const amount = ethers.parseUnits(usdtAmount, 18);
      const tx = await usdtContract.approve(PRESALE_ADDRESS, amount);
      await tx.wait();
      setIsApproved(true);
      toast.success("USDT approved successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error approving USDT:", error);
      const errorMessage =
        error.code === 4001
          ? "Transaction rejected by user"
          : `Failed to approve USDT`;
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Buy with USDT
  const buyWithUSDT = async () => {
    if (!address) {
      setError("Please connect your wallet");
      toast.error("Please connect your wallet", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    if (!usdtAmount || parseFloat(usdtAmount) < MIN_INVESTMENT_USD) {
      setError(`Minimum investment is $${MIN_INVESTMENT_USD}`);
      toast.error(`Minimum investment is $${MIN_INVESTMENT_USD}`, {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    setLoading(true);
    setError("");
    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const presaleContract = new Contract(
        PRESALE_ADDRESS,
        PRESALE_ABI,
        signer
      );
      const amount = ethers.parseUnits(usdtAmount, 18);
      const tx = await presaleContract.buyWithUSDT(amount);
      await tx.wait();
      setUsdtAmount("");
      setTokenAmount("");
      await fetchPresaleInfo();
      toast.success("Purchase successful!", {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error buying with USDT:", error);
      const errorMessage =
        error.code === 4001
          ? "Transaction rejected by user"
          : `Failed to complete purchase`;
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on mount and when address/usdtAmount changes
  useEffect(() => {
    fetchPresaleInfo();
    if (address) {
      fetchBnbBalance();
      checkAllowance();
    } else {
      setBnbBalance("0");
      setIsApproved(false);
    }
  }, [address, usdtAmount]);

  return (
    <>
      <div className="" id="presale">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: 9999 }}
        />
        <div className="flex flex-col gap-5 md:gap-10 font-comic">
          <div className="mx-10 md:mx-20 mt-10 md:mt-20 flex flex-col lg:flex-row items-center md:items-start justify-center md:justify-normal gap-5 md:gap-10">
            <div className="flex flex-col gap-5 md:gap-10 mt-10 md:mt-20 w-full md:w-[60%]">
              <div className="relative mb-10 md:mb-0 flex items-center justify-center place-items-start">
                <img src={presale1} alt="Presale Banner" className="absolute w-full lg:w-[90%]" />
                <p className="relative text-center text-xl font-comic sm:text-2xl md:text-3xl xl:text-5xl uppercase font-bold -rotate-6">
                  Laugh. Trade. <br /> Grow. Repeat.
                </p>
              </div>

              <div className="flex items-center">
                <div className="mt-10 sm:mt-20 lg:mt-32">
                  <h1 className="text-xl font-comic sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-bold">
                    Token Features
                  </h1>
                  <ul className="mt-3 md:mt-5">
                    <li className="text-lg font-comic md:text-xl lg:text-2xl">
                      - Fast MemeSwap Trading
                    </li>
                    <li className="text-lg font-comic md:text-xl lg:text-2xl">
                      - Meme NFT Game Utility
                    </li>
                    <li className="text-lg font-comic md:text-xl lg:text-2xl">
                      - Daily Banana Staking
                    </li>
                    <li className="text-lg font-comic md:text-xl lg:text-2xl">
                      - 100% Community Controlled
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex items-end">
              <div>
                <img
                  src={bizimg}
                  alt="How to Buy"
                  className="transform scale-x-[-1] hidden sm:block h-[400px] pt-10 md:pt-20 md:h-[600px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center relative z-20">
                <div className="flex flex-col gap-4 bg-black border-4 border-white text-white px-10 py-5 md:py-10 text-center w-full">
                  <h2 className="uppercase text-xl md:text-2xl lg:text-3xl">
                    Presale now <span className="text-[#ff0000]">live!</span>
                  </h2>
                  <p>
                  <Countdown initialTime={86400000 * 30} /> 
                  </p>
                  <p className="text-lg">
                    Last Chance To Buy Before We Go Full Banana Mode
                  </p>
                  {/* Progress Bar */}
                  {/* <div className="w-[80%] mx-auto my-2">
                    <div className="mb-2 flex justify-between text-sm text-white font-medium">
                      <span>Raised: ${totalRaised.toLocaleString()}</span>
                      <span>{progressPercent.toFixed(1)}%</span>
                    </div>
                    <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FFCE2A] transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                  </div> */}
                  {/* Price Indicator */}
                  <div className="flex items-center justify-center space-x-3 text-md text-[#FFCE2A] mb-4">
                    <span>
                      Current price: <span className="text-white">${price.toFixed(5)}</span>
                    </span>
                    <span>→</span>
                    <span>
                      Next price: <span className="text-white">$0.00010</span>
                    </span>
                  </div>
                </div>
                <div className="h-2"></div>
                <div className="flex flex-col bg-black border-4 border-white text-white px-10 py-5 w-full">
                  <h2 className="uppercase text-xl md:text-2xl text-center lg:text-3xl">
                    Join the <span className="text-[#ff0000]">presale</span>
                  </h2>
                  <div className="my-5 flex flex-col">
                    <div>
                      <label className="block text-[#FFCE2A] mb-1 capitalize">
                        You can Buy with
                      </label>
                      <TokenInput value={usdtAmount} onChange={handleUsdtInput} />
                    </div>
                    <div className="mt-4">
                      <label className="block text-[#FFCE2A] mb-1 capitalize">
                        You will get
                      </label>
                      <TokenInput2 value={tokenAmount} />
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      className="uppercase px-5 py-2 md:px-10 md:py-4 font-comic rounded-md border-2 border-[#000000] bg-[#E63946] text-white transition-all duration-300 hover:bg-white hover:text-black text-xl"
                      onClick={() => open()}
                      disabled={loading}
                    >
                      {address ? "Connected" : "Connect"}
                    </button>
                    <button
                      className="uppercase px-5 py-2 md:px-10 md:py-4 font-comic rounded-md border-2 border-[#000000] bg-[#E63946] text-white transition-all duration-300 hover:bg-white hover:text-black text-xl"
                      onClick={isApproved ? buyWithUSDT : approveUSDT}
                      disabled={loading || !address}
                    >
                      {loading ? "Processing..." : isApproved ? "Buy" : "Approve"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:-mt-40 xl:-mt-56">
            <img src={leaf} alt="Leaf Decoration" className="hidden lg:block" />
          </div>
          {/* Black Line */}
          <div className="bg-black py-2 md:py-5 md:-rotate-1 lg:-mt-20 text-white flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 xl:gap-28">
            <p className="text-xl md:text-2xl uppercase">
              <a href="">Join the Memevolution</a>
            </p>
            <p className="text-xl md:text-2xl uppercase">
              <a href="">View Whitepaper</a>
            </p>
            <p className="text-xl md:text-2xl uppercase">
              <a href="">Join Telegram</a>
            </p>
          </div>

          {/* Join Bizna Pack Section */}
          <div>
            <div className="flex flex-col items-center" id="presale">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal w-full mb-6">
                <h1 className="text-center text-lg font-comic sm:text-2xl md:text-xl lg:text-4xl uppercase font-bold">
                  JOIN THE $BIZNA PACK
                </h1>
              </div>
              <div className="relative w-full flex flex-col py-20 justify-center items-center text-center">
                <img
                  src={background}
                  className="absolute w-full h-full"
                  alt="Background"
                />
                <div className="relative w-full p-5 gap-5 md:gap-8 md:p-10 max-w-5xl flex flex-col items-center justify-center">
                  <p className="place-items-center text-center text-xl md:text-2xl">
                    Presale buyers of $BIZNA can stake their tokens early in our
                    smart contract to unlock exclusive rewards before launch!
                    Laboriosam, repudiandae?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
                    <button
                      className="shadow-md shadow-[#4d4d4e] text-lg md:text-xl uppercase px-5 py-2 md:px-10 md:py-6 font-comic rounded-md border-2 border-[#000000] bg-[#E63946] text-white transition-all duration-300 hover:bg-white hover:text-black"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      <a href="/presale">BUY BIZNA</a>
                    </button>
                    <div>
                      <a href="/" className="flex items-center gap-3">
                        <img src={telegram} alt="Telegram" />
                        <p className="uppercase text-xl md:text-2xl">JOIN Telegram</p>
                      </a>
                    </div>
                    <div>
                      <a href="/" className="flex items-center gap-3">
                        <img src={twitter} alt="Twitter" />
                        <p className="uppercase text-xl md:text-2xl">follow us on</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presale;