import React from 'react'
import Sectioncart from './components/Sectioncart'
import Culture from './components/Culture'
import Products from './components/Products'
import Faq from './components/Faq'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'
import { Modal } from './components/Modal/Modal'
import Header from './components/Header'

const Home = () => {
  return (
    <div>
    <Modal/>
    <Sectioncart/>
    <Culture/>
    <Products/>
    <Faq/>
    <ComingSoon/>
    <Footer/>
    
    </div>
  )
}

export default Home