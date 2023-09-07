import React, { useEffect, useState } from "react";
import { AnimationControls, motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

interface DropDownButtonProps {
    isOpen: boolean;
    setOpen: (b: boolean) => void;
}

const DropdownButton = ({ isOpen, setOpen }: DropDownButtonProps) => {
    const handleClick = () => {
        if (isOpen) {
            console.log("false")
            setOpen(false);
        }
        else {
            console.log("true");
            setOpen(true);
        }
    }
    return (
        <button className="fixed group z-10 h-14 aspect-square border-4 border-teal hover:border-light duration-700 rounded-lg mt-4 ml-4" onClick={handleClick}>
            <div className="absolute top-[25%] left-[10%] bg-teal group-hover:bg-light duration-300 w-[80%] h-[10%] rounded-full" />
            <div className="absolute top-[45%] left-[10%] bg-teal group-hover:bg-light duration-300 w-[80%] h-[10%] rounded-full" />
            <div className="absolute top-[65%] left-[10%] bg-teal group-hover:bg-light duration-300 w-[80%] h-[10%] rounded-full" />
        </button>
    )
}

interface MenuProps {
    isOpen: boolean
}

const DropDownMenu = ({ isOpen }: MenuProps) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <div className="relative h-full w-full flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div className="absolute top-10 left-10 h-fit py-10 bg-dark-600 -z-10 origin-top-left shadow-even"
                            initial={{ scale: 0, borderRadius: "100%", width: "25%", top: "2.5rem", left: "2.5rem" }}
                            animate={{ scale: 1, borderRadius: 0, width: "100%", top: 0, left: 0 }}
                            exit={{ scale: 0, borderRadius: "100%", width: "25%", top: "2.5rem", left: "2.5rem" }}
                            transition={{ type: "spring", damping: 25, stiffness: 150, restDelta: 0.0001 }}
                        >
                            <motion.div className="flex flex-col justify-evenly h-[20vh] items-center text-teal font-bold text-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 150, restDelta: 0.0001 }}
                            >
                                <Link to="Title" smooth={true} duration={700} className="hover:text-light duration-300 hover:cursor-pointer">Home</Link>
                                <Link to="Intro" smooth={true} duration={700} className="hover:text-light duration-300 hover:cursor-pointer">Intro</Link>
                                <Link to="Skills" smooth={true} duration={700} className="hover:text-light duration-300 hover:cursor-pointer">Skills</Link>
                                <Link to="Projects" smooth={true} duration={700} className="hover:text-light duration-300 hover:cursor-pointer">Projects</Link>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    const mainControls = useAnimation();
    useEffect(() => {
        if (isOpen) {
            mainControls.start("visible");
        }
        else {
            mainControls.start("hidden")
        }
    }, [isOpen])
    return (
        <div className="fixed h-16 w-screen z-50">
            <DropdownButton isOpen={isOpen} setOpen={setOpen} />
            <DropDownMenu isOpen={isOpen} />
        </div>
    )
}

export default Nav