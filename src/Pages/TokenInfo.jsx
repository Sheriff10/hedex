import React from 'react'
import Abt from '../Components/TokenInfo/Abt'
import HTB from '../Components/TokenInfo/HTB'
import Tokenomics from '../Components/TokenInfo/Tokenomics'
import Roadmap from '../Components/TokenInfo/Roadmap'

export default function TokenInfo() {
    return (
        <>
            <Abt />
            <Tokenomics />
            <HTB />
            <Roadmap />
        </>
    )
}
