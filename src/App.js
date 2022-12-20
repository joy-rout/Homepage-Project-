import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MainSlider from './Components/mainSlider'
import TipSlider from './Components/tipsSlider'
import Articles from './Components/Articles'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainSlider/>
      <TipSlider/>
      <Articles/>
    </div>
  )
}

export default App