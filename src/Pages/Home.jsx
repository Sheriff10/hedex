import React from 'react'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Icons from '../Components/Icons'
import Intro from '../Components/Intro'
import OurBots from '../Components/OurBots'
import PremiumBot from '../Components/PremiumBot'
import ReadDocs from '../Components/ReadDocs'
import TokenInfo from './TokenInfo'

export default function Home() {
  return (
    <div className="wrap">
        <Header />
        <Intro />
        <Icons />
        <About />
        <OurBots />
        <PremiumBot />
        <ReadDocs />
        <TokenInfo />
        <Footer />
    </div>
  )
}
