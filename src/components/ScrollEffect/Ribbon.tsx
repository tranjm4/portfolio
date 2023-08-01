import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

import "./Ribbon.css";

interface Props {
    fromLeft: boolean
}

const Ribbon: React.FC<Props> = ({ fromLeft }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    const initialX = (fromLeft) ? "-100%" : "100%";
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div className="Ribbon" ref={ref} style={{
            position: "absolute", overflow: "hidden",
            top: "50%",
            height: "calc(5vh + 10vw)",
            width: "100%",
            zIndex: 1, 
            boxShadow: "var"
        }}>
            <motion.div
                variants={{
                    hidden: { translateX: initialX },
                    visible: { translateX: "0" }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
                style= {{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "var(--color-primary)",
                    zIndex: 1,
                }}
            />
        </div>
    )
}

export default Ribbon;