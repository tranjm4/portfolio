import React from "react";
import { motion } from "framer-motion";

interface EntryProps {
    children: React.ReactNode;
    name: string;
}

const SkillEntry: React.FC<EntryProps> = ({ children, name }: EntryProps) => {
    return (
        <motion.div className="aspect-square bg-gradient-to-br from-purple-800 to-transparent via-transparent via-50% 
            p-5 flex justify-center items-center rounded-xl h-[100px] w-[100px] md:h-[125px] md:w-[125px] lg:h-[150px] lg:w-[150px]"
            variants={{
                hover: {
                    backgroundColor: "#6366f1",
                    scale: 1.1,
                    borderRadius: "30%",
                },
                initial: {
                }

            }}
            transition={{
                duration: 0.3,  
                ease: "easeOut",
            }}
            whileHover="hover"
            initial="initial"
        >
            <motion.div className="relative z-10 flex flex-col justify-evenly items-center"
                variants={{
                    hover: {
                        translateY: "-10%",
                        scale: 1.1
                    }
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: 0.1
                }}
            >
                {children}
                <motion.p className="font-thin text-light"
                    variants={{
                        hover: {
                            opacity: 1,
                            transform: "translateY(0)",
                        },
                        initial: {
                            opacity: 0,
                            transform: "translateY(100%)",
                        }
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                >
                    {name}
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default SkillEntry;