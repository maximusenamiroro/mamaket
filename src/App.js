import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css'


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;