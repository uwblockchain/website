import { Container, Row, Col } from "react-bootstrap";
import art0 from "../../../images/stock/uwbsart1.png";
import AOS from "aos";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="text-4xl bg-indigo-900 align-middle py-10" id="about">
      <div className="lg:grid lg:grid-cols-2 lg:pl-36">
        <div className="flex justify-center">
          <div className="text-center text-white px-4 lg:w-3/4">
            <h3
              className="text-4xl"
              data-aos="fade-left"
              data-aos-duration="500"
            >About Us</h3>
            <h3 className="text-2xl"
              data-aos="fade-left"
              data-aos-duration="500">A tri-campus organization.</h3>
            <p className="text-lg text-left"
              data-aos="fade-left"
              data-aos-duration="500">
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
    </Container>
  );
}

export default About;
