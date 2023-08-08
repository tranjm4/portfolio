import React from "react";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    className: string;
    offsetX: string;
    offsetY: string;
}

const SlideAppear: React.FC<Props> = ({ children, className, offsetX, offsetY }: Props) => {
    return (
        <motion.div className={className}
        whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
        initial={{ opacity: 0.2, translateX: offsetX, translateY: offsetY }}
        transition={{ type: "spring", damping: 100, stiffness: 300, restDelta: 0.01,
                      delay: 0.25 }}
        >
            {children}
        </motion.div>
  )
}

export default SlideAppear;