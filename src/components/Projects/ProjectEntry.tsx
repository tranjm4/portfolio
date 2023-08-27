import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import githubLogo from "../../assets/links/github.svg";

interface EntryProps {
    gif: any;
    title: string;
    desc: string;
    skills: string;
    repo: string;
}

interface Props {
    properties: EntryProps;
    direction: number;
    page: number;
    paginate: (x: number) => void;
}
const ProjectEntry: React.FC<Props> = ({ properties, direction, page, paginate }: Props) => {
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
                scale: 1
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
                scale: 1
            };
        }
    };

    return (

        <AnimatePresence initial={false} custom={direction}>

            <motion.div className="absolute flex flex-col justify-evenly items-center md:flex-row h-full w-full"
                custom={direction}
                key={page}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", damping: 25, stiffness: 300, restDelta: 0.001 },
                    opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                }}
            >

                <div className="w-fit max-w-[300px] max-h-[300px] md:max-w-[500px] md:max-h-[500px] flex-grow-0 h-fit shadow-even md:shadow-3xl md:mr-10">
                    <img src={properties.gif} className="rounded-xl" />
                </div>
                <div className="w-full md:w-full">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold my-3 text-center md:text-left">
                        {properties.title}
                    </h1>
                    <p className="font-thin text-left md:text-xl 2xl:text-2xl">
                        {properties.desc}
                        <br /> <br />
                        <span className="font-bold">
                            {properties.skills}
                        </span>
                    </p>

                    <div className="flex justify-center md:justify-normal">

                        <a target="_blank" href={properties.repo}
                            className="bg-dark-700 min-h-min w-fit flex justify-center items-center my-3 px-3 py-2 hover:shadow-even duration-300">
                            <img src={githubLogo}
                                className=" w-10 mr-2" />
                            <p className="font-medium text-center md:text-xl md:font-bold">
                                Github Repo
                            </p>
                        </a>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ProjectEntry