import "./Title.css";

const Title = () => {
    return (
        <div id="Title">
            <div id="Title-container">
                <div className="header-container">
                    <div className="slider" />
                    <div className="header">
                        <h1>I'm <br /> Jonathan <br /> Tran</h1>
                        <h2>University of <br /> California, Irvine</h2>
                        <h3>Computer Science, B.S. <br /> Statistics, Minor</h3>
                        <h3>Sept 2021 - Dec 2024</h3>
                    </div>
                </div>
                <div id="img-container">
                    <div id="img-portrait" className="image">
                        <img id="portrait" src="/portrait.jpg"
                            alt="Portrait of me at Crescent Bay Park Point (Laguna Beach)!" />
                    </div>
                    <div id="logos-container">
                        <a href="https://www.linkedin.com/in/jonathan-tran-b405301ba/" target="_blank">
                            <img id="linkedin-logo" src="/links/linkedin.svg" />
                        </a>
                        <a href="https://github.com/tranjm4" target="_blank">
                            <img id="github-logo" src="/links/github.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="arrow-container">
                <i id="arr" className="arrow down"></i>
            </div>
        </div>
    )
}

export default Title