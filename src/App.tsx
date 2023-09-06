// import { useState } from 'react'
import './App.css'

import Title from './components/Title/Title';
// import Open from './components/Open/Open';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import { useEffect, useRef } from 'react';
import circle from "./assets/circle.svg";
import { motion, useAnimation, useInView } from 'framer-motion';
import Projects from './components/Projects/Projects';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <section id="Title">
        <Title />
      </section>

      <section id="Intro">
        <Intro />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Projects">
        <Projects />
      </section>

    </div>
  )
}

export default App
