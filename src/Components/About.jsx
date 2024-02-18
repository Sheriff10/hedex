import React from 'react'
import Container from './Container'
import GradientText from './GradientText'

export default function About() {
    return (
        <div className="wrap bg-sec text-gray-300 py-16">
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
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem aspernatur, odit sit magni iure fugiat labore ut modi qui ullam odio doloribus nostrum aliquam consequuntur placeat! Sed, dolorem excepturi?</span> <br /> <br />
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem aspernatur, odit sit magni iure fugiat labore ut modi qui ullam odio doloribus nostrum aliquam consequuntur placeat! Sed, dolorem excepturi?</span>
                                </div>
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
