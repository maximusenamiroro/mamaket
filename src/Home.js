import React from 'react'
import Header from './components/Header'
import Sectioncart from './components/Sectioncart'
import Culture from './components/Culture'
import Products from './components/Products'
import Faq from './components/Faq'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'
import { Modal } from './components/Modal/Modal'

const Home = () => {
  return (
    <div>
    <Header/>
    <Sectioncart/>
    <Culture/>
    <Products/>
    <Faq/>
    <ComingSoon/>
    <Footer/>
    <Modal/>
    </div>
  )
}

export default Home