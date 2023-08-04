import "./Hobbies.css";

import Reveal from '../ScrollEffect/Reveal';
import Carousel from "./Carousel/Carousel";

const Hobbies = () => {
    return (
        <>
            <div className="header">
                <Reveal fromLeft={true}>
                    <h1>Sights, Sounds, Coffee</h1>
                </Reveal>
                <Reveal fromLeft={true}>
                    <h2>
                        When I'm not programming or studying,
                        I indulge in music, photography, and coffee shops.
                    </h2>
                    <h2>
                        You can find me either singing with my acapella group
                        (<a href="https://www.instagram.com/vevocalists/?hl=en" target="_blank">The Vermillion Vocalists</a>),
                        jamming with my electric guitar,
                        driving to scenic spots to take photos,
                        or sipping on a nice cup of coffee.
                    </h2>
                    <h2>
                        Here are some personal favorite photos I've taken :)
                    </h2>
                </Reveal>
            </div>
            <div className="graphic-container">
                <Carousel />
            </div>
        </>
    )
}

export default Hobbies