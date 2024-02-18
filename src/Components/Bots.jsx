import React from 'react'
import GradientText from './GradientText'

export default function Bots() {
    return (
        <div className="wrap pt-32" id='bot'>
            <div className="grid lg:grid-cols-3 items-center  bg-white bg-opacity-10 backdrop-blur-3xl p-5 rounded-t-3xl">
                <div className="img-wrap text-center">
                    <img src="/asset/tracker.png" alt="Tracking Bot" className=' w-[100px] lg:w-[300px]' />
                </div>
                <div className="text-wrap col-span-2">
                    <div className="heading">
                        {/* <GradientText text={"Tracking Bot"} /> */}
                        <span className=' font-extrabold text-3xl lg:text-5xl text-white'> <span className='text-grad'>Tracker</span> Bot</span>
                    </div>
                    <div className="text mt-4">
                        The Hedex Tracker Bot is an essential tool designed for cryptocurrency traders, offering real-time monitoring of ERC-20 token purchases across multiple wallets. It stands out with its customizable notification system, enabling traders to set parameters for notifications based on their preferences. Moreover, the bot allows users to add Alpha wallets and conducts comprehensive contract scans upon triggering notifications, providing valuable insights into potential vulnerabilities and contract details. In summary, the Hedex Tracker Bot streamlines tracking efforts, enhances trading confidence, and ensures informed decision-making in the dynamic cryptocurrency market.</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 items-center  bg-white bg-opacity-10 backdrop-blur-3xl mt-1 p-5 rounded-b-3xl">
                <div className="img-wrap text-center lg:hidden">
                    <img src="/asset/tracker.png" alt="Tracking Bot" className=' w-[100px] lg:w-[300px]' />
                </div>
                <div className="text-wrap mt-3 col-span-2">
                    <div className="heading">
                        {/* <GradientText text={"Tracking Bot"} /> */}
                        <span className=' font-extrabold text-3xl lg:text-5xl text-white'> <span className='text-grad'>Analyzer</span> Bot</span>
                    </div>
                    <div className="text mt-4">
                        The Hedex Analyzer Bot is a powerful tool designed to simplify and enhance cryptocurrency trading and analysis. It provides users with a range of features aimed at streamlining the process of gathering essential data and insights to make informed trading decisions.
                    </div>
                </div>

                <div className="img-wrap text-center lg:flex justify-end hidden">
                    <img src="/asset/analyzer.png" alt="Tracking Bot" className='w-[300px]' />
                </div>
            </div>
        </div>
    )
}
