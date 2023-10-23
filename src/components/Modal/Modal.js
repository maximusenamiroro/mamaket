import React from 'react'
import './Modal.css'

export const Modal = () => {
  return( <div className='modal-container'>
        <div className='modal'>   
            <div className='modal-header'>
              <p className='close'>&times;</p>  
            </div>
            <div className='modal-content'>
              <h1>this is a modal title</h1>

            </div>
            <div className='modal-footer'>
                <button className='btSubmit'>Submit</button>
            </div>
        </div>
        </div>
  );
}
