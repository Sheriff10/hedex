import React from 'react'
import { useInView } from 'react-intersection-observer';

export default function Bots() {
    const [ref, inView] = useInView({
        threshold: 0.2
    });

    const [ref2, inView2] = useInView({
        threshold: 0.2
    });

    return (
        <div className="wrap pt-32" id='bot'>
            <div className={`grid lg:grid-cols-3 items-center  bg-white bg-opacity-10 backdrop-blur-3xl p-5 rounded-t-3xl ${inView ? "fadeInRight" : "fadeOut"}`} ref={ref}>
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

            <div className={`grid lg:grid-cols-3 items-center  bg-white bg-opacity-10 backdrop-blur-3xl mt-1 p-5 rounded-b-3xl ${inView2 ? "fadeInLeft" : "fadeOut"}`} ref={ref2}>
                <div className="img-wrap text-center lg:hidden">
                    <img src="/asset/tracker.png" alt="Tracking Bot" className=' w-[100px] lg:w-[300px]' />
                </div>
                <div className="text-wrap mt-3 col-span-2">
                    <div className="heading">
                        {/* <GradientText text={"Tracking Bot"} /> */}
                        <span className=' font-extrabold text-3xl lg:text-5xl text-white'> <span className='text-grad'>Analyzer</span> Bot</span>
                    </div>
                    <div className="text mt-4">
                        The Hedex Analyzer Bot is a powerful tool designed to simplify and enhance cryptocurrency trading and analysis. It provides users with a range of features aimed at streamlining the process of gathering essential data and insights to make informed trading decisions. we gather information directly from the blockchain to give you the very best information. we provide Profit and Loss metrics over various time frames, Trading volume, how much the wallet brought and sold, their biggest wins, we even show you if they use any other trading bot to execute their trades. Hedex will also scan any contract to give you the best traders and most profitable wallets on individual tokens.
                    </div>
                </div>

                <div className="img-wrap text-center lg:flex justify-end hidden">
                    <img src="/asset/analyzer.png" alt="Tracking Bot" className='w-[300px]' />
                </div>
            </div>
        </div>
    )
}
