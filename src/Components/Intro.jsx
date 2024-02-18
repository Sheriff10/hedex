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
                                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Molestiae, nihil.</span>
                            </div>
                            <div className="btn-wrap w-[400p flex gap-3 font-bold">
                                <button className='p-2 w-[100%] bg-grad text-gray-800 rounded-3xl'>Buy $HDX</button>
                                <div className="wrap w-[100%] bg-grad p-[1px] rounded-3xl ">
                                    <button className='p-2 w-[100%] text-black bg-white rounded-3xl'>Bots</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
