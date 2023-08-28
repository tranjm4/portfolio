import React, { useState } from 'react'
import SlideAppear from '../Animations/SlideAppear';
import { motion } from "framer-motion";

import cpp_logo from "../../assets/logos/cpp_logo.svg";
import react_logo from "../../assets/logos/react_logo.svg";
import python_logo from "../../assets/logos/python_logo.svg";
import firebase_logo from "../../assets/logos/firebase_logo.svg";
import tailwind_logo from "../../assets/logos/tailwind_logo.svg";
import express_logo from "../../assets/logos/express_logo.svg";
import nodejs_logo from "../../assets/logos/nodejs_logo.svg";
import Text from '../Supplemental/Text';

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
        new Card("C++", 15, 5, cpp_logo, { translateX: "100%", translateY: "-50%", rotate: "-15deg" }),
        new Card("Firebase", -20, 7, firebase_logo, { translateX: 0, translateY: "100%", rotate: "10deg" }),
        new Card("Python", -15, 8, python_logo, { translateX: "100%", translateY: "70%", rotate: "15deg" }),
        new Card("Tailwind", 15, 6, tailwind_logo, { translateX: "-100%", translateY: "70%", rotate: "-10deg" }),
        new Card("React", 5, 11, react_logo, { translateX: "-100%", translateY: "-50%", rotate: "10deg" }),
        new Card("Express", 10, 10, express_logo, { rotate: "-10deg", translateY: "-80%" }),
        new Card("Node.JS", -10, 9, nodejs_logo, { translateY: "10%"})
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

    const title = "Skills";
    const description = "The entirety of a toolbox is rarely needed at once, \
                         but it is important to be prepared for any task."

    return (
        <div id="skills" className="h-[max(100vh,600px)] min-h-fit w-screen md:flex-row md:justify-center overflow-hidden">
            <div className="flex flex-col w-full h-full items-center p-10 md:p-20 lg:px-[15vw]">
            
                <Text title={title} description={description} />
                
                <SlideAppear className="flex flex-col mt-[18vh] items-center flex-grow w-full" offsetX="-10vw" offsetY="5vh" once={true}>
                    <motion.div className="group relative w-[calc(min(13vw+4vh,14vh+5vw))] lg:w-[calc(min(9vw+4vh,9vh+4vw))] 
                                           aspect-[3/4]"
                        whileHover="hover"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleMouseEnter}
                    >

                        {cards.map((card, index) => (
                            <motion.div key={`card${index}`} className={"absolute w-full h-full pointer-events-none shadow-even rounded-xl bg-gradient-to-br from-lavender to-blue via-purple-800 via-50%"}
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
                                    <h1 className="font-bold md:font-extrabold text-lg md:text-xl xl:text-3xl">
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