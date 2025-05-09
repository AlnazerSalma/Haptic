import React from "react";
import AnimatedSlider from '../components/AnimatedSlider/StarterPageSlider';
import sliderItems from '../data/Starter/SliderData';

function StarterPage({ onStart }) {
  return (
    <section className="starter-section">
      <div className="starter-left">
        <h1 className="starter-heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h2 className="starter-subheading">
          {"I'M a designer working \nwith startups globally.\nCurrently steering the \nship at "}
          <strong
            className="main-name hover-link"
            onClick={onStart}
          >
            Haptic.
          </strong>
        </h2>
        <AnimatedSlider items={sliderItems} />
      </div>

      <div className="starter-icon">
        <span className="wave" role="img" aria-labelledby="wave">
          ⌛
        </span>
      </div>
    </section>
  );
}

export default StarterPage;
