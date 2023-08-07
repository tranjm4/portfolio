import SpringAppear from "../Animations/SpringAppear";

const Title = () => {
    return (
        <div className="h-[100vh] w-[100vw] flex flex-col md:flex-row md:justify-evenly">

            {/* Title text */}
            <SpringAppear className="flex justify-center mx-10 md:flex-grow">

                <div className="flex flex-col h-fit bg-gradient-to-b from-teal to-purple-400 bg-clip-text text-transparent
                                m-8">
                    <h1 className="text-6xl font-bold mb-2
                                   md:text-8xl">
                        I'm <br /> Jonathan Tran
                    </h1>
                    <h2 className="text-3xl font-bold mb-2">
                        University of California, Irvine
                    </h2>
                    <h3 className="text-xl font-bold mb-2">
                        Computer Science, B.S. <br />
                        Statistics, Minor
                    </h3>
                    <h3 className="text-xl font-bold">
                        Sept 2021 - Dec 2024
                    </h3>
                </div>

            </SpringAppear>
            {/* Image & Contact Links */}
            <div className="flex flex-col flex-grow items-center justify-evenly mx-10">

                {/* Image Container */}
                <SpringAppear className="flex justify-center">

                    <div className="relative overflow-hidden rounded-full max-w-[350px] max-h-[350px] h-[60vw] w-[60vw] shadow-3xl
                                    md:h-[30vw] md:w-[30vw]">
                        {/* Image */}
                        <img src="/portrait.jpg" alt="Portrait of me at Crescent Bay"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </SpringAppear>

                {/* Contact Links */}
                <div className="flex justify-evenly w-[80%] h-fit z-10
                                md:w-40">
                    <a href="https://github.com/tranjm4"
                        className="p-1 mx-5 flex justify-center rounded-lg duration-300 hover:shadow-3xl">
                        <img src="/links/github.svg" alt="Github Logo"
                            className="w-[20vw] max-w-[100px]" />
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-tran-b405301ba/"
                        className="px-4 mx-5 flex justify-center rounded-lg duration-300 hover:shadow-3xl">
                        <img src="/links/linkedin.svg" alt="LinkedIn Logo"
                            className="w-[15vw] max-w-[80px]" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Title