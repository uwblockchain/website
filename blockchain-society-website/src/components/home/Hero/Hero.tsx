import React from "react";
import { Background, Parallax } from "react-parallax";
import background from "../../../images/stock/uw_quad.jpg";
import logo from "../../../images/logos/society_black_logo.png";
import FadeIn from "react-fade-in";
import "../../../styles/Button.scss";

function Hero() {
  return (
    <div className="h-screen relative">
      {/** Parallax Background */}
      <div className="absolute bg-purple-900 h-screen w-screen opacity-75"></div>
      <Parallax
        strength={200}
        className="opacity-25 h-screen w-screen absolute"
      >
        <Background className="custom-bg w-screen">
          <img
            src={background}
            alt="UW Quad"
            className="w-screen h-screen object-cover"
          />
        </Background>
      </Parallax>
      {/** Content */}
      <FadeIn className="absolute text-left px-8 md:px-20 py-8 md:py-16 max-w-5xl md:left-1/4  md:-translate-x-1/4 sm:left-1/2  sm:-translate-x-1/2 top-1/2 transform -translate-y-1/2 bg-white rounded-xl drop-shadow-2xl mx-4">
        <div className="flex row-auto items-center">
          <img src={logo} alt="Logo" className="h-16 object-cover mr-4 "></img>
          <h1 className="text-indigo-900 font-bold ">Blockchain Society</h1>
        </div>
        <p className="text-base md:text-2xl md:max-w-500 mt-4 mb-6 mx-auto text-gray-700 font-semibold tracking-tight leading-115p">
          Welcome to UW Blockchain Society! We are a tri-campus organization
          that aims to provide blockchain education to the masses.
        </p>
        <button type="button" className="cta-btn">
          Subscribe to our Newletter
        </button>
      </FadeIn>
    </div>
  );
}

export default Hero;
