import React from 'react'
import '../style/Culture.css'
import Cameroon from '../components/anima-images/Cameroon.png';
import Egypt from '../components/anima-images/Egypt.png';
import Ghana from '../components/anima-images/Ghana.png';
import Ghanas from '../components/anima-images/Ghanas.png';
import IvoryCoast from '../components/anima-images/IvoryCoast.png';
import Jamaica from '../components/anima-images/Jamaica.png';
import Kenya from '../components/anima-images/Kenya.png';
import Morocco from '../components/anima-images/morocco.png';
import Nigeria from '../components/anima-images/Nigeria.png';
import Rwanda from '../components/anima-images/Rwanda.png';
import Somalia from '../components/anima-images/Somalia.png';
import SouthAfrica from '../components/anima-images/SouthAfrica.png';
import Tanzania from '../components/anima-images/Tanzania.png';
import Tunisia from '../components/anima-images/Tanzania.png';
import Uganda from '../components/anima-images/Uganda.png';
import Zimbabwe from '../components/anima-images/Zimbabwe.png';

const Culture = () => {
  return (
    <div className='body'>
        <div className='countries'>
            <div className='countries-slide'>
                <img className='cameroon' src={Cameroon} alt='' />
                <img src={Egypt} alt='' />
                <img className='ghana' src={Ghana} alt='' />
                <img src={Ghanas} alt='' />
                <img className='ivory' src={IvoryCoast} alt='' />
                <img src={Jamaica} alt='' />
                <img src={Kenya} alt='' />
                <img src={Morocco} alt='' />
            </div>
        <div className='countries2'>
            <div className='countries-slide2'>
            <img src={Nigeria} alt='' />
                <img className='rwanda' src={Rwanda} alt='' />
                <img src={Somalia} alt='' />
                <img src={SouthAfrica} alt='' />
                <img className='Tanzania' src={Tanzania} alt='' />
                <img src={Tunisia} alt='' />
                <img src={Uganda} alt='' />
                <img src={Zimbabwe} alt='' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Culture