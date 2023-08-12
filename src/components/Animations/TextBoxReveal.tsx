import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    className: string;
    initialScale: string;
    offsetX: string;
    offsetY: string;
}

const TextBoxReveal = ({ className, initialScale, offsetX, offsetY }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div ref={ref} className={className}
            variants={{
                hidden: { opacity: 0.3, scale: initialScale, translateX: offsetX, translateY: offsetY },
                visible: { opacity: 1, scale: 1, translateX: 0, translateY: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ type: "spring", damping: 20, stiffness: 50, mass: 1, restDelta: 0.001, delay: 0.5 }}
        >
        </motion.div>
    )
}

export default TextBoxReveal;