import React, { useEffect, useRef } from 'react';
import Text from '../Supplemental/Text';
import { AnimationControls, motion, useAnimation, useInView } from "framer-motion";
import SlideAppear from '../Animations/SlideAppear';
import TextBoxReveal from '../Animations/TextBoxReveal';
import Reveal from '../Animations/Reveal';

const Laptop: React.FC = () => {
    return (
        <div className="rounded-[15px] h-fit w-fit"
            style={{
                transform: "rotateY(-20deg) rotateX(20deg)"
            }}
        >

            <motion.div className="h-fit w-fit pb-2 rounded-[15px] scale-[70%] md:scale-[100%] xl:scale-[120%] bg-teal duration-500"
                initial={{
                    backgroundColor: "#2dd4bf"
                }}
                animate={{
                    backgroundColor: "#6366f1"
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "circOut"
                }}
            >

                <motion.svg width="432" height="319" viewBox="0 0 432 319" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                    initial={{
                        transform: "translateY(-2px) translateX(-5px)"
                    }}
                    animate={{
                        transform: "translateY(-15px) translateX(-15px)"
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2,
                        ease: "circOut"
                    }}
                >
                    <rect width="432" height="319" rx="14" fill="#878383" />
                    <rect x="11" y="14" width="410" height="292" rx="14" fill="#4A4949" />
                    <rect x="40" y="33" width="122" height="273" fill="#333333" />
                    <circle cx="56" cy="24" r="4" fill="#88FF94" />
                    <circle cx="32" cy="24" r="4" fill="#F48484" />
                    <circle cx="44" cy="24" r="4" fill="#FAD200" />
                    <rect x="17" y="48" width="15" height="15" rx="5" fill="#333333" />
                    <rect x="17" y="70" width="15" height="15" rx="5" fill="#333333" />
                    <rect x="17" y="92" width="15" height="15" rx="5" fill="#333333" />
                    <rect x="162" y="33" width="246" height="157" fill="#232020" />
                    <path d="M187 52.5H294" stroke="#2DD4BF" stroke-width="5" stroke-linecap="round" />
                    <path d="M187 74H261" stroke="#2DD4BF" stroke-width="5" stroke-linecap="round" />
                    <path d="M187 74H261" stroke="#2DD4BF" stroke-width="5" stroke-linecap="round" />
                    <path d="M187 121H277" stroke="#6366F1" stroke-width="5" stroke-linecap="round" />
                    <path d="M187 145H232" stroke="#CAA8F5" stroke-width="5" stroke-linecap="round" />
                    <path d="M187 97L320 96" stroke="#6366F1" stroke-width="5" stroke-linecap="round" />
                    <rect x="162" y="200" width="246" height="93" fill="black" />
                    <rect x="395" y="81" width="7" height="51" fill="#4A4949" />
                    <path d="M171 213H278" stroke="white" stroke-width="5" stroke-linecap="round" />
                    <path d="M171 229H320" stroke="white" stroke-width="5" stroke-linecap="round" />
                    <line x1="79.5" y1="89.5" x2="127.5" y2="89.5" stroke="#4A4949" stroke-width="5" stroke-linecap="round" />
                    <line x1="97.5" y1="133.5" x2="145.5" y2="133.5" stroke="#4A4949" stroke-width="5" stroke-linecap="round" />
                    <line x1="79.5" y1="118.5" x2="146.5" y2="118.5" stroke="#4A4949" stroke-width="5" stroke-linecap="round" />
                    <line x1="58.5" y1="104.5" x2="96.5" y2="104.5" stroke="#4A4949" stroke-width="5" stroke-linecap="round" />
                    <line x1="58.5" y1="60.5" x2="124.5" y2="60.5" stroke="#4A4949" stroke-width="5" stroke-linecap="round" />
                    <line x1="79.5" y1="74.5" x2="145.5" y2="74.5" stroke="#4A4949" stroke-width="5" stroke-linecap="round" />
                </motion.svg>

            </motion.div>
        </div>
    )
}


const IntroText: React.FC = () => {
    const description = (
        <>
            I'm a third-year undergraduate studying computer science and
            statistics at UC Irvine. <br /> <br />

            I love creating meaningful and beautiful applications. <br /> <br />

            I also strive to help others learn new skills! I've previously tutored in
            programming in Python, and I currently tutor in math and data structures in C++. <br /> <br />

            In my free time, I enjoy doing photography, singing with my acapella group,
            playing the guitar, and exploring local coffee shops!
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

const Intro: React.FC = () => {
    const title = "Hello!";
    return (
        <div className="h-fit min-h-[60vh] w-full mb-[20vh] lg:p-24 xl:px-[10%] 2xl:px-[20%]">
            <div className="relative flex flex-col px-10">

                <SlideAppear className="relative h-fit w-fit self-end md:hidden z-20"
                    offsetX="10vw" offsetY="-10vh" once={true}>
                    <Laptop />
                </SlideAppear>
                <SlideAppear className="" offsetX="-10vw" offsetY="5vh" once={true}>
                    <h1 className="text-teal my-5 font-extrabold text-6xl md:text-7xl z-20 relative">
                        {title}
                    </h1>
                </SlideAppear>

                <div className="md:flex">
                    <IntroText />
                    <div className="hidden md:items-center md:flex">
                        <SlideAppear className="flex items-center z-20"
                            offsetX="10vw" offsetY="-10vh" once={false}>
                            <Laptop />
                        </SlideAppear>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro