// import { useState } from 'react';
import '../Style/contract.css'

function Contract() {
    const contractAddress = "0x3835cC32ebf60748aC052948B67B7dd526F839Cd"

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress)
        alert("Contract Address copied")
    }
 
   return (
     <>
                <div  className='tokenomics'>
                    <div className="section10">
                        <div className="s10one">
                            <p data-aos="fade-up" className="text-lg font-comic sm:text-2xl md:text-xl lg:text-5xl uppercase font-bold aos-init aos-animate">
                                CONTRACT ADDRESS
                            </p>
                        </div>
                        <div className=" s10three">
                            <p id="address" className="text-one mt-5 text-md lg:text-2xl text-center bg-white font-comic uppercase md:p-5 p-2 rounded border border-black shadow-md shadow-[#4e4d4d]"> {contractAddress} </p>
                            <div className="tk-button">
                                <button onClick={handleCopy} id="copyButton" className="shadow-md md:mt-10 shadow-[#4e4d4d] md:-mx-20 uppercase px-5 py-2 md:px-10 md:py-4 font-comic rounded-md border-2 border-[#000000] bg-[#E63946] text-white transition-all duration-300 hover:bg-white hover:text-black aos-init aos-animate">
                                    <p className="text">COPY ADDRESS</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
     </>
   )
 }
 
 export default Contract;
 