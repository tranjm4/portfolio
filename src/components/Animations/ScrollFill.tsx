import React, { useRef } from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

interface Props {
    className: string;
}

const ScrollFill = ({ className }: Props) => {
    const ref = useRef(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleY = useTransform(scrollY, [0, 1000, 2000], [1, 0, 0], { clamp: false });

    return (
        <motion.div ref={ref}
                    className={className}
                    style={{ scaleY: scaleY }}
        />

    )
}

export default ScrollFill