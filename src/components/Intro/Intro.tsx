import React from 'react';
import SlideAppear from '../Animations/SlideAppear'
import Reveal from '../Animations/Reveal';
import TextBoxReveal from '../Animations/TextBoxReveal';
import Text from '../Supplemental/Text';

const Intro: React.FC = () => {
    const title = "Hello!";
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
    return (
        <div className="min-h-[60vh] h-fit w-screen md:flex-row md:justify-center overflow-hidden  mb-[30vh]">
            <div className="flex flex-col items-center p-10 md:p-20 lg:px-[15vw]">
                <Text title={title} description={description} />
            </div>
        </div >
    )
}

export default Intro