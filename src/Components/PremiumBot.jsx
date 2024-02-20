import React from 'react'
import Container from './Container'
import { FaCircle } from 'react-icons/fa'
import GradientText from './GradientText';
import { useInView } from 'react-intersection-observer';

export default function PremiumBot() {
    const sub = [
        "Tracking of up to 70 wallets",
        "Customizable notifications",
        "Access to Premium Channel",
        "Hourly top performing tokens scan",
        "Deep dive scan of top traders' wallets",
        "Weekly top 10 wallets report"
    ];

    const [ref, inView] = useInView({
        threshold: 0.2
    });

    return (
        <div className={`wrap bg-sec text-gray-300 py-32 ${inView ? "fadeIn" : "fadeOut"}`} id='premium' ref={ref}>
            <Container>
                <div className="heading text-center mb-5">
                    <div className="flex  justify-center">
                        <GradientText text={"Premium Bots"} />
                    </div>
                    <span className=' font-extrabold text-3xl lg:text-5xl text-white'><span className='text-grad'> Premium </span>  Features <span className='text-grad'> And Prices</span> </span>
                </div>

                <div className="text-wrap lg:w-[60%] mx-auto pb-10 mt-3 text-center">
                    <span>Discover our Premium Freatures – the ultimate solution for cryptocurrency trading success. Engineered for precision and efficiency, these bots provide advanced features and customizable options to maximize profitability. With flexible subscription plans tailored to individual needs, elevate your trading experience and unlock new opportunities with ease.</span>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 py-5 ">
                    <div className={`card i-bg-con2 rounded-3xl overflow-hidden shadow-2xl lg:scale-90`}>
                        <div className="bg-con bg-white bg-opacity-10 backdrop-blur-3xl rounded-t-3xl p-5">
                            <div className="img-wrap bg-neutral-900 py-3 bg-opacity-70 backdrop-blur-3xl rounded-t-3xl">
                                <img src="/asset/h.png" alt="Premium Bot" className='w-[100px] mx-auto rounded-full border-2 border-bronze' />

                                <div className="heading text-center">
                                    <span className='text-bronze font-bold text-lg'>Bronze Package</span>
                                </div>
                            </div>
                            <div className="text-wrap">
                                <div className="body my-3">
                                    <ul className='leading-8'>
                                        {sub.map((list, index) => (
                                            <li className='flex gap-2 items-center' key={index}>
                                                <span className='bg-grad rounded-full p-[2px]'><FaCircle size={6} className='text-white' /></span>
                                                <span>{index === 0 ? "Tracking of up to 50 wallets" : list}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="prices text-white mb-2">
                                    <span className='text-grad font-bold'>PRICE</span> <br />
                                    <span className='font-extrabold'>Buy 50$ / Hold 0.1% of $HEDEX token</span>
                                </div>

                                <div className="btn-wrap">
                                    <button className='w-full rounded-xl bg-slate-100 py-2 text-black'>Purchase</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`hidden lg:block card i-bg-con2 rounded-3xl overflow-hidden shadow-2xl`}>
                        <div className="bg-con bg-white bg-opacity-10 backdrop-blur-3xl rounded-t-3xl p-5">
                            <div className="img-wrap bg-neutral-900 py-3 bg-opacity-70 backdrop-blur-3xl rounded-t-3xl">
                                <img src="/asset/h.png" alt="Premium Bot" className='w-[100px] mx-auto rounded-full border-2 border-gold' />

                                <div className="heading text-center">
                                    <span className='text-gold font-bold text-lg'>Gold Package</span>
                                </div>
                            </div>
                            <div className="text-wrap">

                                <div className="body my-3">
                                    <ul className='leading-8'>
                                        {sub.map((list, index) => (
                                            <li className='flex gap-2 items-center' key={index}>
                                                <span className='bg-grad rounded-full p-[2px]'><FaCircle size={6} className='text-white' /></span>
                                                <span>{index === 0 ? "Tracking of up to 200 wallets" : list}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="prices text-white mb-2">
                                    <span className='text-grad font-bold'>PRICE</span> <br />
                                    <span className='font-extrabold'>Buy 200$ / Hold 0.4% of $HEDEX token</span>
                                </div>

                                <div className="btn-wrap">
                                    <button className='w-full rounded-xl bg-slate-200 py-2 text-black'>Purchase</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`card i-bg-con2 rounded-3xl overflow-hidden shadow-2xl lg:scale-90`}>
                        <div className="bg-con bg-white bg-opacity-10 backdrop-blur-3xl rounded-t-3xl p-5">
                            <div className="img-wrap bg-neutral-900 py-3 bg-opacity-70 backdrop-blur-3xl rounded-t-3xl">
                                <img src="/asset/h.png" alt="Premium Bot" className='w-[100px] mx-auto rounded-full border-2 border-silver' />

                                <div className="heading text-center">
                                    <span className='text-silver font-bold text-lg'>Silver Package</span>
                                </div>
                            </div>
                            <div className="text-wrap">

                                <div className="body my-3">
                                    <ul className='leading-8'>
                                        {sub.map((list, index) => (
                                            <li className='flex gap-2 items-center' key={index}>
                                                <span className='bg-grad rounded-full p-[2px]'><FaCircle size={6} className='text-white' /></span>
                                                <span>{index === 0 ? "Tracking of up to 100 wallets" : list}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="prices text-white mb-2">
                                    <span className='text-grad font-bold'>PRICE</span> <br />
                                    <span className='font-extrabold'>Buy 100$ / Hold 0.2% of $HEDEX token</span>
                                </div>

                                <div className="btn-wrap">
                                    <button className='w-full rounded-xl bg-slate-100 py-2 text-black'>Purchase</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`lg:hidden card i-bg-con2 rounded-3xl overflow-hidden shadow-2xl`}>
                        <div className="bg-con bg-white bg-opacity-10 backdrop-blur-3xl rounded-t-3xl p-5">
                            <div className="img-wrap bg-neutral-900 py-3 bg-opacity-70 backdrop-blur-3xl rounded-t-3xl">
                                <img src="/asset/h.png" alt="Premium Bot" className='w-[100px] mx-auto rounded-full border-2 border-gold' />

                                <div className="heading text-center">
                                    <span className='text-gold font-bold text-lg'>Gold Package</span>
                                </div>
                            </div>
                            <div className="text-wrap">

                                <div className="body my-3">
                                    <ul className='leading-8'>
                                        {sub.map((list, index) => (
                                            <li className='flex gap-2 items-center' key={index}>
                                                <span className='bg-grad rounded-full p-[2px]'><FaCircle size={6} className='text-white' /></span>
                                                <span>{index === 0 ? "Tracking of up to 200 wallets" : list}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="prices text-white mb-2">
                                    <span className='text-grad font-bold'>PRICE</span> <br />
                                    <span className='font-extrabold'>Buy 200$ / Hold 0.4% of $HEDEX token</span>
                                </div>

                                <div className="btn-wrap">
                                    <button className='w-full rounded-xl bg-slate-200 py-2 text-black'>Purchase</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
