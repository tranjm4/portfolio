import React from "react";
import "./About.css";

import Intro from "./Intro";
import Skills from "./Skills";
import Hobbies from "./Hobbies";

import Appear from "../ScrollEffect/Appear";
import Ribbon from "../ScrollEffect/Ribbon";


const About: React.FC = () => {
    return (
        <div className="About">
            <div className="About-container">
                <Appear fromLeft={true}>
                    <div className="About-entry-1">
                        <Intro />
                    </div>
                    <Ribbon fromLeft={true} />
                </Appear>

                <Appear fromLeft={false}>
                    <div className="About-entry-2">
                        <Skills />
                    </div>
                    <Ribbon fromLeft={false} />
                </Appear>

                <Appear fromLeft={true}>
                    <div className="About-entry-1">
                        <Hobbies />
                    </div>
                    <Ribbon fromLeft={true} />
                </Appear>
            </div>
        </div>
    );


}

export default About