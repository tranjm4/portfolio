import React from "react";
import { motion } from "framer-motion";

import githubLogo from "../../assets/links/github.svg";
import Reveal from "../Animations/Reveal";

interface EntryProps {
    gif: any;
    title: string;
    desc: string;
    skills: string;
    repo: string;
}

interface Props {
    properties: EntryProps;
}
const ProjectEntry: React.FC<Props> = ({ properties }: Props) => {
    return (
        <>
            <div className="my-10 max-w-[500px] xl:max-w-[">
                <div className="flex w-full justify-between items-center my-2">
                    <h2 className="text-teal font-extrabold text-2xl md:text-3xl">
                        {properties.title}
                    </h2>
                    <a className="px-5 py-2 bg-gradient-to-r from-purple-800 to-transparent rounded-tl-2xl rounded-br-2xl rounded-bl-md
                        hover:rounded-md hover:bg-purple-400 duration-300
                        text-light font-bold hover:text-teal"
                        href={properties.repo} target="_blank">
                        <img className="inline-block w-[50px]"
                            src={githubLogo} />
                        <p className="inline-block">
                            Github Repo
                        </p>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row xl:flex-col justify-center items-center py-10 px-5 md:px-10 bg-gradient-to-b from-purple-800 rounded-tl-xl rounded-tr-[20%] rounded-bl-[20%] hover:rounded-xl duration-500">
                    <motion.div className="w-fit h-fit pb-2 pr-2 rounded-md mb-5"
                        style={{
                            transform: "rotateY(-15deg) rotateX(10deg)"
                        }}
                        initial={{
                            backgroundColor: "#6366f1"
                        }}
                        animate={{
                            backgroundColor: "#2dd4bf"
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 2.5,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.div className="" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>

                            <motion.img className="max-w-[200px] rounded-md border-light border-8 border-l-4 border-t-4"
                                initial={{
                                    transform: "translateY(-10px) translateX(-15px)"
                                }}
                                animate={{
                                    transform: "translateY(-5px) translateX(-5px)"
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 2.5,
                                    ease: "easeInOut"
                                }}
                                src={properties.gif} />
                        </motion.div>
                    </motion.div>
                    <div className="text-light ml-0 md:ml-10 xl:ml-0">
                        <Reveal className="">
                            <p>
                                {properties.desc}
                            </p>
                            <p className="my-5 font-extrabold text-teal">
                                {properties.skills}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectEntry