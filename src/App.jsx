import { useState } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomImage from './components/BottomImage'

function App() {
  return (
    <div className='app-div'>
      <div className='app-top-container'>
        <Header />
        <MainContainer />
        <BottomImage />
      </div>
      <Footer />
    </div>
  )
}

export default App
