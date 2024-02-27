import React from 'react'

export default function ReadDocs() {
    return (
        <div className="wrap bg-sec">
            <div className="bg-con text-center bg-white bg-opacity-10 backdrop-blur-3xl py-16">
                <div className="text-2xl lg:text-3xl font-extrabold text-white uppercase">
                    <span>HOW DO HEDEX <span className='text-grad'>BOTS WORK</span>? CHECKOUT <span className='text-grad'>OUR BOT</span> <br /> DOCUMENTATION PAGES</span><br />
                    {/* <span>
                        checkout out Bot <span className='text-grad'>Documentation</span>
                    </span> */}
                </div>

                <div className="btn-wrap mt-5">
                    <a href="https://hedexbot.gitbook.io/hedex-bot/">
                        <button className=' rounded-xl bg-slate-100 py-2 text-black px-5'>Read Documentation</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
