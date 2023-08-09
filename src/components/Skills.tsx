import React, { useState } from 'react'
import SlideAppear from './Animations/SlideAppear';
import TextBox from './Supplemental/TextBox';
import Reveal from './Animations/Reveal';
import { motion } from "framer-motion";

import cpp_logo from "../assets/logos/cpp_logo.svg";
import react_logo from "../assets/logos/react_logo.svg";
import python_logo from "../assets/logos/python_logo.svg";
import firebase_logo from "../assets/logos/firebase_logo.svg";
import tailwind_logo from "../assets/logos/tailwind_logo.svg";

class Card {
    name: string;
    rotate: string;
    zIndex: number;
    svg: string;
    animation: any

    constructor(name: string, rotate: number, zIndex: number, svg: string, animation: any) {
        this.name = name;
        this.rotate = rotate + "deg";
        this.zIndex = zIndex;
        this.svg = svg;
        this.animation = animation;
    }
}

const Skills: React.FC = () => {
    const cards = [
        new Card("C++", 15, 5, cpp_logo, { translateX: "80%", translateY: "-50%", rotate: "20deg" }),
        new Card("Firebase", -20, 7, firebase_logo, { translateX: 0, translateY: "90%", rotate: "10deg" }),
        new Card("Python", -15, 8, python_logo, { translateX: "100%", translateY: "40%", rotate: "25deg" }),
        new Card("Tailwind", 15, 6, tailwind_logo, { translateX: "-100%", translateY: "30%", rotate: "-10deg" }),
        new Card("React", 5, 9, react_logo, { translateX: "-50%", translateY: "-50%", rotate: "-10deg" })
    ]

    const [isHovered, setIsHovered] = useState(false);
    function handleMouseEnter() {
        if (isHovered) {
            setIsHovered(false);
        }
        else {
            setIsHovered(true);
        }
    }
    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div className="h-[max(120vh,600px)] min-h-fit w-screen md:flex-row md:justify-center overflow-hidden mb-[10vh]">
            <div className="flex flex-col w-full h-full items-center p-10 md:p-20 lg:px-[15vw]">
                <div className="flex flex-col w-full h-fit md:flex-row items-center">

                    <SlideAppear className="w-full md:w-[50%] md:flex md:justify-center" offsetX="-10vw" offsetY="20vh" once={true}>
                        <h1 className="text-6xl font-bold mb-5 md:mb-0
                   lg:text-8xl">
                            Skills
                        </h1>
                    </SlideAppear>

                    <TextBox className="md:ml-[10%] p-3 md:p-6 lg:p-10">
                        <div className="bg-gradient-to-tl from-dark-800 to-transparent via-transparent w-fit via-50% bg-opacity-70 p-3 md:p-8 rounded-xl">
                            <SlideAppear className="w-full md:w-full" offsetX="20vw" offsetY="10vh" once={true}>
                                <Reveal className="">
                                    <h2 className="text-lg text-light z-20
                                       lg:text-2xl xl:text-3xl">
                                        The entirety of a toolbox is rarely needed for any single task,
                                        but it is certainly important to be prepared for any task.
                                    </h2>
                                </Reveal>
                            </SlideAppear>
                        </div>
                    </TextBox>
                </div>
                <SlideAppear className="flex flex-col mt-[18vh] items-center flex-grow w-full" offsetX="-10vw" offsetY="5vh" once={true}>
                    <motion.div className="group relative w-[calc(min(15vw+5vh,15vh+5vw))] lg:w-[calc(min(10vw+5vh,10vh+5vw))] 
                                           aspect-[3/4]"
                        whileHover="hover"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleMouseEnter}
                    >

                        {cards.map((card, index) => (
                            <motion.div key={`card${index}`} className={"absolute w-full h-full pointer-events-none shadow-even rounded-xl bg-darkblue-700"}
                                style={{
                                    zIndex: card.zIndex,
                                    rotate: card.rotate
                                }}
                                variants={{
                                    noHover: { translateX: 0, translateY: 0, scale: 1, rotate: card.rotate },
                                    hover: { ...card.animation, scale: 1.1 }
                                }}
                                initial="noHover"
                                whileHover="hover"
                                onClick={handleMouseEnter}
                                animate={isHovered ? "hover" : "noHover"}
                                transition={{ type: "spring", damping: 50, stiffness: 200, mass: 2, restDelta: 0.001 }}
                            >
                                <div className="relative flex flex-col items-center justify-center h-full w-full">
                                    <img src={card.svg} className=" justify-center w-[60%]" />
                                    <h1 className="font-extrabold text-xl xl:text-3xl">
                                        {card.name}
                                    </h1>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </SlideAppear>

            </div>
        </div>
    )
}

export default Skills