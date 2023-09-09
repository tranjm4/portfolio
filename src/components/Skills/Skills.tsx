import React, { useEffect, useState } from 'react'
import { useAnimation } from "framer-motion";

import SlideAppear from '../Animations/SlideAppear';
import Text from '../Supplemental/Text';
import SectionTab from "./SectionTab";
import SkillEntry from "./SkillEntry";

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
            <div className="h-fit w-full p-10 mb-[20vh] lg:p-24 xl:px-[10%] 2xl:px-[20%]">
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