import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

const StickyEntry = ({ children }: Props) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center center", "end end"]
    })
    const scaleX = useSpring(scrollYProgress, {
        damping: 50,
        stiffness: 700,
        restDelta: 0.0001,
        mass: 1
    });
    return (
        <>
            <div ref={ref} className="relative min-h-screen h-[150vh] w-screen mb-[20vh]">
                <motion.div ref={ref} className="sticky top-0 left-0 right-0 h-5 bg-red origin-left rounded-md z-30"
                    style={{ scaleX }}
                />
                <div className="sticky top-0 left-0">
                    {children}
                </div>
            </div>
        </>
    )
}

export default StickyEntry