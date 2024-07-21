import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home/Home'
import Create from './Create/Create'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './Update/Update'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Update/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}
import { formatProdErrorMessage } from '@reduxjs/toolkit'

export default App
