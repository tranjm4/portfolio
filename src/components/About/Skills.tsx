import "./Skills.css";

import Reveal from '../ScrollEffect/Reveal';

class Card {
    rotate: string;
    zIndex: number;
    svg: string

    constructor(rotate: number, zIndex: number, svg: string) {
        this.rotate = rotate + "deg";
        this.zIndex = zIndex;
        this.svg = svg;
    }
}

const Skills = () => {
    const cards = [
        new Card(-25, 8, "./src/assets/cpp_logo.svg"),
        new Card(-15, 7, "./src/assets/react_logo.svg"),
        new Card(0, 10, "./src/assets/python_logo.svg"),
        new Card(15, 9, "./src/assets/firebase_logo.svg"),
    ]

    return (
        <>
            <div className="header">
                <Reveal fromLeft={false}>
                    <h1>Multipurpose <s>Gadgets</s> Individual</h1>
                </Reveal>
                <Reveal fromLeft={false}>
                    <h2>
                        Tools are fundamental for solving problems. <br />
                    </h2>
                    <h2>
                        However, it is always better to have the right tool for the task
                        rather than the right task for the tool.
                    </h2>
                    <h2>
                        My goal is to be as prepared as possible.
                    </h2>
                </Reveal>
            </div>
            <div className="graphic-container" id="cards">
                <div className="card-container">
                    {cards.map((card, index) => (
                        <div className="card" key={"card" + index} id={"card-" + (index + 1)}
                            style={{
                                rotate: card.rotate,
                                zIndex: card.zIndex,
                            }}>
                            <div className="logo-container">
                                <img className="logo-img" id={"logo-" + (index + 1)}
                                    src={card.svg} />
                            </div>
                        </div>
                    ))}
                    <img id="pointer" src={"./src/assets/hand-pointer.svg"}></img>
                </div>
            </div>
        </>
    )
}

export default Skills