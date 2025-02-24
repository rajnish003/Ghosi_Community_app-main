import React from 'react'
import Hero_img from '../components/Hero_img'
import Latest_post from '../components/Latest_post'
import Aboutghosi from '../components/Aboutus'
import Youth_vocal from '../components/Youth_vocal'
import Magazines from '../components/Magazines'
import Homes_cards from '../components/Homes_cards'

const Home = () => {
  return (
    <div>
        <Latest_post/>
        <Hero_img/>
        <Aboutghosi/>
        <Youth_vocal/>
        <Magazines/>
        <Homes_cards/>
    </div>
  )
}

export default Home
