import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MainSlider from './Components/mainSlider'
import TipSlider from './Components/tipsSlider'
import Articles from './Components/Articles'
import Books from './Components/Books'
import Newsletter from './Components/Newsletter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainSlider/>
      <TipSlider/>
      <Articles/>
      <Books/>
      <Newsletter/>
    </div>
  )
}

export default App