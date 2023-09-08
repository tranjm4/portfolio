import React, { useEffect, useRef } from 'react';
import SlideAppear from '../Animations/SlideAppear';
import TextBoxReveal from '../Animations/TextBoxReveal';
import Reveal from '../Animations/Reveal';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Props {
    children: React.ReactNode;
}

const Text: React.FC<Props> = ({ children }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);
    return (
        <motion.div ref={ref} className="relative h-fit w-fit py-5 md:pr-10"
            initial="hidden"
            animate={mainControls}
        >
            <TextBoxReveal className="absolute w-[100%] h-[100%] lg:w-full lg:h-full top-[0%] left-[-10%] rounded-md rounded-tr-[20%] rounded-bl-[20%]
                        bg-gradient-to-br from-purple-800 to-transparent via-transparent via-70%" initialScale="0.5" offsetX="-20vw" offsetY="10vh" />
            <TextBoxReveal className="absolute w-[80%] h-[80%] top-[30%] left-[0%] rounded-md rounded-tr-[10%] rounded-bl-[10%]
                        bg-gradient-to-br from-purple-800 to-transparent via-transparent via-70%" initialScale="0.5" offsetX="10vw" offsetY="-10vh" />
            <TextBoxReveal className="absolute w-[80%] h-[80%] top-[10%] left-[30%] lg:left-[25%] rounded-md rounded-tr-[10%] rounded-bl-[10%]
                        bg-gradient-to-br from-purple-800 to-transparent via-transparent via-70%" initialScale="2" offsetX="10vw" offsetY="-5vh" />

            <SlideAppear className="w-full md:w-full" offsetX="10vw" offsetY="10vh" once={true}>
                <Reveal className="">
                    <h2 className="text-lg text-light z-20 font-thin
                            lg:text-2xl xl:text-3xl">

                        {children}

                    </h2>
                </Reveal>
            </SlideAppear>

        </motion.div>
    )
}

export default Text