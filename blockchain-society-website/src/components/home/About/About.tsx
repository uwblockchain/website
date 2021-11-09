import art0 from "../../../images/stock/uwbsart1.png";
import bg_uwquad from "../../../images/stock/uw_quad.jpg";

function About() {
  return (
    <div
      className="w-screen text-4xl bg-indigo-900 align-middle pb-10"
      id="about"
    >
      <div className="relative overflow-hidden flex justify-center items-center">
        <h3 className="z-10 absolute w-full text-4xl text-white text-center font-semibold">
          About Us
        </h3>
        <img
          alt="uw_quad"
          className="h-36 lg:h-48 w-full opacity-25 object-cover"
          src={bg_uwquad}
        ></img>
      </div>
      <div className="pt-8 lg:grid lg:grid-cols-2 lg:pl-36 ">
        <div className="flex justify-center">
          <div className="text-center text-white px-4 lg:w-3/4 content-center">
            <h3 className="text-2xl py-8 text-left font-semibold">
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
        <div className="flex justify-center lg:pr-36">
          <img src={art0} alt="art0" className="w-80"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
