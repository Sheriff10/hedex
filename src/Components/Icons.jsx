import React from 'react'
import Container from './Container'

export default function Icons() {
    const imgFunc = (img, name, link) => {
        return { img, name, link }
    }
    const imgArr = [
        imgFunc("/asset/dex.PNG", "Dexscreener", "#"),
        imgFunc("/asset/uniswap.PNG", "Uniswap", "#"),
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
                                <img src={img.img} alt={img.img} className="w-[50px] lg:w-[100px] mx-auto" />
                                <span className='font-bold text-white'>{img.name}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
}
