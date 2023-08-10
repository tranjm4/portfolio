import SlideAppear from "./Animations/SlideAppear";
import { motion } from "framer-motion";
import TextBox from "./Supplemental/TextBox";
import Reveal from "./Animations/Reveal";

const Title = () => {
    return (
        <div className="flex flex-col min-h-screen h-fit md:flex-row md:justify-center mb-[30vh] overflow-hidden">
            {/* Title text */}
            <div className="flex flex-grow justify-center items-center md:flex-grow xl:flex-grow-0 mx-0 md:mx-0 lg:ml-10 lg:mr-0">
                <div className="flex flex-col items-center h-fit w-full p-10 xl:p-0"
                >
                    <TextBox className="w-fit h-full">

                        <SlideAppear className="flex flex-col w-full h-full" offsetX="-20vw" offsetY="-10vh" once={false}>

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
                    </TextBox>
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
                    <a href="https://github.com/tranjm4"
                        className="p-1 mx-5 flex justify-center rounded-xl duration-300 hover:shadow-even">
                        <img src="/links/github.svg" alt="Github Logo"
                            className="w-[20vw] max-w-[100px] lg:max-w-[120px] xl:max-w-[150px]" />
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-tran-b405301ba/"
                        className="px-4 mx-5 flex justify-center rounded-xl duration-300 hover:shadow-even">
                        <img src="/links/linkedin.svg" alt="LinkedIn Logo"
                            className="w-[15vw] max-w-[80px] lg:max-w-[100px] xl:max-w-[120px]" />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Title