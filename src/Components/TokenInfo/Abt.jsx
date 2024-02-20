import React, { useState } from 'react'
import { FaCheck, FaCopy } from 'react-icons/fa'
import copyToClipboard from '../../utils/copy'
import Container from '../Container'
import GradientText from '../GradientText'
import { useInView } from 'react-intersection-observer'

export default function Abt() {
    const [cpy, setCpy] = useState(<FaCopy />)

    const toggleCpy = (text) => {
        copyToClipboard(text)
        setCpy(<FaCheck className='text-green-400' />)
        setTimeout(() => {
            setCpy(<FaCopy />)
        }, 500);
    }

    const [ref, inView] = useInView({
        threshold: 0.2
    });

    const [ref2, inView2] = useInView({
        threshold: 0.2
    });

    return (
        <div className="wrap bg-sec text-gray-200 py-16" id='token'>
            <Container>
                <div className="grid lg:grid-cols-2 items-center">
                    <div className={`img-wrap hidden lg:flex`} ref={ref}>
                        <img src="/asset/h.png" alt="Hedex" className={`${inView ? "fadeInLeft" : "fadeOut"}`} />
                    </div>

                    <div className={`wrap i-bg-con py-8 `} ref={ref2}>
                        <div className="rounded-2xl overflow-hidden">
                            <div className="bg-white bg-opacity-10 backdrop-blur-3xl lg:p-10 p-4">
                                <div className="img-wrap block lg:hidden">
                                    <img src="/asset/h.png" alt="Hedex" className='w-[200px] transform translate-x-[-40px] ' />
                                </div>
                                <div className={`heading ${inView2 ? "fadeInRight" : "fadeOut"}`}>
                                    <GradientText text={"Hedex Token and Utility"} />
                                    <span className='text-3xl lg:text-5xl text-white font-extrabold'>
                                        About <span className='text-grad'>$HEDEX Token</span>
                                    </span>
                                </div>
                                <div className={`body py-3 ${inView2 ? "fadeInRight" : "fadeOut"}`}>
                                    <span>
                                        Hedex Token is a digital asset created and released by Hedex, representing a significant step in the platform's evolution. Designed to foster accessibility and community engagement, the Hedex Token serves as the foundation for a subscription model, offering users different tiers of access to the Hedex platform based on their token holdings. <br /> <br /> With the aim of spreading awareness and utilization of the platform's features, the Hedex Token embodies Hedex's commitment to democratizing access to financial tools and information. It stands as a symbol of Hedex's dedication to empowering its community and driving innovation in the decentralized finance space.
                                    </span>
                                </div>
                            </div>
                            <div className="base-wrap">
                                <div className="wrap  bg-white bg-opacity-10 backdrop-blur-3xl p-3">
                                    <span className='font-bold text-grad'>$HEDEX Token Address </span>
                                    <div className="flex gap-2 flex-wrap">
                                        <div className="text-wrap flex items-center">
                                            <span className='w-[300px] text-ellipsis overflow-hidden bg-white bg-opacity-10 p-2'>0xdFB03da57a3C56124c72a47729A1d0ED54D38FF5</span> <button className='bg-sec p-2 px-4' onClick={() => toggleCpy('0xdFB03da57a3C56124c72a47729A1d0ED54D38FF5')}>{cpy}</button>
                                        </div>
                                        <div className="btn-wrap">
                                            <a href="https://app.uniswap.org/swap?chain=eth&outputCurrency=0xdFB03da57a3C56124c72a47729A1d0ED54D38FF5" target={"_blank"}  rel="noreferrer">
                                                <button className=' rounded-xl bg-slate-900 py-2 text-white px-5 flex items-center'> <span className='lg:hidden'>Buy on uniswap</span> <img src="/asset/uniswap.PNG" alt="Uniswap" className='w-[45px]' /></button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}