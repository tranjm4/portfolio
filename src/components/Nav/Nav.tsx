import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

interface DropDownButtonProps {
    isOpen: boolean;
    setOpen: (b: boolean) => void;
}

const DropdownButton: React.FC<DropDownButtonProps> = ({ isOpen, setOpen }: DropDownButtonProps) => {
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
        <>
            <div className="fixed h-16 w-screen z-50 lg:hidden">
                <DropdownButton isOpen={isOpen} setOpen={setOpen} />
                <DropDownMenu isOpen={isOpen} />
            </div>

            <div className="hidden lg:block lg:w-[20vw] lg:max-w-[400px] lg:min-w-[250] lg:flex-shrink-0 z-50">
                <div className="fixed w-[20vw] h-screen lg:max-w-[400px] lg:min-w-[250px] top-0 left-0 bg-dark-600 
                    flex flex-col justify-center items-center text-3xl text-teal font-bold
                    [&>*]:duration-300 [&>*]:hover:cursor-pointer
                    [&>*]:w-full [&>*]:text-center [&>*]:py-5
                    [&>*]:xl:text-4xl"
                >
                    <Link to="Title" smooth={true} className="hover:text-light w-full hover:bg-dark-900" duration={700}>
                        Home
                    </Link>
                    <Link to="Intro" smooth={true} className="hover:text-light hover:bg-dark-900" duration={700}>Intro</Link>
                    <Link to="Skills" smooth={true} className="hover:text-light hover:bg-dark-900" duration={700}>Skills</Link>
                    <Link to="Projects" smooth={true} className="hover:text-light hover:bg-dark-900" duration={700}>Projects</Link>
                </div>
            </div>
        </>
    )
}

export default Nav