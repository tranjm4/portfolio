import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
    children: React.ReactNode;
    className: string
}

const Reveal: React.FC<Props> = ({ children, className }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className="relative overflow-hidden">
            {children}
            <motion.div className={className}
                style={{
                    position: "absolute",
                    background: "#6366f1",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0
                }}
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 1,
                    delay: 1.25
                }}
            >
            </motion.div>
        </div>
    )
}

export default Reveal;