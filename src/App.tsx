// import { useState } from 'react'
import './App.css'

import Title from './components/Title/Title';
// import Open from './components/Open/Open';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import { useEffect, useRef } from 'react';
import circle from "./assets/circle.svg";
import { AnimationControls, motion, useAnimation, useInView } from 'framer-motion';
import Projects from './components/Projects/Projects';
import Nav from './components/Nav/Nav';

function App() {
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

  return (
    <>
      <Circles mainControls={mainControls} />
      <div className="flex flex-col w-screen relative z-20 overflow-hidden
        lg:flex-row">
        <Nav />
        <div className="pt-10 md:pt-0">
          <section ref={titleRef} id="Title" className="block">
            <Title />
          </section>

          <section ref={introRef} id="Intro" className="block">
            <Intro />
          </section>

          <section ref={skillsRef} id="Skills" className="block">
            <Skills />
          </section>

          <section ref={projectsRef} id="Projects" className="block">
            <Projects />
          </section>
        </div>

      </div>

      {/* <div className="h-screen w-screen flex flex-col">
        <div className="block h-fit w-screen bg-light">
          <div className="block h-[10vh] w-full bg-teal hover:h-[20vh] duration-500"></div>
          <div className="block h-[10vh] w-full bg-purple-400"></div>
        </div>
        <div className="block w-full flex-grow">
          <div className="block h-full w-full bg-gold"></div>
        </div>
      </div> */}
    </>
  )
}

interface CircleProps {
  mainControls: AnimationControls;
}

const Circles = ({ mainControls }: CircleProps) => {
  const transition = {
    type: "spring",
    damping: 40,
    stiffness: 100,
    restDelta: 0.001
  };
  return (
    <>
      <motion.div className="fixed top-1/2 left-1/2"
        variants={{
          open: { opacity: 0, translateX: "-10vw", translateY: "20vh" },
          title: { opacity: 1, translateX: "5vw", translateY: "10vh", scale: 1 },
          intro: { opacity: 1, translateX: "-10vw", translateY: "5vh", scale: 1.2 },
          skills: { opacity: 1, translateX: "15vw", translateY: 0, scale: 1.5 },
          projects: { opacity: 1, translateX: 0, translateY: "10vh", scale: 1.2 },
        }}
        initial="open"
        animate={mainControls}
        transition={transition}
      >
        <img src={circle} className="scale-[3] md:scale-[3] opacity-[25%] -z-20" />
      </motion.div>
      <motion.div className="fixed top-1/2 left-1/2"
        variants={{
          open: { opacity: 0, translateX: "-5vw", translateY: "-5vh" },
          title: { opacity: 1, translateX: "2vw", translateY: 0, scale: 1 },
          intro: { opacity: 1, translateX: "8vw", translateY: "4vh", scale: 1.2 },
          skills: { opacity: 1, translateX: "-5vw", translateY: 0, scale: 0.8 },
          projects: { opacity: 1, translateX: 0, translateY: "-5vh", scale: 1 }
        }}
        initial="open"
        animate={mainControls}
        transition={transition}
      >
        <img src={circle} className="scale-[5] md:scale-[6] opacity-[15%] -z-20" />
      </motion.div>
    </>
  )
}

export default App
