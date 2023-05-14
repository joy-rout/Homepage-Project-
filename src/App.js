import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MainSlider from './Components/mainSlider'
import TipSlider from './Components/tipsSlider'
import Articles from './Components/Articles'
import Books from './Components/Books'
import Newsletter from './Components/Newsletter'
import ChatBot from './Components/ChatBot'
import LocateTherpists from './Components/LocateAtherapist'
import MoodTracker from './Components/MoodTracker'
import Slide from './Components/slideDown'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainSlider/>
      <TipSlider/>
      <MoodTracker/>
      <Articles/>
      <Books/>
      <Newsletter/>
      <ChatBot/>
      {/* <LocateTherpists/> */}
      

    </div>
  )
}

export default App