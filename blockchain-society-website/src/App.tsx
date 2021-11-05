import React, { useEffect } from "react";
import "./styles/App.scss";
import Hero from "./components/home/Hero/Hero";
import FadeIn from "react-fade-in";
import "aos/dist/aos.css";
import AOS from "aos";
import Faq from "./components/home/Faq/Faq";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-inter overflow-x-hidden App ">
      <Hero></Hero>

      {/* <Faq></Faq> */}

      <div className="h-screen text-4xl bg-blue-900 align-middle">
        Organization Details
      </div>
      <div className="h-screen text-4xl">Sponsors and Students CTA</div>
      <div className="h-screen text-4xl bg-blue-900 align-middle">
        Announcements
      </div>
      <div className="h-screen text-4xl">Events</div>
      <div className="h-96 text-4xl bg-blue-900 align-middle">Contacts</div>
      <div className="h-36 text-4xl bg-blue-500 align-middle">Bottom Bar</div>
    </div>
  );
}

export default App;
