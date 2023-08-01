import React from 'react';

import "./Intro.css";

import Reveal from '../ScrollEffect/Reveal';

class Circle {
    top: string;
    left: string;
    width: string;
    borderWidth: string;
    borderColor: string;
    rotate: string;

    constructor(top: number, left: number, width: number,
        borderWidth: number, borderColor: string,
        rotate: number) {
        this.top = top + "%";
        this.left = left + "%";
        this.width = width + "%";
        this.borderWidth = borderWidth + "px";
        this.borderColor = "var(--" + borderColor + ")";
        this.rotate = rotate + "deg";
    }
}

const Intro = () => {
    const circles = [
        new Circle(10, 15, 30, 15, "color-secondary", 0),
        new Circle(0, 25, 40, 20, "color-tertiary", 300),
        new Circle(10, 45, 30, 15, "color-primary", 150),
        new Circle(20, 30, 40, 25, "color-quartiary", 100),
        new Circle(25, 25, 30, 20, "color-light", 220)
    ];
    return (
        <>
            <div className="header">
                <Reveal fromLeft={true}>
                    <h1>Hello there!</h1>
                </Reveal>
                <Reveal fromLeft={true}>
                    <h2>
                        I'm a third-year undergraduate studying computer science and statistics
                        at UC Irvine.
                    </h2>
                    <h2>
                        I'm eager to learn new skills (such as building this website!)
                        as well as helping others learn new skills. I currently tutor students in data structures
                        in C++ as well as AP Calculus.
                    </h2>
                    <h2>
                        Helping build each other up brings us all up :)
                    </h2>
                </Reveal>
            </div>
            <div className="graphic-container">
                <div className="circle-container">
                    {circles.map((circle, index) => (
                        <div className="circle" id={"circle-" + (index + 1)}
                            style={{
                                top: circle.top,
                                left: circle.left,
                                width: circle.width,
                                borderWidth: circle.borderWidth,
                                borderLeftColor: circle.borderColor,
                                borderTopColor: circle.borderColor,
                                rotate: circle.rotate,
                            }} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Intro