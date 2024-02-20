import React from 'react'
import Container from './Container'
import GradientText from './GradientText'
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.2
    });
    const [ref2, inView2] = useInView({
        threshold: 0.2
    });
    return (
        <div className="wrap bg-sec text-gray-200 py-16">
            <Container>
                <div className="grid lg:grid-cols-2 items-center" ref={ref}>
                    <div className={`wrap i-bg-con py-8`}>
                        <div className="rounded-2xl overflow-hidden">
                            <div className={`bg-white bg-opacity-10 backdrop-blur-3xl lg:p-10 p-5 ${inView ? "fadeIn" : "fadeOut"}`}>
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

                    <div className={`img-wrap hidden lg:flex justify-end`} ref={ref2}>
                        <img src="/asset/h.png" alt="Hedex" className={`${inView2 ? "fadeInRight" : "fadeOut"}`} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
