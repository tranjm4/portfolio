import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Props {
    children: React.ReactNode;
    className: string;
}

const ScrollSpin = ({ children, className }: Props) => {
    const ref = useRef(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const springY = useSpring(scrollY, {
        damping: 200, stiffness: 250, mass: 2
    });
    const smoothScrollY = useTransform(springY, [0, 1500, 1600], [0, 1200, 1200], { clamp: false });

    const scrollScale = useTransform(scrollY, [0, 500, 1000, 2100], [0.5, 1.75, 0, 0], { clamp: false });
    const smoothScrollScale = useSpring(scrollScale, {
        damping: 50,
        stiffness: 200,
        mass: 1
    });

    return (
        <motion.div ref={ref} className={className} style={{
            rotate: smoothScrollY,
            scale: smoothScrollScale,
        }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0.2 }}
            transition={{ duration: 0.75, delay: 0.25 }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollSpin;