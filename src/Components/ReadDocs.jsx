import React from 'react'

export default function ReadDocs() {
    return (
        <div className="wrap bg-sec">
            <div className="bg-con text-center bg-white bg-opacity-10 backdrop-blur-3xl py-16">
                <div className="text-2xl lg:text-3xl font-extrabold text-white uppercase">
                    <span>Step By Step guide on how <span className='text-grad'>HEDEX BOTS</span> Works</span><br />
                    <span>
                        checkout out Bot <span className='text-grad'>Documentation</span>
                    </span>
                </div>

                <div className="btn-wrap mt-5">
                    <button className=' rounded-xl bg-slate-100 py-2 text-black px-5'>Read Documentation</button>
                </div>
            </div>
        </div>
    )
}
