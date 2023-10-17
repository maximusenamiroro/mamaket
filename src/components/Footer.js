import React from 'react'
import '../style/Footer.css'
import Logo from './images/Logo.png'
import Insta from './images/insta.png'
import Tweet from './images/tweet.png'
import Link from './images/link.png'
import Face from './images/face.png'


const Footer = () => {
  return (
    <div className='foot'>
      <div className='sect'>
         <img src={Logo} alt='Logo'/>
         <p>Powered by Mamaket, Inc</p>
         <div className='icons'>
          <img src={Link} alt=''/>
          <img src={Tweet} alt=''/>
          <img src={Face} alt=''/>
          <img src={Insta} alt=''/>
         </div>
      </div>
    </div>
  )
}

export default Footer