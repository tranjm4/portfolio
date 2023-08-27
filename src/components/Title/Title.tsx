import SlideAppear from "../Animations/SlideAppear";
import { motion } from "framer-motion";
import Reveal from "../Animations/Reveal";
import githubLogo from "../../assets/links/github.svg";
import linkedinLogo from "../../assets/links/linkedin.svg";

const Title = () => {
    return (
        <div className="flex flex-col min-h-screen h-fit md:flex-row md:justify-center mb-[30vh] py-[10vh] overflow-hidden">
            {/* Title text */}
            <div className="flex flex-grow justify-center items-center md:flex-grow xl:flex-grow-0 mx-0 md:mx-0 lg:ml-10 lg:mr-0">
                <div className="relative flex flex-col items-center h-fit w-fit p-10 xl:p-0"
                >
                    <div className="w-full h-full">

                        {/* <TextBoxReveal className="absolute w-full h-full top-[-5%] left-[0%] lg:top-[-10%] lg:left-[-5%] hover:scale-110
                            bg-gradient-to-br from-dark-800 to-transparent via-transparent via-70%" initialScale="0.3" offsetX="-20vw" offsetY="20vh" />
                        <TextBoxReveal className="absolute w-full h-full top-[0%] left-[5%] lg:top-[0%] lg:left-[5%] hover:scale-110
                            bg-gradient-to-br from-dark-800 to-transparent via-transparent via-70%" initialScale="2" offsetX="30vw" offsetY="-30vh" />
                        <TextBoxReveal className="absolute w-full h-full top-[5%] left-[10%] lg:top-[10%] lg:left-[15%] hover:scale-110
                            bg-gradient-to-br from-dark-800 to-transparent via-transparent via-70%" initialScale="0.5" offsetX="50vw" offsetY="-20vh" /> */}

                        <SlideAppear className="flex flex-col w-full h-full lg:p-5 xl:p-16" offsetX="-20vw" offsetY="-10vh" once={false}>

                            <Reveal className="h-full w-full">
                                <div className="bg-gradient-to-b from-teal to-purple-400 bg-clip-text text-transparent">

                                    <h1 className="text-5xl font-extrabold mb-2
                                   md:text-7xl md:mb-6
                                   lg:text-8xl">

                                        I'm <br /> Jonathan Tran
                                    </h1>

                                    <h2 className="text-3xl font-extrabold mb-2
                                   md:text-5xl md:mb-4
                                   lg:text-6xl lg:mb-6">
                                        Software Engineer
                                    </h2>
                                    <h3 className="text-xl font-bold mb-2
                                   md:text-3xl md:mb-4
                                   lg:text-4xl lg:mb-6">
                                        University of California, Irvine <br />
                                        <span className=" text-sm md:text-lg lg:text-2xl xl:text-3xl">
                                            (Sept 2021 - Dec 2024)
                                        </span>
                                    </h3>
                                    <h3 className="text-xl font-bold
                                   md:text-3xl
                                   lg:text-4xl">
                                        Computer Science, B.S. <br />
                                        Statistics, Minor
                                    </h3>
                                </div>
                            </Reveal>

                        </SlideAppear>
                    </div>
                </div>

            </div>
            {/* Image & Contact Links */}
            <div className="flex flex-grow flex-col items-center my-0 mx-10
                            md:justify-center md:flex-grow-0"
            >

                {/* Image Container */}
                <SlideAppear className="flex justify-center mb-[5vh]" offsetX="20vw" offsetY="5vh" once={false}>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", damping: 20, stiffness: 200, mass: 2 }}>
                        <div className="relative overflow-hidden rounded-3xl max-w-[200px] max-h-[200px] h-[60vw] w-[60vw] shadow-3xl
                                    md:h-[30vw] md:w-[30vw] md:max-w-[500px] md:max-h-[500px]">
                            {/* Image */}
                            <img src="/portrait2.jpg" alt="Portrait of me at Figueroa Terrace and Centennial Street in L.A."
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </SlideAppear>

                {/* Contact Links */}
                <div className="flex justify-center w-[80%] h-fit z-20
                                md:w-40">
                    <a href="https://github.com/tranjm4" target="_blank"
                        className="p-1 mx-5 flex justify-center rounded-xl duration-300 hover:bg-dark-700">
                        <img src={githubLogo} alt="Github Logo"
                            className="w-[20vw] max-w-[100px] lg:max-w-[120px] xl:max-w-[150px]" />
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-tran-b405301ba/" target="_blank"
                        className="px-4 mx-5 flex justify-center rounded-xl duration-300 hover:bg-dark-700">
                        <img src={linkedinLogo} alt="LinkedIn Logo"
                            className="w-[15vw] max-w-[80px] lg:max-w-[100px] xl:max-w-[120px]" />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Title