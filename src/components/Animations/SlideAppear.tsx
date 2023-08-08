import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
    children: React.ReactNode;
    className: string;
    offsetX: string;
    offsetY: string;
    once: boolean;
}

const SlideAppear: React.FC<Props> = ({ children, className, offsetX, offsetY, once }: Props) => {
    const transition = {
        type: "spring",
        damping: 100,
        stiffness: 300,
        restDelta: 0.01,
        delay: 0.25
    };
    const initial = {
        opacity: 0.2,
        translateX: offsetX,
        translateY: offsetY
    };
    const visible = {
        opacity: 1, 
        translateX: 0, 
        translateY: 0
    }

    if (!once) {
        return (
            <motion.div className={className}
                whileInView={visible}
                initial={initial}
                transition={transition}
            >
                {children}
            </motion.div>
        )
    }
    else {
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
                    hidden: initial,
                    visible: visible
                }}
                initial="hidden"
                animate={mainControls}
                transition={transition}
            >
                {children}
            </motion.div>
        )
    }
}

export default SlideAppear;