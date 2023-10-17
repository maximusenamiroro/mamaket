import React from "react";
import "../style/ComingSoon.css";
import Android from './images/g4038.png';
import Apple from './images/Badge.png'
import Phone from './images/phone.jpg'
import Circle from './images/circle.png'

const ComingSoon = () => {
  return (
    <div className="contain">
      <div className="parent">
        <div className="child1">
          <h3>Coming soon on App Store and Google Play Store</h3>
          <p>
            For us, helping our customer to fulfill their needs is number one so
            that’s why we are available on every platform.
          </p>
          <div className="imag">
            <img src={Apple} alt=''/>
            <img src={Android} alt=''/>
          </div>
          <button>Join mamaket</button>
        </div>
        <div className="child2">
          <img className="circle" src={Circle} alt=''/>
          <img className="phone" src={Phone} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
