import React from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
       <BrowserRouter>
    
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element={<Home />} />
           
        </Routes>
     
   
  </BrowserRouter>

      
    </div>
  )
}

export default App
