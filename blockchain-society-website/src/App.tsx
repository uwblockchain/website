import React, { useEffect } from "react";
import "./styles/App.scss";
import Hero from "./components/home/Hero/Hero";
import FadeIn from "react-fade-in";
import "aos/dist/aos.css";
import AOS from "aos";
import About from "./components/home/About/About";
import Faq from "./components/home/Faq/Faq";
import Events from "./components/home/Events/Events";
import Upcoming from "./components/home/Upcoming/Upcoming";
import Footer from "./components/home/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-inter overflow-x-hidden App ">
      <Hero></Hero>

      {/* <Faq></Faq> */}

      <About></About>
      <div className="h-screen text-4xl">Sponsors and Students CTA</div>
      <div className="h-screen text-4xl bg-blue-900 align-middle">
        Announcements
      </div>
      {/* <div className="h-screen text-4xl">Events</div> */}
      <Events></Events>
      <Upcoming></Upcoming>

      <div className="h-96 text-4xl bg-blue-900 align-middle">Contacts</div>
      <Footer></Footer>
      {/* <div className="h-36 text-4xl bg-blue-500 align-middle">Bottom Bar</div> */}
    </div>
  );
}

export default App;
