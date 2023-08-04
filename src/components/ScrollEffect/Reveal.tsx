import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: React.ReactNode;
    fromLeft: boolean;
}

const Reveal = ({ children, fromLeft }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const directionLeft = (fromLeft) ? "100%" : 0;
    const directionRight = (!fromLeft) ? "100%" : 0;

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0, right: 0 },
                    visible: { left: directionLeft, right: directionRight }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.6 }}
                style= {{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "var(--color-primary)",
                    zIndex: 2,
                }}
            />
        </div>
    )
}

export default Reveal;