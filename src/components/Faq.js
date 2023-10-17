import React from 'react';
import './script.js'
import '../style/Faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

const Faq = () => {

  let accordions = document.querySelectorAll('.accordion-container .accordion')

accordions.forEach(acco => {
    acco.onclick = () =>{
        acco.classList.add('active');    
    } 
})

  return (
    <div>
        
     <div className="container">

     <h1 className="heading">FAQ</h1>

      <div className='accordion-container'>

      
        <div className="accordion">
          <div className="accordion-heading">
           <h3>Acordion heading</h3>
           <i><FontAwesomeIcon icon={faAngleDown} /></i>
          </div>
          <p className='accordion-content'>A marketplace is a platform or an environment where buyers and sellers come together to engage in commercial transactions. The marketplace provides a venue for sellers to offer their goods or services to potential customers, who can compare prices and quality, make purchases, and provide feedback. Marketplaces can be physical locations, such as farmers markets, or online platforms like Mamaket. In recent years, there has been a significant increase in the number of online marketplaces, providing buyers and sellers with greater access to a wider range of products and services, and enabling them to transact business more efficiently and conveniently. Basically, what you need is here just type the search.</p>
        </div>

        <div className="accordion">
          <div className="accordion-heading">
           <h3>Acordion heading</h3>
           <i><FontAwesomeIcon icon={faAngleDown} /></i>
          </div>
          <p className='accordion-content'>A marketplace is a platform or an environment where buyers and sellers come together to engage in commercial transactions. The marketplace provides a venue for sellers to offer their goods or services to potential customers, who can compare prices and quality, make purchases, and provide feedback. Marketplaces can be physical locations, such as farmers markets, or online platforms like Mamaket. In recent years, there has been a significant increase in the number of online marketplaces, providing buyers and sellers with greater access to a wider range of products and services, and enabling them to transact business more efficiently and conveniently. Basically, what you need is here just type the search.</p>
        </div>
     </div>

    </div>

    </div>
  )
}

export default Faq