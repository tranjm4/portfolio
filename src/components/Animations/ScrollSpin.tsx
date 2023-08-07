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

    return (
        <motion.div ref={ref} className={className} style={{
            rotate: smoothVelocity
        }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default ScrollSpin;