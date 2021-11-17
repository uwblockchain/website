import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import "./styles/variables/Palette.scss";
import Hero from "./components/home/Hero/Hero";
import "aos/dist/aos.css";
import AOS from "aos";
import Statement from "./components/home/Statement/Statement";
import Dropdown from "./components/home/Nav/Dropdown";
import About from "./components/home/About/About";
import Faq from "./components/home/Faq/Faq";
import Events from "./components/home/Events/Events";
import Upcoming from "./components/home/Upcoming/Upcoming";
import Footer from "./components/home/Footer/Footer";
import Nav from "./components/home/Nav/Nav";
import background from "./images/gradient_background.jpeg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init();

    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, []);

  return (
    <div className="font-inter overflow-x-hidden App overflow-visible">
      <Nav toggle={toggle}></Nav>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Hero></Hero>
      <Statement />
      {/* <Faq></Faq> */}

      <About></About>
      {/* <div className="h-screen text-4xl">Sponsors and Students CTA</div>
      <div className="h-screen text-4xl bg-blue-900 align-middle">
        Announcements
      </div> */}
      {/* <div className="h-screen text-4xl">Events</div> */}
      <Events></Events>
      <Upcoming></Upcoming>

      {/* <div className="h-96 text-4xl bg-blue-900 align-middle">Contacts</div> */}
      <Footer></Footer>
      {/* <div className="h-36 text-4xl bg-blue-500 align-middle">Bottom Bar</div> */}
    </div>
  );
}

export default App;
