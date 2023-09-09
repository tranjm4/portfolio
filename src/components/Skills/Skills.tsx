import React, { useEffect, useState } from 'react'
import SlideAppear from '../Animations/SlideAppear';
import Text from '../Supplemental/Text';
import { AnimationControls, motion, useAnimation } from "framer-motion";

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


interface EntryProps {
    children: React.ReactNode;
    name: string;
}

const SkillEntry: React.FC<EntryProps> = ({ children, name }: EntryProps) => {
    return (
        <motion.div className="aspect-square bg-gradient-to-br from-purple-800 to-transparent via-transparent via-50% 
            p-5 flex justify-center items-center rounded-xl h-[100px] w-[100px] md:h-[125px] md:w-[125px] lg:h-[150px] lg:w-[150px]"
            variants={{
                hover: {
                    backgroundColor: "#6366f1",
                    scale: 1.1,
                    borderRadius: "30%",
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
            <motion.div className="relative z-10 flex flex-col justify-evenly items-center"
                variants={{
                    hover: {
                        translateY: "-10%",
                        scale: 1.1
                    }
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: 0.1
                }}
            >
                {children}
                <motion.p className="font-thin text-light"
                    variants={{
                        hover: {
                            opacity: 1,
                            transform: "translateY(0)",
                        },
                        initial: {
                            opacity: 0,
                            transform: "translateY(100%)",
                        }
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                >
                    {name}
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

interface SectionTabProps {
    children: React.ReactNode;
    name: string;
    index: number;
    handleClick: (n: number) => void;
    animateControls: AnimationControls;
}

const SectionTab: React.FC<SectionTabProps> = ({ children, name, index, handleClick, animateControls }: SectionTabProps) => {
    return (
        <div className="w-full block">
            <button onClick={() => handleClick(index)}
                className="w-full p-3 bg-purple-400/30 rounded-md rounded-bl-2xl rounded-tr-2xl hover:bg-purple-400/70 duration-300"
            >
                <h2 className="text-left font-bold text-teal text-3xl lg:text-4xl">{name}</h2>
            </button>
            {/* <hr className="border-teal border-2 lg:border-4"></hr> */}
            <div className="overflow-hidden h-fit w-full">

                <motion.div
                    onClick={() => handleClick(index)}
                    className="origin-top hover:cursor-pointer"
                    variants={{
                        closed: {
                            height: 0,
                            scaleY: 0,
                            opacity: 0,
                            translateY: "-100%"
                        },
                        open: {
                            height: "fit-content",
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
                    animate={animateControls}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    )
}

const Skills: React.FC = () => {
    const description = (
        <>
            It's best to be prepared for as many tasks as possible :)
        </>
    )
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
            <div className="h-fit w-full p-10 lg:p-24 xl:px-[10%] 2xl:px-[20%]">
                <SlideAppear className="w-full z-20" offsetX="10vw" offsetY="-5vh" once={true} index={0}>
                    <h1 className="text-teal my-5 font-extrabold text-6xl md:text-7xl z-20 relative">
                        {title}
                    </h1>
                </SlideAppear>
                <Text>
                    {description}
                </Text>
                <div className="flex justify-center items-center my-5 xl:justify-start">

                    <div className="w-full h-auto max-w-[400px] md:max-w-[700px] lg:max-w-[1000px]">
                        <SlideAppear className="" offsetX="0" offsetY="10vh" once={true} index={0}>

                            <SectionTab name={"Languages"} index={0} handleClick={handleTabClick} animateControls={languageControls}>
                                <div className="grid h-full grid-cols-2 md:grid-cols-3 gap-5 gap-x-10 my-5 py-3 px-10 [&>*]:aspect-square">

                                    <SkillEntry name={"Python"}>
                                        <img src={python_logo} />
                                    </SkillEntry>
                                    <SkillEntry name="C++">
                                        <img src={cpp_logo} />
                                    </SkillEntry>
                                    <SkillEntry name="TypeScript">
                                        <img src={typescript_logo} />
                                    </SkillEntry>
                                    <SkillEntry name="HTML">
                                        <img src={html_logo} />
                                    </SkillEntry>
                                    <SkillEntry name="CSS">
                                        <img src={css_logo} />
                                    </SkillEntry>
                                </div>
                            </SectionTab>
                        </SlideAppear>

                        <SlideAppear className="" offsetX="0" offsetY="10vh" once={true} index={1}>
                            <SectionTab name={"Frameworks"} index={1} handleClick={handleTabClick} animateControls={frameworkControls}>


                                <div className="grid h-full grid-cols-2 md:grid-cols-3 gap-5 gap-x-10 my-5 py-3 px-10 [&>*]:aspect-square [&>*]:w-[100px] [&>*]:md:w-[160px]">
                                    <SkillEntry name="React">
                                        <img src={react_logo} />
                                    </SkillEntry>
                                    <SkillEntry name="Express.JS">
                                        <img src={express_logo} />
                                    </SkillEntry>
                                    <SkillEntry name="Node.JS">
                                        <img src={nodejs_logo} />
                                    </SkillEntry>
                                    <SkillEntry name="Tailwind">
                                        <img src={tailwind_logo} />
                                    </SkillEntry>
                                </div>

                            </SectionTab>
                        </SlideAppear>

                        <SlideAppear className="" offsetX="0" offsetY="10vh" once={true} index={2}>
                            <SectionTab name={"Miscellaneous"} index={2} handleClick={handleTabClick} animateControls={miscControls}>

                                <div className="grid h-full grid-cols-2 md:grid-cols-3 gap-5 gap-x-10 my-5 py-3 px-10 [&>*]:aspect-square [&>*]:w-[100px] [&>*]:md:w-[160px]">
                                    <SkillEntry name="NumPy">
                                        <img src={numpy_logo} />
                                    </SkillEntry>
                                    <SkillEntry name="Git">
                                        <img src={git_logo} />
                                    </SkillEntry>
                                    <SkillEntry name="PyTorch">
                                        <img src={pytorch_logo} />
                                    </SkillEntry>
                                </div>
                            </SectionTab>
                        </SlideAppear>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Skills