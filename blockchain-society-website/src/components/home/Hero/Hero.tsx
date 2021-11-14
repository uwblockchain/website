import React from "react";
import { Background, Parallax } from "react-parallax";
import background from "../../../images/gradient_background.jpeg";
import logo from "../../../images/logos/society_logo.png";
import FadeIn from "react-fade-in";
import "../../../styles/Button.scss";
import { Fade } from "react-bootstrap";

function Hero() {
  return (
    <div className="h-screen relative">
      <div className="bg-black absolute h-screen w-screen"></div>
      <Parallax strength={200} className=" h-screen w-screen absolute ">
        <FadeIn>
          <Background className="custom-bg w-screen  h-screen ">
            <img
              src={logo}
              alt="Logo"
              className=" object-contain h-screen w-screen absolute transform translate-y-1/3 md:translate-y-1/4  "
            />
          </Background>
        </FadeIn>
      </Parallax>
      {/** Content */}
      <FadeIn className="absolute transform -translate-y-1/3 -translate-x-1/2 left-1/2 top-1/4">
        <h1 className="text-indigo-600 font-bold">Blockchain Society</h1>
        <p className="text-base md:text-2xl md:max-w-500 mt-4 mb-6 mx-auto text-yellow-50 font-semibold tracking-tight leading-115p">
          University of Washington's Blockchain Organization
        </p>
        <button type="button" className="cta-btn">
          Subscribe to our Newletter
        </button>
      </FadeIn>
    </div>
  );
}

export default Hero;
