import React from 'react'
import Container from './Container'

export default function Icons() {
    const imgFunc = (img, name, link) => {
        return { img, name, link }
    }
    const imgArr = [
        imgFunc("/asset/dex.PNG", "Dexscreener", "https://dexscreener.com/ethereum/0xfcba8327ab52cc154a9fefcb0e5e0f3be08ba120"),
        imgFunc("/asset/uniswap.PNG", "Uniswap", "https://app.uniswap.org/swap?chain=eth&outputCurrency=0xdFB03da57a3C56124c72a47729A1d0ED54D38FF5"),
        imgFunc("/asset/cmc.PNG", "CMC", "#"),
        imgFunc("/asset/github.PNG", "Github", "#"),
    ]
    return (
        <div className="wrap bg-grad"
        // style={{ backgroundImage: "url('../asset/twitter.jpg') no-repeat", backgroundSize: "contain" }}
        >
            <div className=" backdrop-blur-xl bg-black bg-opacity-80 py-3">
                <Container>
                    <div className="grid grid-cols-4 gap-4 justify-center items-center">
                        {imgArr.map((img, index) => (
                            <div className="wrap text-center" key={index}>
                                <a href={img.link}>
                                    <img src={img.img} alt={img.img} className="w-[50px] lg:w-[100px] mx-auto" />
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
