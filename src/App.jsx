import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyAirtime from './pages/BuyAirtime'
import BuyData from './pages/BuyData'
import {Toaster} from 'react-hot-toast'
import MyContacts from './pages/MyContacts'


function App() {

  return (
  <div>
    <Toaster />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy-airtime" element={<BuyAirtime />} />
      <Route path='/buy-data' element={<BuyData />} />
      <Route path="/my-contacts" element={<MyContacts />} />
    </Routes>
  </div>
   )
}

export default App
