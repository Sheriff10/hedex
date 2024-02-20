import React from 'react'
import Container from './Container'
import { useInView } from 'react-intersection-observer'

export default function Icons() {
    const imgFunc = (img, name, link) => {
        return { img, name, link }
    }
    const imgArr = [
        imgFunc("/asset/dex.PNG", "Dexscreener", "https://dexscreener.com/ethereum/0xfcba8327ab52cc154a9fefcb0e5e0f3be08ba120"),
        imgFunc("/asset/uniswap.PNG", "Uniswap", "https://app.uniswap.org/swap?chain=eth&outputCurrency=0xdFB03da57a3C56124c72a47729A1d0ED54D38FF5"),
        imgFunc("/asset/x.PNG", "Twitter", "https://x.com/hedexbot?s=21&t=4O7fqwfoOCUDViGWXA1J0w"),
        imgFunc("/asset/telegram.PNG", "Telegram", "https://t.me/hedexbotgateway"),
    ]

    const [ref, inView] = useInView({
        threshold: 0.2
    });

    return (
        <div className="wrap bg-grad"
        // style={{ backgroundImage: "url('../asset/twitter.jpg') no-repeat", backgroundSize: "contain" }}
        >
            <div className=" backdrop-blur-xl bg-black bg-opacity-80 py-3" ref={ref}>
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center  items-center">
                        {imgArr.map((img, index) => (
                            <div className={`wrap text-center ${inView ? "fadeIn" : "fadeOut"}`} key={index} >
                                <a href={img.link} target="_blank"  rel="noreferrer">
                                    <img src={img.img} alt={img.img} className="w-[70px] lg:w-[100px] mx-auto" />
                                    <span className='font-bold text-white'>{img.name}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
}
