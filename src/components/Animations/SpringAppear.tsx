import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
    children: React.ReactNode;
    className: string;

}

const SpringAppear = ({ children, className }: Props) => {
    return (
        <motion.div className={className}
        whileInView={{ opacity: 1, translateX: 0 }}
        initial={{ opacity: 0.2, translateX: "-50%" }}
        transition={{ type: "spring", damping: 200, stiffness: 500, delay: 0.25 }}
        >
            {children}
        </motion.div>
  )
}

export default SpringAppear;