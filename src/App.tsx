// import { useState } from 'react'
import './App.css'

import Title from './components/Title/Title';
import About from "./components/About/About";
import Open from './components/Open/Open';


function App() {
  return (
    <div className=" bg-dark-700">
      <Open />
      <Title />
      <About />
    </div>
  )
}

export default App
