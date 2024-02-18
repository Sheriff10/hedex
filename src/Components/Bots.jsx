import React from 'react'
import GradientText from './GradientText'

export default function Bots() {
    return (
        <div className="wrap pt-32">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis exercitationem cupiditate odio rerum. Commodi incidunt nostrum provident id vitae ducimus nihil ipsa ullam. Id tempora sequi qui repellendus. Rerum. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis exercitationem cupiditate odio rerum. Commodi incidunt nostrum provident id vitae ducimus nihil ipsa ullam. Id tempora sequi qui repellendus. Rerum.
                    </div>
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
                        Lorem ipsum dol or sit amet consectetur adipisicing elit. Architecto nobis exercitationem cupiditate odio rerum. Commodi incidunt nostrum provident id vitae ducimus nihil ipsa ullam. Id tempora sequi qui repellendus. Rerum. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis exercitationem cupiditate odio rerum. Commodi incidunt nostrum provident id vitae ducimus nihil ipsa ullam. Id tempora sequi qui repellendus. Rerum.
                    </div>
                </div>

                <div className="img-wrap text-center lg:flex justify-end hidden">
                    <img src="/asset/analyzer.png" alt="Tracking Bot" className='w-[300px]' />
                </div>
            </div>
        </div>
    )
}
