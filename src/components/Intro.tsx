import React from 'react';
import SlideAppear from './Animations/SlideAppear'
import circle from "../assets/circle.svg";

const Intro: React.FC = () => {
    return (
        <div className="min-h-screen h-fit w-screen md:flex-row md:justify-center overflow-hidden">
            <div className="flex flex-col items-center p-10 md:p-16">
                <div className="flex flex-col h-fit items-center md:flex-row">

                    <SlideAppear className="w-full md:w-[50%] xl:w-[80%] md:flex md:justify-center" offsetX="20vw" offsetY="-10vw">
                        <h1 className="text-6xl font-bold mb-5 md:mb-0
                                       lg:text-8xl">
                            Hello!
                        </h1>
                    </SlideAppear>
                    <SlideAppear className="md:w-full" offsetX="-20vw" offsetY="-10vh">
                        <h2 className="text-lg text-light z-20
                                       lg:text-2xl xl:text-3xl">
                            I'm a third-year undergraduate studying computer science and
                            statistics at UC Irvine.

                            <br /> <br />

                            I love creating meaningful and beautiful applications.

                            <br /> <br />

                            This website has undergone several iterations as I've learned
                            and integrated new frameworks - from vanilla HTML/CSS/JS, to React, 
                            to now Framer Motion and Tailwind CSS.

                            <br /> <br />

                            I also strive to help others learn new skills! I've previously tutored
                            in math and programming in Python, and I currently tutor in data structures in C++.

                            <br /> <br />

                        </h2>
                    </SlideAppear>
                </div>

                <div className="flex justify-center items-center">
                    <SlideAppear className="" offsetX="20vw" offsetY="5vh">
                        <img src={circle} className="scale-[3] md:scale-[3] opacity-30 -z-20 translate-y-[100%] translate-x-[100%]" />
                    </SlideAppear>
                    <SlideAppear className="" offsetX="-20vw" offsetY="-5vh">
                        <img src={circle} className="scale-[5] md:scale-[6] lg:scale-[7] opacity-[5%] -z-20 
                                                     translate-y-[200%] md:translate-y-[250%] lg:translate-y-[200%]
                                                     -translate-x-[100%]"/>
                    </SlideAppear>
                </div>
            </div>
        </div>
    )
}

export default Intro