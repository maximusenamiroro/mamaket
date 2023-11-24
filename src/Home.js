import React from 'react'
import Sectioncart from './components/Sectioncart'
import Culture from './components/Culture'
import Products from './components/Products'
import Accordion from './components/Accordion'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'
import { Modal } from './components/Modal/Modal'

const Home = () => {
  return (
    <div>
    <Modal/>
    <Sectioncart/>
    <Culture/>
    <Products/>
    <Accordion/>
    <ComingSoon/>
    <Footer/>
    
    </div>
  )
}

export default Home