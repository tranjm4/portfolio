import React from 'react';
import SlideAppear from './Animations/SlideAppear'

const Intro: React.FC = () => {
    return (
        <div className="min-h-screen h-fit w-screen md:flex-row md:justify-center overflow-x-hidden">
            <div className="flex flex-col items-center p-10 md:p-16">
                <div className="flex flex-col h-fit items-center md:flex-row">

                    <SlideAppear className="w-full md:w-[50%] xl:w-[80%] md:flex md:justify-center" offsetX="0" offsetY="20vh" once={true}>
                        <h1 className="text-6xl font-bold mb-5 md:mb-0
                                       lg:text-8xl">
                            Hello!
                        </h1>
                    </SlideAppear>
                    <SlideAppear className="md:w-full" offsetX="-20vw" offsetY="20vh" once={true}>
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
            </div>
        </div>
    )
}

export default Intro