import React from 'react'

export default function GradientText({ text }) {
    return (
        <div className="flex mb-3">
            <div className="bg-grad rounded-3xl p-[1px]">
                <div className="bg-sec rounded-3xl ">
                    <span className='text-grad text-sm p-2 rounded-3xl bg-sec'>{text}</span>
                </div>
            </div>
        </div>
    )
}
