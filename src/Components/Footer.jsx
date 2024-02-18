import React from 'react'
import Container from './Container'

export default function Footer() {
    return (
        <div className="wrap bg-sec">
            <div className="bg-con bg-black bg-opacity-50">
                <Container>
                    <div className="flex flex-wrap gap-1 justify-between items-center py-3">
                        <div className="icon-wrap">
                            <div className="flex items-center">
                                <img src="/asset/h.png" alt="HEDEX" className='w-[50px]' />
                                <span className='text-grad'>HEDEX</span> <span className='text-gray-300 ml-3'> All Copyright reserved. © 2024</span>
                            </div>
                        </div>

                        <div className="socials flex  gap-3 w-full lg:w-auto justify-center">
                            <img src="/asset/x.PNG" alt="X (formerly Twitter)" className='w-[50px]' />
                            <img src="/asset/telegram.PNG" alt="Telegram" className='w-[50px]' />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
