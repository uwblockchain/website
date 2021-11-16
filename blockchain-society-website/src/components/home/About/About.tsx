import art0 from "../../../images/stock/uwbsart1.png";
import bg_uwquad from "../../../images/stock/uw_quad.jpg";
import AOS from "aos";
import { useEffect } from "react";
function About() {
  return (
    <div
      className="w-screen text-4xl bg-white align-middle pb-10"
      id="about"
    >
      <div className="relative overflow-hidden flex justify-center items-center">
        <img
          alt="uw_quad"
          className="h-36 lg:h-48 w-full opacity-80 object-cover"
          src={bg_uwquad}
        ></img>

      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="550">
        <h3 className="pt-3 z-10 w-full text-4xl text-black text-center">
          About Us
        </h3>
      </div>
      <div className="pt-8 lg:grid lg:grid-cols-2 lg:pl-36 ">
        <div className="flex justify-center" data-aos="fade-right" data-aos-duration="550">
          <div className="text-center text-black px-4 lg:w-3/4 content-center">
            <h3 className="text-2xl py-8 pt+4 text-left font-semibold">
              A tri-campus organization.
            </h3>
            <p className="text-lg text-left leading-loose">
              Composed of students from all three UW Campuses, the Blockchain
              Society at UW unites students with a common interest across the
              three campuses. A tri-campus organization is a new breed for
              student clubs. Utilizing the resources and students across all
              three UW campuses we aim to revolutionize blockchain education.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:pr-36" data-aos="fade-left" data-aos-duration="550">
          <img src={art0} alt="art0" className="w-80"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
