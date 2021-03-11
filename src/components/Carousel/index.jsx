// Based on David Khourshid's codesandbox example:
// https://codesandbox.io/s/funny-wind-p59ei?file=/src/index.js
import { useState } from "react";
import PropTypes from "prop-types";
import "./carousel.css";

function Carousel({ slides }) {
  const [index, setIndex] = useState(0);

  return (
    <section
      data-testid="carousel-container"
      className="carousel-container"
      onClick={() => setIndex((index + 1) % slides.length)}
    >
      {slides.map((screen, i) => (
        <article
          className="carousel-slide"
          key={i}
          hidden={i !== index || undefined}
        >
          {screen}
        </article>
      ))}
    </section>
  );
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default Carousel;
