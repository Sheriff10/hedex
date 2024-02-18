import React from 'react'
import { FaCopy } from 'react-icons/fa'
import Container from '../Container'
import GradientText from '../GradientText'

export default function Abt() {
    return (
        <div className="wrap bg-sec text-gray-300 py-16">
            <Container>
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="img-wrap hidden lg:flex  ">
                        <img src="/asset/h.png" alt="Hedex" />
                    </div>

                    <div className="wrap i-bg-con py-8">
                        <div className="rounded-2xl overflow-hidden">
                            <div className="bg-white bg-opacity-10 backdrop-blur-3xl lg:p-10 p-4">
                                <div className="img-wrap block lg:hidden">
                                    <img src="/asset/h.png" alt="Hedex" className='w-[200px] transform translate-x-[-40px] ' />
                                </div>
                                <div className="heading">
                                    <GradientText text={"Hedex Token and Utility"} />
                                    <span className='text-3xl lg:text-5xl text-white font-extrabold'>
                                        About <span className='text-grad'>$HDX Token</span>
                                    </span>
                                </div>
                                <div className="body py-3">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem aspernatur, odit sit magni iure fugiat labore ut modi qui ullam odio doloribus nostrum aliquam consequuntur placeat! Sed, dolorem excepturi?</span> <br /> <br />
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem aspernatur, odit sit magni iure fugiat labore ut modi qui ullam odio doloribus nostrum aliquam consequuntur placeat! Sed, dolorem excepturi?</span>
                                </div>
                            </div>
                            <div className="base-wrap">
                                <div className="wrap  bg-white bg-opacity-10 backdrop-blur-3xl p-3">
                                    <span className='font-bold text-grad'>$HDX Token Address </span>
                                    <div className="flex gap-2 flex-wrap">
                                        <div className="text-wrap flex">
                                            <span className='w-[300px] text-ellipsis overflow-hidden bg-white bg-opacity-10 p-2'>0xdFB03da57a3C56124c72a47729A1d0ED54D38FF5</span> <button className='bg-sec p-2'><FaCopy /></button>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className=' rounded-xl bg-slate-900 py-2 text-white px-5 flex items-center'> <span className='lg:hidden'>Buy on uniswap</span> <img src="/asset/uniswap.png" alt="Uniswap" className='w-[25px]' /></button>
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