import React from "react";
import { FaMoneyBillAlt, FaChartLine, FaCode, FaCogs, FaLock, FaHandshake } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";


export default function Tokenomics() {
   const cardFunc = (icon, value, name) => {
      return { icon, value, name };
   };

   const cardArr = [
      cardFunc(<FaMoneyBillAlt />, "5%", "Taxes, 5% Buy and Sell"),
      cardFunc(<FaChartLine />, "2%", "Marketing"),
      cardFunc(<FaCode />, "2%", "Development"),
      cardFunc(<FaCogs />, "1%", "Deployer"),
      cardFunc(<FaHandshake />, "45%", "Private Sale"),
      cardFunc(<FaLock />, "45%", "Liquidity Pool"),
      cardFunc(<FaChartLine />, "5%", "Marketing"),
      cardFunc(<FaCode />, "5%", "Development")
   ];

   const [ref, inView] = useInView({
      threshold: 0.2
  });

   return (
      <div className={`wrap bg-sec py-16 ${inView ? "fadeInLeft" : "fadeOut"}`} id="tokenomics" ref={ref}>
         <div className="container mx-auto px-2">
            <div className="heading flex flex-wrap justify-between items-center">
               <span className="lg:text-5xl text-3xl py-4 text-white font-bold text-fierce">
                  Tokenomics & <span className="text-grad">Distribution</span>
               </span>
               <div className="text-wrap p-2 text-sm lg:text-lg bg-slate-400 bg-opacity-10">
                  <span className="text-gray-300 font-bold">
                     Total Supply:{" "}
                     <span className="text-grad"> 100 Million $HEDEX</span>
                  </span>
               </div>
            </div>{" "}
            <br />
            <div className="card-wrap">
               <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 i-bg-con">
                  {cardArr.map((i, index) => (
                     <div
                        className="card bg-white bg-opacity-40  border-none rounded-lg text-center overflow-hidden"
                        key={index}
                     >
                        <div className=" h-full backdrop-blur-3xl py-4">
                           <div className="card-icon flex justify-center text-2xl text-white text-fierce">
                              {i.icon}
                           </div>
                           <div className="card-value text-3xl font-extrabold mt-2 text-fierce text-sec">
                              <span>{i.value}</span>
                           </div>
                           <div className="card-name text-neutral-900 capitalize">
                              <span>{i.name}</span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
