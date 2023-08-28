import React, { useState } from 'react';
// @ts-ignore
import { debounce } from "lodash";

import Text from '../Supplemental/Text';

import wrapifyGif from "../../assets/gif/wrapify_gif.gif";
import portfolioGif from "../../assets/gif/portfolio_gif.gif";

import ProjectEntry from './ProjectEntry';
import SlideAppear from '../Animations/SlideAppear';

interface EntryProps {
    gif: any;
    title: string;
    desc: string;
    skills: string;
    repo: string;
}

const Projects: React.FC = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const wrapify = {
        gif: wrapifyGif,
        title: "Wrapify",
        desc: "Communicates with Spotify's API to allow the user to log in \
        via Spotify and display their most-listened-to songs and artists. \
        Created a backend API that communicates with the frontend.",
        skills: "React, Tailwind, Express, Node.js",
        repo: "https://github.com/tranjm4/wrapify"
    };
    const portfolio = {
        gif: portfolioGif,
        title: "Portfolio",
        desc: "This website! My first attempt at web dev; picked up \
        React, Tailwind, and Framer Motion as I went. I'm always \
        finding ways to add to it.",
        skills: "React, Tailwind, Framer Motion",
        repo: "https://github.com/tranjm4/portfolio"
    };

    const projects: EntryProps[] = [wrapify, portfolio]

    const paginate = (newDirection: number) => {
        setPage([(page + newDirection + projects.length) % projects.length, newDirection])
    };

    const handleLeftButtonClick = debounce(() => {
        paginate(-1);
    }, 300);

    const handleRightButtonClick = debounce(() => {
        paginate(1);
    }, 300);

    const title = "Projects";
    const description = "Here are some of my projects! Always a work-in-progress list :)";
    return (
        // Projects Section Container
        <div className="h-fit w-screen overflow-hidden">
            <div className="flex flex-col h-full w-full items-center p-10 md:p-20 lg:px-[15vw]">

                {/* Text Section Container */}
                <Text title={title} description={description} />

                {/* Projects Carousel Container */}
                <SlideAppear className="h-[80vh] min-h-[800px] md:h-[50vh] w-full md:min-h-[800px] lg:w-[80%]
                    flex flex-col overflow-hidden
                    bg-gradient-to-b md:bg-gradient-to-br from-blue to-purple-800 via-purple-800 via-60% rounded-lg
                    p-5 md:p-10 z-20"
                    offsetX="-10vw" offsetY="-10vh" once={true}>

                        {/* Current Project Container */}
                        <div className="h-full w-full relative flex flex-col justify-center items-center">
                            <ProjectEntry properties={projects[page]} page={page} direction={direction} paginate={paginate} />
                        </div>

                        {/* Buttons */}
                        <div className="flex self-end justify-center items-center h-10 md:h-20 my-3 flex-grow-0 w-full">
                            {/* Left Button */}
                            <button onClick={() => handleLeftButtonClick()} className="h-5 md:h-8">
                                <div className="aspect-square h-full 
                                    border-4 md:border-l-8 md:border-t-8 border-r-0 border-b-0 -rotate-45
                                    hover:translate-x-[-5px] duration-300"/>
                            </button>

                            {/* Dots */}
                            <div className="flex h-full w-fit items-center">

                                {projects.map((_, index) => (
                                    (index === page) ?
                                        <div key={index} className="rounded-full border-2 md:border-4 mx-2 aspect-square w-4 md:w-6 border-light bg-teal
                                duration-300" />
                                        :
                                        <div key={index} className="rounded-full border-2 md:border-4 mx-2 aspect-square w-4 md:w-6 border-light
                                duration-300" />
                                ))}
                            </div>

                            {/* Right Button */}
                            <button onClick={() => handleRightButtonClick()} className="h-5 md:h-8">
                                <div className="aspect-square h-full 
                                    border-4 md:border-l-8 md:border-t-8 border-r-0 border-b-0 rotate-[135deg] 
                                    hover:translate-x-[5px] duration-300"/>
                            </button>
                        </div>

                </SlideAppear>
            </div>
        </div>
    )
}

export default Projects