// import { useState } from 'react'
import './App.css'

import Title from './components/Title';
import Open from './components/Open';
import Intro from './components/Intro';
import Skills from './components/Skills';


function App() {
  return (
    <>
      <div className=" bg-dark-700 h-fit w-screen selection:bg-teal selection:text-dark-800 scroll-smooth flex flex-col no-scrollbar">
        <Open />

        <Title />
        <Intro />
        <Skills />
      </div>
    </>
  )
}

export default App
