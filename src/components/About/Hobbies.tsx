import React, { useState } from 'react';

import "./Hobbies.css";

import Reveal from '../ScrollEffect/Reveal';

const Hobbies = () => {
    const photos = [
        // "src/assets/photography/alley.jpg",
        "src/assets/photography/beach_rock.jpg",
        // "src/assets/photography/library.jpg",
        // "src/assets/photography/paraglider.jpg",
        // "src/assets/photography/park.jpg",
        // "src/assets/photography/sunrise.jpg",
        // "src/assets/photography/vinyls.jpg"
    ];

    const [photoState, setPhotoState] = useState(0)

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
                </Reveal>
            </div>
            <div className="graphic-container">
                <div className="photo-container">
                    <Reveal fromLeft={true} >
                        <div className="photo">
                            <img src="src/assets/photography/beach_rock.jpg"></img>
                        </div>
                    </Reveal>
                </div>
            </div>
        </>
    )
}

export default Hobbies