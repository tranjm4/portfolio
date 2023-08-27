import React from 'react';
import SlideAppear from '../Animations/SlideAppear';
import TextBoxReveal from '../Animations/TextBoxReveal';
import Reveal from '../Animations/Reveal';

interface Props {
    title: string;
    description: string | React.ReactNode;
}

const Text: React.FC<Props> = ({ title, description }: Props) => {
    return (
        <div className="relative flex flex-col md:flex-row md:items-center w-full h-fit mb-10">
            {/* Section Title */}
            <SlideAppear className="w-full z-20 " offsetX="10vw" offsetY="-5vh" once={true}>
                <h1 className="text-6xl font-extrabold mb-5 md:mb-0 text-teal lg:text-8xl">
                    {title}
                </h1>
            </SlideAppear>

            {/* Section Description */}
            <div className="relative h-fit w-fit p-5 lg:p-10">
                <TextBoxReveal className="absolute w-[100%] h-[100%] lg:w-full lg:h-full top-[0%] left-[-10%]
                            bg-gradient-to-br from-purple-800 to-transparent via-transparent via-70%" initialScale="0.5" offsetX="-20vw" offsetY="10vh" />
                <TextBoxReveal className="absolute w-[80%] h-[80%] top-[30%] left-[0%]
                            bg-gradient-to-br from-purple-800 to-transparent via-transparent via-70%" initialScale="0.5" offsetX="10vw" offsetY="-10vh" />
                <TextBoxReveal className="absolute w-[80%] h-[80%] top-[10%] left-[30%] lg:left-[25%]
                            bg-gradient-to-br from-purple-800 to-transparent via-transparent via-70%" initialScale="2" offsetX="10vw" offsetY="-5vh" />

                <SlideAppear className="w-full md:w-full" offsetX="10vw" offsetY="10vh" once={true}>
                    <Reveal className="">
                        <h2 className="text-lg text-light z-20 font-thin
                                lg:text-2xl xl:text-3xl">

                            {description}

                        </h2>
                    </Reveal>
                </SlideAppear>

            </div>
        </div>
    )
}

export default Text