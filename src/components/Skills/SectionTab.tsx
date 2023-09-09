import { motion, AnimationControls } from "framer-motion";

interface SectionTabProps {
    children: React.ReactNode;
    name: string;
    index: number;
    handleClick: (n: number) => void;
    animateControls: AnimationControls;
}

const SectionTab: React.FC<SectionTabProps> = ({ children, name, index, handleClick, animateControls }: SectionTabProps) => {
    return (
        <div className="w-full block">
            <button onClick={() => handleClick(index)}
                className="w-full p-3 bg-purple-400/30 rounded-md rounded-bl-2xl rounded-tr-2xl hover:bg-purple-400/70 duration-300"
            >
                <h2 className="text-left font-bold text-teal text-3xl lg:text-4xl">{name}</h2>
            </button>
            {/* <hr className="border-teal border-2 lg:border-4"></hr> */}
            <div className="overflow-hidden h-fit w-full">

                <motion.div
                    onClick={() => handleClick(index)}
                    className="origin-top hover:cursor-pointer"
                    variants={{
                        closed: {
                            height: 0,
                            scaleY: 0,
                            opacity: 0,
                            translateY: "-100%"
                        },
                        open: {
                            height: "fit-content",
                            scaleY: 1,
                            opacity: 1,
                            translateY: 0
                        }
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    initial="closed"
                    animate={animateControls}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    )
}

export default SectionTab;