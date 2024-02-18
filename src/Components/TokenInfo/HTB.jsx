import React from "react";
import { FaDownload, FaCoins, FaExternalLinkAlt, FaExchangeAlt } from 'react-icons/fa';

export default function HTB() {
   const stepFunc = (icon, title, description) => ({ icon, title, description });

   const buySteps = [
      stepFunc(<FaDownload />, "Download Wallet", "Download metamask or your wallet of choice from the app store or Google Play Store for free. Desktop users, download the Google Chrome extension by going to metamask.io."),
      stepFunc(<FaCoins />, "Have ETH in Your Wallet", "Have ETH in your wallet to switch to $HEDEX. If you don’t have any ETH, you can buy directly on Metamask, transfer from another wallet, or buy on another exchange and send it to your wallet."),
      stepFunc(<FaExternalLinkAlt />, "Connect to Uniswap", "Connect to Uniswap. Go to app.uniswap.org in Google Chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $HEDEX token address into Uniswap, select HEDEX, and confirm. When Metamask prompts you for a wallet signature, sign."),
      stepFunc(<FaExchangeAlt />, "Switch ETH for $HEDEX", "Switch ETH for $HEDEX. You don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.")
   ];


   return (
      <div className="wrap intro py-32 bg-sec">
         <div className="container mx-auto px-2">
            <div className="grid gap-4 items-center lg:grid-cols-2">
               <div className="text-wrap">
                  <div className="heading ls text-fierce text-2xl lg:text-7xl font-extrabold text-fierce text-white uppercase">
                     <span>How to buy $HDX</span>
                  </div>
                  <div className="text-lg col-lg-8 py-3 text-neutral-300 ">
                     <span>
                        Here's a guide on how to buy ollie
                        <span className="grad-text"> $HDX</span>
                     </span>
                  </div>
                  <div className="btn-wrap text-fierce ls">
                     <button className="btn ls rounded-pill text-black p-3 w-full lg:w-[50%] bg-grad rounded-2xl">
                        BUY $HEDEX
                     </button>
                  </div>
               </div>




               <div className="steps">
                  <div className="grid gap-5 p-3 ">
                     {buySteps.map((i, index) => (
                        <div className="wrap sticky bg-white rounded-md bg-opacity-10 shadow flex gap-5 items-center p-3" key={index}>
                           <div className="">
                              <div className="heading ls text-fierce text-Xl flex items-center mb-3 gap-2 text-white font-semibold">
                                 <span className="bg-grad p-2 px-4 rounded-full flex items-center justify-center">
                                    {" "}
                                    {index + 1}
                                 </span>
                                 <span className="text-lg"> {i.title}</span>
                              </div>
                              <div className="text px-2 text-gray-400 text-md">
                                 {i.description}
                              </div>
                           </div>

                           <div className="img-wrap flex">
                              <span className="flex p-3 bg-grad rounded-full text-3xl">
                                 {i.icon}
                              </span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
