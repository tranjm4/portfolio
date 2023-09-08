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


    const title = "Projects";
    const description = (
        <>
            Here are some of my projects! Always a work-in-progress list :)
        </>
    )
    const portfolioEntry: EntryProps = {
        gif: portfolioGif,
        title: "Portfolio",
        desc: "This website! It serves as a record of both my journey \
               in web dev as well as my overall journey in programming - \
               I'm always seeking to improve the website as well as myself!",
        skills: "React, TypeScript, Tailwind",
        repo: "https://github.com/tranjm4/portfolio"
    }

    const wrapifyEntry: EntryProps = {
        gif: wrapifyGif,
        title: "Wrapify",
        desc: "An interactive web app that allows the user to authenticate via Spotify, \
               and retrieves insights about their listening trends.",
        skills: "React, TypeScript, Node.JS, Express.JS, REST APIs",
        repo: "https://github.com/tranjm4/wrapify"
    }

    return (
        <>
            <div className="h-fit w-full mb-[10vh] p-10 lg:p-24 xl:px-[10%] 2xl:px-[20%]">
                <SlideAppear className="w-full z-20" offsetX="10vw" offsetY="-5vh" once={true}>
                    <h1 className="text-teal my-5 font-extrabold text-6xl md:text-7xl z-20 relative">
                        {title}
                    </h1>
                </SlideAppear>

                <Text>
                    {description}
                </Text>
                <div className="flex items-center justify-center">
                    <SlideAppear className="grid grid-cols-1 xl:grid-cols-2 xl:gap-10" offsetX="0" offsetY="10vh" once={true}>
                        <ProjectEntry properties={portfolioEntry}></ProjectEntry>
                        <ProjectEntry properties={wrapifyEntry}></ProjectEntry>
                    </SlideAppear>
                </div>
            </div>
        </>
    )
}

export default Projects