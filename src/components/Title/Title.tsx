import SlideAppear from "../Animations/SlideAppear";
import { motion } from "framer-motion";
import Reveal from "../Animations/Reveal";
import githubLogo from "../../assets/links/github.svg";
import linkedinLogo from "../../assets/links/linkedin.svg";

const TitleText: React.FC = () => {
    return (
        <SlideAppear className="" offsetX="-20vw" offsetY="-10vh" once={false} index={0}>

            <Reveal className="">
                <div className="bg-gradient-to-b from-teal to-purple-400 bg-clip-text text-transparent">

                    <h1 className="text-5xl font-extrabold mb-2
                   md:text-7xl md:mb-6">

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
                        <span className=" text-sm md:text-lg lg:text-2xl">
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
    )
}

const Image: React.FC = () => {
    return (
        <SlideAppear className="" offsetX="20vw" offsetY="5vh" once={false} index={0}>
            <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 20, stiffness: 200, mass: 2 }}>
                <div className="relative flex overflow-hidden rounded-3xl aspect-square max-w-[200px] w-[60vw] shadow-3xl
                                    md:w-[50%] md:max-w-[500px] lg:w-[100%] lg:max-w-[400px]">
                    {/* Image */}
                    <img src="/portrait2.jpg" alt="Portrait of me at Figueroa Terrace and Centennial Street in L.A."
                        className="h-full w-full object-cover"
                    />
                </div>
            </motion.div>
        </SlideAppear>
    )
}

const MediaLinks: React.FC = () => {
    return (
        <div className="flex justify-center w-[80%] h-fit z-20
                                md:w-40">
            <a href="https://github.com/tranjm4" target="_blank"
                className="p-1 mr-5 flex justify-center rounded-xl duration-300 hover:bg-dark-700">
                <img src={githubLogo} alt="Github Logo"
                    className="w-[20vw] max-w-[100px] lg:max-w-[120px] xl:max-w-[150px]" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-tran-b405301ba/" target="_blank"
                className="px-4 ml-5 flex justify-center rounded-xl duration-300 hover:bg-dark-700">
                <img src={linkedinLogo} alt="LinkedIn Logo"
                    className="w-[15vw] max-w-[80px] lg:max-w-[100px] xl:max-w-[120px]" />
            </a>
        </div>
    )
}

const Title = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[100vh] w-full py-24 px-5 lg:px-10 [&>*]:my-5
            lg:flex-row mb-[20vh]">
            <TitleText />
            <div className="flex flex-col items-center justify-center [&>*]:my-5 lg:ml-10">
                <Image />
                <MediaLinks />
            </div>

        </div>
    )
}

export default Title