import React from "react";
import ScrollSpin from "../Animations/ScrollSpin";
import ScrollFill from "../Animations/ScrollFill";

const Open = () => {
    return (
        <div className="relative h-[150vh] w-[100vw] lg:h-[180vh] xl:h-[200vh] flex flex-col items-center">
            <div className="sticky w-fit h-fit top-[calc(50%-15vw)] mb-[calc(50%+15vw)] z-10 
                            md:top-[calc(50%-10vw)] rotate-45 md:mb-[calc(50%-10vw)]">
                    <ScrollSpin className="h-[30vw] w-[30vw] shadow-2xl
                                           md:h-[20vw] md:w-[20vw] xl:w-[15vw] xl:h-[15vw]">
                        <div className="h-full w-full rounded-3xl
                                        bg-gradient-to-tr from-teal to-purple-400"
                        >
                        </div>
                    </ScrollSpin>
            </div>
            <ScrollFill className="fixed w-[100vw] h-[100vh] bg-darkblue-800 pointer-events-none" 
            />
        </div>
    )
}

export default Open