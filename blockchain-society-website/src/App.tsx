import React from "react";
import "./styles/App.scss";
import CSS from "csstype";
import { Parallax, Background } from "react-parallax";
import image from "./images/uw_quad.jpg";

const inlineStyle: CSS.Properties = {
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%,-50%)",
};

function App() {
  return (
    <div className="App font-inter ">
      {/** Parallax Background */}
      <div className="h-screen">
        <div className="absolute bg-black h-screen w-screen opacity-75"></div>
        <Parallax strength={200} className="opacity-25 h-screen w-screen">
          <Background className="custom-bg w-screen">
            <img
              src={image}
              alt="UW Quad"
              className="w-screen h-screen object-cover"
            />
          </Background>
        </Parallax>
        {/** Content */}
        <div className="absolute transform" style={inlineStyle}>
          <h1 className="text-white font-bold">UW Blockchain Society</h1>
          <p className="text-base md:text-2xl md:max-w-750 mt-5 text-center mx-auto text-gray-300 font-semibold tracking-tight leading-115p">
            Welcome to UW Blockchain Society! We are a tri-campus organization
            that aims to provide blockchain education to the masses.
          </p>
        </div>
      </div>

      <div className="h-screen">QA</div>
      <div className="h-screen">Organization Details</div>
      <div className="h-screen">Sponsors and Students CTA</div>
      <div className="h-screen">Announcements</div>
      <div className="h-screen">Events</div>
      <div className="h-screen">Contacts</div>
    </div>
  );
}

export default App;
