import React from 'react'
import Bots from './Bots'
import Container from './Container'
import GradientText from './GradientText'

export default function OurBots() {
    const cardFunc = (img, title, text, link) => {
        return { img, title, text, link }
    }
    const cardArr = [
        cardFunc("/asset/tracker.png", "Tracking Bot", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quaerat.", "#"),
        cardFunc("/asset/analyzer.png", "Analyzer Bot", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quaerat.", "#"),
    ]
    return (
        <div className="wrap bg-sec py-16 text-gray-400">
            <Container>
                <div className="heading text-center mb-5">
                    <div className="flex  justify-center">
                        <GradientText text={"Our BOT"} />
                    </div>
                    <span className=' font-extrabold text-3xl lg:text-5xl text-white'>Tracker And <span className='text-grad'>Analyzer</span> Bot</span>
                </div>
                <div className="body">
                    <div className="text-wrap lg:w-[50%] mx-auto text-center leading-8 mb-8">
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, suscipit! Quasi excepturi dignissimos doloremque quos, natus inventore rerum nisi ullam distinctio facere nesciunt ipsam voluptatum qui accusamus perferendis, cupiditate corporis.</span>
                    </div>

                    <div className="card-con grid lg:grid-cols-2 gap-3 i-bg-con py-3">
                        {cardArr.map((card, index) => (
                            <div className="wrap flex justify-center">
                                <div className="card border-2 border-white bg-white bg-opacity-10 backdrop-blur-3xl lg:w-[50%] p-3 rounded-3xl">
                                    <div className="img-wrap">
                                        <img src={card.img} className='w-[100px] mx-auto' alt="Tracker Bot" />
                                    </div>
                                    <div className="wrap">
                                        <div className="text-head text-center text-white font-bold">
                                            <span>{card.title}</span>
                                        </div>
                                        <div className="text-wrap py-3">
                                            <span>{card.text}</span>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className='w-full rounded-xl bg-slate-100 py-2 text-black'>Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Bots />
            </Container>
        </div>
    )
}
