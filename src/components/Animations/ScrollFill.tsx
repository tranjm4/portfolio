import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface Props {
    className: string;
}

const ScrollFill = ({ className }: Props) => {
    const ref = useRef(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleY = useTransform(scrollY, [0, 1000, 2000], ["0", "-100%", "-100%"], { clamp: false });

    return (
        <motion.div ref={ref}
                    className={className}
                    style={{ top: scaleY }}
        />

    )
}

export default ScrollFill