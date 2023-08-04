import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  fromLeft: boolean;
}

const Appear: React.FC<Props> = ({ children, fromLeft }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const directionX = (fromLeft === true) ? "-20%" : "20%";

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="Appear" ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {opacity: 0.1, translateX: directionX},
          visible: { opacity: 1, translateX: "0"}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Appear