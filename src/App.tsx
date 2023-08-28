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


function App() {
  // const openRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  // const openInView = useInView(openRef, { once: false });
  const titleInView = useInView(titleRef, { once: false });
  const introInView = useInView(introRef, { once: false });
  const skillsInView = useInView(skillsRef, { once: false });
  const projectsInView = useInView(projectsRef, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (titleInView) {
      mainControls.start("title");
    }
    else if (introInView) {
      mainControls.start("intro");
    }
    else if (skillsInView) {
      mainControls.start("skills");
    }
    else if (projectsInView) {
      mainControls.start("projects");
    }
  }, [titleInView, introInView, skillsInView, projectsInView])

  const transition = {
    type: "spring",
    damping: 40,
    stiffness: 120,
    restDelta: 0.001
  };

  return (
    <>
      <div className="bg-background h-fit w-screen selection:bg-teal selection:text-dark-800 scroll-smooth flex flex-col no-scrollbar">
        {/* <div ref={openRef}>
          <Open />
        </div> */}

        <motion.div className="fixed top-1/2 left-1/2"
          variants={{
            open: { opacity: 0, translateX: "-10vw", translateY: "20vh" },
            title: { opacity: 1, translateX: "5vw", translateY: 0, scale: 1 },
            intro: { opacity: 1, translateX: "-10vw", translateY: "-10vh", scale: 1.2 },
            skills: { opacity: 1, translateX: "15vw", translateY: 0, scale: 1.5 },
            projects: { opacity: 1, translateX: 0, translateY: "10vh", scale: 1.2},
          }}
          initial="open"
          animate={mainControls}
          transition={transition}
        >
          <img src={circle} className="scale-[3] md:scale-[3] opacity-[40%] -z-20" />
        </motion.div>
        <motion.div className="fixed top-1/2 left-1/2"
          variants={{
            open: { opacity: 0, translateX: "-5vw", translateY: "-5vh" },
            title: { opacity: 1, translateX: "2vw", translateY: 0, scale: 1 },
            intro: { opacity: 1, translateX: "8vw", translateY: "4vh", scale: 1.2 },
            skills: { opacity: 1, translateX: "-5vw", translateY: 0, scale: 0.8 },
            projects: { opacity: 1, translateX: 0, translateY: "-5vh", scale: 1}
          }}
          initial="open"
          animate={mainControls}
          transition={transition}
        >
          <img src={circle} className="scale-[5] md:scale-[6] lg:scale-[7] opacity-[20%] -z-20" />
        </motion.div>

        <div ref={titleRef} className="" />
        <Title />

        <div ref={introRef} />
        <Intro />

        <div ref={skillsRef} />
        <Skills />

        <div ref={projectsRef} />
        <Projects />

      </div>
    </>
  )
}

export default App
