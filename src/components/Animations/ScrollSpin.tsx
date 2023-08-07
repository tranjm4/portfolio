import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

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

    const scrollVelocity = useVelocity(scrollY);
    const velocityFactor = useTransform(scrollVelocity, [0, 100], [0, 20], { clamp: false });
    const smoothVelocity = useSpring(velocityFactor, {
        damping: 50,
        stiffness: 100,
        mass: 2
    });

    const scrollScale = useTransform(scrollY, [0, 1000, 2000, 2100], [1, 1.75, 0, 0], { clamp: false });
    const smoothScrollScale = useSpring(scrollScale, {
        damping: 50,
        stiffness: 200,
        mass: 1
    });

    return (
        <motion.div ref={ref} className={className} style={{
            rotate: smoothVelocity,
            scale: smoothScrollScale
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