import React from 'react';
import SlideAppear from './Animations/SlideAppear'
import TextBox from './Supplemental/TextBox';
import Reveal from './Animations/Reveal';

const Intro: React.FC = () => {
    return (
        <div className="min-h-screen h-fit w-screen md:flex-row md:justify-center overflow-x-hidden mb-[30vh]">
            <div className="flex flex-col items-center p-10 md:p-20 lg:px-[15vw]">
                <div className="flex flex-col h-fit items-center md:flex-row">

                    <SlideAppear className="w-full md:w-[50%] md:flex md:justify-center" offsetX="20vw" offsetY="20vh" once={true}>
                        <h1 className="text-6xl font-bold mb-5 md:mb-0
                                       lg:text-8xl">
                            Hello!
                        </h1>
                    </SlideAppear>

                    <TextBox className="md:ml-[10%] p-3 md:p-6 lg:p-10">

                        <div className="bg-gradient-to-tl from-dark-800 to-transparent via-transparent via-50% bg-opacity-70 rounded-xl p-3">

                            <SlideAppear className="md:w-full" offsetX="-20vw" offsetY="20vh" once={true}>

                                <Reveal className="">
                                    <h2 className="text-lg text-light z-20
                                       lg:text-2xl xl:text-3xl">

                                        I'm a third-year undergraduate studying computer science and
                                        statistics at UC Irvine.

                                        <br /> <br />

                                        I love creating meaningful and beautiful applications.

                                        <br /> <br />

                                        I also strive to help others learn new skills! I've previously tutored
                                        in math and programming in Python, and I currently tutor in data structures in C++.

                                    </h2>
                                </Reveal>
                            </SlideAppear>
                        </div>
                    </TextBox>
                </div>
            </div>
        </div >
    )
}

export default Intro