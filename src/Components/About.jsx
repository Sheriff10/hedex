import React from 'react'
import Container from './Container'
import GradientText from './GradientText'

export default function About() {
    return (
        <div className="wrap bg-sec text-gray-200 py-16">
            <Container>
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="wrap i-bg-con py-8">
                        <div className="rounded-2xl overflow-hidden">
                            <div className="bg-white bg-opacity-10 backdrop-blur-3xl lg:p-10 p-4">
                                <div className="img-wrap block lg:hidden">
                                    <img src="/asset/h.png" alt="Hedex" className='w-[200px] transform translate-x-[-40px] ' />
                                </div>
                                <div className="heading">
                                    <GradientText text={"About Hedex"} />
                                    <span className='text-3xl lg:text-5xl text-white font-extrabold'>What is HEDEX</span>
                                </div>
                                <div className="body py-3">
                                Hedex is a multifaceted platform designed to empower users in the rapidly evolving landscape of decentralized finance (DeFi). <br /> <br /> At its core, Hedex serves as a comprehensive hub for accessing vital information, tools, and resources related to cryptocurrency trading, investment, and market analysis. Through its intuitive interface and powerful features, Hedex equips users with the knowledge and tools needed to navigate the complexities of the cryptocurrency market effectively.</div>
                            </div>
                        </div>

                    </div>

                    <div className="img-wrap hidden lg:flex justify-end ">
                        <img src="/asset/h.png" alt="Hedex" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
