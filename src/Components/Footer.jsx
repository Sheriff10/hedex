import React from 'react'
import Container from './Container'

export default function Footer() {
    return (
        <div className="wrap bg-sec">
            <div className="bg-con bg-black bg-opacity-50">
                <Container>
                    <div className="flex flex-wrap gap-1 justify-between items-center py-3">
                        <div className="icon-wrap w-full lg:w-auto">
                            <div className="flex items-center justify-center lg:justify-normal">
                                <img src="/asset/h.png" alt="HEDEX" className='w-[50px]' />
                                <span className='text-grad'>HEDEX</span> <span className='text-gray-300 ml-3'> All Copyright reserved. © 2024</span>
                            </div>
                        </div>
                        <div className="socials flex  gap-3 w-full lg:w-auto justify-center">
                            <a href="https://x.com/hedexbot?s=21&t=4O7fqwfoOCUDViGWXA1J0w" target={"_blank"}  rel="noreferrer">
                                <img src="/asset/x.PNG" alt="X (formerly Twitter)" className='w-[40px]' />
                            </a>
                            <a href="https://t.me/hedexbotgateway" target={"_blank"}  rel="noreferrer">
                                <img src="/asset/telegram.PNG" alt="Telegram" className='w-[40px]' />
                            </a>
                            <a href="https://www.youtube.com/@Hedexbot" target={"_blank"}  rel="noreferrer">
                                <img src="/asset/youtube.PNG" alt="Youtube" className='w-[40px]' />
                            </a>
                            <a href="mailto:info@hedexbot.com" target={"_blank"}  rel="noreferrer">
                                <img src="/asset/mail.PNG" alt="Email" className='w-[40px]' />
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
