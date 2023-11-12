import { useState } from 'react';

import React from 'react'
import './Modal.css'
import Header from '../Header';


export const Modal = ({children}) => {
  const [modalOpen, setModalOpen] = useState(false)
  return(
  <div>
    {modalOpen && (
     <div className='modal-container'>
      
        <div className='modal'>   
            <div className='modal-header'>
              <p className='close'>&times;</p>  
            </div>
            <div className='modal-content'>{children}</div>
            <div className='modal-footer'>
                <button className='btSubmit'>Submit</button>
            </div>
        </div>
       
        </div>
        )}
        <Header setModalOpen={setModalOpen}/>
        </div>
  );
}
