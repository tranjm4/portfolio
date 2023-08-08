// import { useState } from 'react'
import './App.css'

import Title from './components/Title';
import Open from './components/Open';
import Intro from './components/Intro/Intro';
import StickyEntry from './components/Animations/StickyEntry';
import Skills from './components/Skills';


function App() {
  return (
    <>
      <div className=" bg-dark-700 h-fit w-screen scroll-smooth flex flex-col no-scrollbar">
        <Open />

        <StickyEntry>
          <Title />
        </StickyEntry>

        <StickyEntry>
          <Intro />
        </StickyEntry>

        <StickyEntry>
          <Skills />
        </StickyEntry>
      </div>
    </>
  )
}

export default App
