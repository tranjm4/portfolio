import React from "react";
import ScrollSpin from "./Animations/ScrollSpin";
import ScrollFill from "./Animations/ScrollFill";

const Open: React.FC = () => {
    return (
        <div className="relative h-[200vh] w-screen lg:h-[180vh] xl:h-[200vh] flex flex-col items-center">
            <div className="sticky w-fit h-fit top-[calc(50%-15vw)] mb-[calc(50%+15vw)] z-10 
                            md:top-[calc(50%-10vw)] rotate-45 md:mb-[calc(50%-10vw)]">
                    <ScrollSpin className="h-[30vw] w-[30vw] shadow-2xl
                                           md:h-[calc(10vw+10vh)] md:w-[calc(10vw+10vh)] xl:w-[15vw] xl:h-[15vw]">
                        <div className="h-full w-full rounded-3xl
                                        bg-gradient-to-tr from-teal to-red via-purple-400"
                        >
                        </div>
                    </ScrollSpin>
            </div>
            <ScrollFill className="fixed w-screen h-screen bg-darkblue-800 pointer-events-none shadow-3xl" 
            />
        </div>
    )
}

export default Open