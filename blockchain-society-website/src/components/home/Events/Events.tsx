import { Container, Row, Col } from "react-bootstrap";
import TUE from "../../../images/icons/TUE.png";
import THU from "../../../images/icons/THU.png";
import AOS from "aos";
import { useEffect } from "react";

function Events() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div 
      className="p-6"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <Container>
        <span 
        className="text-4xl"
        data-aos="fade-up"
        data-aos-duration="550"
        >Our Programs</span>
        <Row className="flex justify-center content-center bg-yellow px-16">
          <Col className="py-4">
            <img src={TUE} alt="TUE-icon" className="block m-auto w-16 mb-4" />
            <p className="text-black-600 font-bold text-3xl">Meeting</p>
            <div className="leading-3 font-bold">
              <p>Weekly on Tuesday</p>
              <p>6:30-7:30</p>
              <p>SMITH 105</p>
            </div>
          </Col>
          <Col className="py-4">
            <img src={THU} alt="THU-icon" className="block m-auto w-16 mb-4" />
            <p className="text-black-600 font-bold text-3xl">Meeting</p>
            <div className="leading-3 font-bold">
              <p>Weekly on Thursday</p>
              <p>7:00-8:00</p>
              <p>SMITH 105</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Events;
