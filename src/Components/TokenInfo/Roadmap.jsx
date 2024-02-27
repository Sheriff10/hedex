import React from 'react'
import Container from '../Container'

export default function Roadmap() {
  const roadmap = [
    "Hedex Wallet Hunter Launch",
    "Hedex Multi Wallet tracker launch",
    "Hedex Token Launch",
    "Website Update",
    "Wallet Hunter Optimisations",
    "Token Holder Gain Utility Access",
    "GitBook Updates",
    "Wallet Multi Tracker Optimisations",
    "Partnerships",
    "Hedex Revenue Share",
    "More to come.."
  ]

  return (
    <div className="wrap py-16">
      <Container>
        <div className="heading flex flex-wrap justify-between items-center mb-5">
          <span className="lg:text-5xl text-3xl py-4 text-white font-bold text-fierce">
            Hedex <span className="text-grad">Roadmap</span>
          </span>
        </div>

        <div className="body">
          <div className="grid lg:grid-cols-5 gap-10">
            {roadmap.map((i, index) => (
              <div className="wrap bg-grad pl-2 text-sm" key={index}>
                <div className="bg-con bg-gray-800  text-gray-300 p-5 px-3 flex gap-5 items-center h-full">
                  <span className='bg-grad flex rounded-full px-4 py-1 text-lg text-black'>{index + 1}</span> <span className='font-bold'>{i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
