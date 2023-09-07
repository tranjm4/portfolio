import React, { useEffect, useRef, useState } from 'react'
import SlideAppear from '../Animations/SlideAppear';
import { motion, useAnimation, useInView } from "framer-motion";

import cpp_logo from "../../assets/logos/cpp_logo.svg";
import react_logo from "../../assets/logos/react_logo.svg";
import python_logo from "../../assets/logos/python_logo.svg";
import typescript_logo from "../../assets/logos/typescript_logo.svg";
import html_logo from "../../assets/logos/html_logo.svg";
import css_logo from "../../assets/logos/css_logo.svg"
import numpy_logo from "../../assets/logos/numpy_logo.svg";
import tailwind_logo from "../../assets/logos/tailwind_logo.svg";
import express_logo from "../../assets/logos/express_logo.svg";
import nodejs_logo from "../../assets/logos/nodejs_logo.svg";
import pytorch_logo from "../../assets/logos/pytorch_logo.svg"
import git_logo from "../../assets/logos/git_logo.svg"
import TextBoxReveal from '../Animations/TextBoxReveal';
import Reveal from '../Animations/Reveal';

const SkillsText: React.FC = () => {
    const description = (
        <>
            It's best to be prepared for as many tasks as possible :)
        </>
    )

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div ref={ref} className="relative h-fit w-fit py-5 md:pr-10"
            initial="hidden"
            animate={mainControls}
        >
            <TextBoxReveal className="absolute w-[100%] h-[100%] lg:w-full lg:h-full top-[0%] left-[-10%]
                        bg-gradient-to-br from-purple-800 to-transparent via-transparent via-70%" initialScale="0.5" offsetX="-20vw" offsetY="10vh" />
            <TextBoxReveal className="absolute w-[80%] h-[80%] top-[30%] left-[0%]
                        bg-gradient-to-br from-purple-800 to-transparent via-transparent via-70%" initialScale="0.5" offsetX="10vw" offsetY="-10vh" />
            <TextBoxReveal className="absolute w-[80%] h-[80%] top-[10%] left-[30%] lg:left-[25%]
                        bg-gradient-to-br from-purple-800 to-transparent via-transparent via-70%" initialScale="2" offsetX="10vw" offsetY="-5vh" />

            <SlideAppear className="w-full md:w-full" offsetX="10vw" offsetY="10vh" once={true}>
                <Reveal className="">
                    <h2 className="text-lg text-light z-20 font-thin
                            lg:text-2xl xl:text-3xl">

                        {description}

                    </h2>
                </Reveal>
            </SlideAppear>

        </motion.div>

    )
}

interface EntryProps {
    children: React.ReactNode;
}

const SkillEntry: React.FC<EntryProps> = ({ children }: EntryProps) => {
    return (
        <motion.div className="aspect-square bg-gradient-to-br from-purple-800 to-transparent via-transparent via-50% 
            p-5 flex justify-center items-center rounded-xl"
            variants={{
                hover: {
                    backgroundColor: "#6366f1",
                    scale: 1.1,
                    borderRadius: "30px",
                },
                initial: {
                }

            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
            whileHover="hover"
            initial="initial"
        >
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    )
}

const Skills: React.FC = () => {
    const title = "My Toolbox";
    const [currentOpen, setCurrentOpen] = useState(-1);
    const handleTabClick = (index: number) => {
        if (currentOpen == index) {
            setCurrentOpen(-1);
        }
        else {
            setCurrentOpen(index);
        }
        console.log(currentOpen);
    }

    const languageControls = useAnimation();
    const frameworkControls = useAnimation();
    const miscControls = useAnimation();
    useEffect(() => {
        if (currentOpen === 0) {
            languageControls.start("open")
        }
        else {
            languageControls.start("closed");
        }
    }, [currentOpen])

    useEffect(() => {
        if (currentOpen === 1) {
            frameworkControls.start("open");
        }
        else {
            frameworkControls.start("closed");
        }
    }, [currentOpen])

    useEffect(() => {
        if (currentOpen === 2) {
            miscControls.start("open");
        }
        else {
            miscControls.start("closed");
        }
    })

    return (
        <>
            <div className="min-h-fit h-[70vh] w-full mb-[20vh] p-10 lg:p-24 xl:px-[10%] 2xl:px-[20%]">
                <SlideAppear className="w-full z-20" offsetX="10vw" offsetY="-5vh" once={true}>
                    <h1 className="text-teal my-5 font-extrabold text-6xl md:text-7xl z-20 relative">
                        {title}
                    </h1>
                </SlideAppear>
                <SkillsText />
                <div className="flex justify-center items-center my-5 xl:justify-start">

                    <div className="w-full h-auto max-w-[400px] md:max-w-[700px] lg:max-w-[1000px]">
                        <div className="w-full block">
                            <button onClick={() => handleTabClick(0)}
                                className="w-full p-3 hover:bg-purple-400/70 duration-300"
                            >
                                <h2 className="text-left font-bold text-teal text-3xl lg:text-5xl">Languages</h2>
                            </button>
                            <hr className="border-teal border-2 lg:border-4"></hr>
                            <div className="overflow-hidden h-fit w-fit">

                                <motion.div
                                    className="origin-top"
                                    variants={{
                                        closed: {
                                            height: 0,
                                            scaleY: 0,
                                            opacity: 0,
                                            translateY: "-100%"
                                        },
                                        open: {
                                            height: "450px",
                                            scaleY: 1,
                                            opacity: 1,
                                            translateY: 0
                                        }
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    initial="closed"
                                    animate={languageControls}
                                >
                                    <div className="grid h-full grid-cols-2 md:grid-cols-3 gap-x-5 my-5 py-10 px-10 [&>*]:aspect-square [&>*]:w-[120px] [&>*]:md:w-[160px]">


                                        <SkillEntry>
                                            <img src={python_logo} />
                                        </SkillEntry>
                                        <SkillEntry>
                                            <img src={cpp_logo} />
                                        </SkillEntry>
                                        <SkillEntry>
                                            <img src={typescript_logo} />
                                        </SkillEntry>
                                        <SkillEntry>
                                            <img src={html_logo} />
                                        </SkillEntry>
                                        <SkillEntry>
                                            <img src={css_logo} />
                                        </SkillEntry>
                                    </div>
                                </motion.div>
                            </div>

                        </div>

                        <div className="w-full block">
                            <button onClick={() => handleTabClick(1)}
                                className="w-full p-3 hover:bg-purple-400/70 duration-300"
                            >
                                <h2 className="text-left font-bold text-teal text-3xl lg:text-5xl">Frameworks</h2>
                            </button>
                            <hr className="border-teal border-2 lg:border-4"></hr>
                            <div className="overflow-hidden h-fit w-fit">

                                <motion.div
                                    className="origin-top"
                                    variants={{
                                        closed: {
                                            height: 0,
                                            scaleY: 0,
                                            opacity: 0,
                                            translateY: "-100%"
                                        },
                                        open: {
                                            height: "450px",
                                            scaleY: 1,
                                            opacity: 1,
                                            translateY: 0
                                        }
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    initial="closed"
                                    animate={frameworkControls}
                                >
                                    <div className="grid h-full grid-cols-2 md:grid-cols-3 gap-x-5 my-5 py-10 px-10 [&>*]:aspect-square [&>*]:w-[120px] [&>*]:md:w-[160px]">


                                        <SkillEntry>
                                            <img src={react_logo} />
                                        </SkillEntry>
                                        <SkillEntry>
                                            <img src={express_logo} />
                                        </SkillEntry>
                                        <SkillEntry>
                                            <img src={nodejs_logo} />
                                        </SkillEntry>
                                        <SkillEntry>
                                            <img src={tailwind_logo} />
                                        </SkillEntry>
                                    </div>
                                </motion.div>
                            </div>

                        </div>

                        <div className="w-full block">
                            <button onClick={() => handleTabClick(2)}
                                className="w-full p-3 hover:bg-purple-400/70 duration-300"
                            >
                                <h2 className="text-left font-bold text-teal text-3xl lg:text-5xl">Miscellaneous</h2>
                            </button>
                            <hr className="border-teal border-2 lg:border-4"></hr>
                            <div className="overflow-hidden h-fit w-fit">

                                <motion.div
                                    className="origin-top"
                                    variants={{
                                        closed: {
                                            height: 0,
                                            scaleY: 0,
                                            opacity: 0,
                                            translateY: "-100%"
                                        },
                                        open: {
                                            height: "450px",
                                            scaleY: 1,
                                            opacity: 1,
                                            translateY: 0
                                        }
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    initial="closed"
                                    animate={miscControls}
                                >
                                    <div className="grid h-full grid-cols-2 md:grid-cols-3 gap-x-5 my-5 py-10 px-10 [&>*]:aspect-square [&>*]:w-[120px] [&>*]:md:w-[160px]">

                                        <SkillEntry>
                                            <img src={numpy_logo} />
                                        </SkillEntry>
                                        <SkillEntry>
                                            <img src={git_logo} />
                                        </SkillEntry>
                                        <SkillEntry>
                                            <img src={pytorch_logo} />
                                        </SkillEntry>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills