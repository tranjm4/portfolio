import React, { useState } from 'react';
import "./Carousel.css";


const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos: string[] = [
    "./photography/beach_rock.jpg",
    "./photography/paraglider.jpg",
    "./photography/park.jpg",
    "./photography/sunrise.jpg",
  ];

  const captions: string[] = [
    "A rock formation near the coast of Crescent Bay. The surrounding area was equally as beautiful!",
    "A paraglider at Aliso Beach caught at the perfect moment - my favorite photo :)",
    "Reflection of light across a pond at Yorba Linda Regional Park. \
      I was celebrating the completion of finals.",
    "One of my first photos: sunrise caught from the top of a parking structure \
      at UC Irvine. The way the sun illuminated the clouds was breathtaking.",
  ];

  const numItems: number = photos.length;

  const handleClickLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(numItems - 1);
    }
    else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClickRight = () => {
    if (currentIndex === (numItems - 1)) {
      setCurrentIndex(0);
    }
    else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="carousel-button-container" onClick={handleClickLeft}>
          <div className="carousel-button" id="carousel-button-left" />
        </button>
        <div className="carousel-entry-container">
          {photos.map((photo, index) => (
            (index != currentIndex) ? null :
              <>
                <div className="carousel-img-container">
                  <img src={photo} />
                </div>
                <p>
                  {captions[currentIndex]}
                </p>
              </>
          ))}
        </div>
        <button className="carousel-button-container" onClick={handleClickRight}>
          <div className="carousel-button" id="carousel-button-right"
            onClick={handleClickRight} />
        </button>
      </div>
    </div>
  )
}

export default Carousel;