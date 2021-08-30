import React from "react";
import "./HeroStyles.css";
import Lottie from "react-lottie";
import meditationAnimation from "../../meditationAnimation.json";
import { Btn } from "../../GlobalStyles/GlobalStyles";

function Hero() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: meditationAnimation,
  };

  return (
    <div className="hero">
      <div className="hero__left">
        <div className="hero__title">
          <h2>
            Meditation can helps you increase both physical and mental peace and
            calm.
          </h2>
        </div>
        <div className="hero__text">
          <p>
            During meditation you focus your attention and eliminate stream of
            jumbled thoughts that maybe crowding your mind and causing stress.
          </p>
        </div>
        <Btn to="main">Get Started</Btn>
      </div>

      <div className="hero__right">
        <Lottie classname="lottie" options={options} />
      </div>
    </div>
  );
}

export default Hero;
