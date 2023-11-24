import { useState } from 'react';
import Logos from "../images/Logos.png";
import React from 'react'
import './Modal.css'
import Header from '../Header';


export const Modal = ({ onSubmit, onCancel, onClose, children }) => {

  const [modalOpen, setModalOpen] = useState(false)
  const handleButtonClick = () => {
    setModalOpen(false)
  }

  return (
    <div>
      {modalOpen && (
       <div className='modal-container' onClick={(e) => {
        if (e.target.className === 'modal-container') {
          handleButtonClick(e);
        }
      }}>
  

          <div className='modal'>

            <div className='modal-header'>
              <div><img className="logos" src={Logos} alt="" /></div>

              <div> <p className='close'>&times;</p></div>

            </div>

            <div className='Form'>
              <div className='first-name'>
                <div><label htmlFor="First Name"
                  style={{
                    fontSize: '20px'
                  }}>First Name</label></div>

                <div><input type="text"
                  name="FirstName"
                  placeholder='Enter your first name'
                  style={{
                    fontSize: '20px',
                    height: '40px',
                    width: '780px', // Adjust the width value as needed
                    padding: '5px',
                    borderRadius: '15px',
                    border: '1px solid #ccc',
                  }}
                /></div>
              </div>
             
              <div className='Last-name'
              style={{
                paddingTop:'20px'
              }}>
                <div><label htmlFor="Last Name"
                  style={{
                    fontSize: '20px',
                    
                  }}>Last Name</label></div>

                <div><input type="text"
                  name="LastName"
                  placeholder='Enter your Last name'
                  style={{
                    fontSize: '20px',
                    height: '40px',
                    width: '780px', // Adjust the width value as needed
                    padding: '5px',
                    borderRadius: '15px',
                    border: '1px solid #ccc',
                  }}
                /></div>
              </div>

              <div className='Email'
              style={{
                paddingTop:'20px'
              }}>
                <div><label htmlFor="Email"
                  style={{
                    fontSize: '20px',
                    
                  }}>Email</label></div>

                <div><input type="text"
                  name="Email"
                  placeholder='Enter your Email'
                  style={{
                    fontSize: '20px',
                    height: '40px',
                    width: '780px', // Adjust the width value as needed
                    padding: '5px',
                    borderRadius: '15px',
                    border: '1px solid #ccc',
                  }}
                /></div>
              </div>

              <div className='Email' style={{ paddingTop: '20px' }}>
      <div>
        <label htmlFor="Email" style={{ fontSize: '20px' }}>
          Email
        </label>
      </div>
      <div>
        <select
          id="selectEmail"
          name="Email"
          style={{
            fontSize: '20px',
            height: '57px',
            width: '795px', // Adjust the width value as needed
            padding: '5px',
            borderRadius: '15px',
            border: '1px solid #ccc',
            fontSize: '16px', // Adjust the font size as needed
            // Add more styles as needed
          }}
        >
          <option value="option1"
          style={{
            fontSize: '20px'
          }}>Option 1</option>
          <option value="option2"
          style={{
            fontSize: '20px'
          }}>Option 2</option>
          <option value="option3"
          style={{
            fontSize: '20px'
          }}>Option 3</option>
        </select>
      </div>
    </div>

            </div>


            <div className='modal-footer'>
              <button className='bttSubmit' onClick={handleButtonClick}>Submit Form</button>
            </div>
          </div>

        </div>
      )}
      <Header setModalOpen={setModalOpen} />
    </div>
  );
}
