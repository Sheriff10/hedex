import React from 'react'
import Container from './Container'

export default function Intro() {
    return (
        <div className="wrap bg-sec">
            <div className="i-bg-con">
                <div className="flex py-32 bg-black  bg-opacity-30 backdrop-blur-3xl justify-center min-h-[75vh] items-center">
                    <div className="text-center px-2">
                        <div className="wrap">
                            <div className="img-wrap">
                                <img src="/asset/logo.png" alt="Hedex" className='mx-auto w-[250px] lg:w-auto' />
                            </div>
                            <div className="text-wrap text-gray-200 my-5">
                                <span className='text-white font-bold text-lg'>Navigate the Crypto World with Hedex: <br /> Where Every Trade Counts.  </span>
                            </div>
                            <div className="btn-wrap w-[400p flex gap-3 font-bold">
                                <a href="https://app.uniswap.org/swap?chain=eth&outputCurrency=0xdFB03da57a3C56124c72a47729A1d0ED54D38FF5" target={"_blank"}>
                                    <button className='p-2 w-[100%] bg-grad text-gray-800 rounded-3xl'>Buy $HEDEX</button>
                                </a>
                                <div className="wrap w-[100%] bg-grad p-[1px] rounded-3xl ">
                                    <a href="">
                                        <button className='p-2 w-[100%] text-black bg-white rounded-3xl'>Bots</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
