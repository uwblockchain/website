import { Container, Row } from "react-bootstrap";
import Event from "./Event";
import AOS from "aos";
import { useEffect } from "react";

function Upcoming() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div 
    className="text-left pt-50%"
    data-aos="fade-right"
    data-aos-duration="550"
    >
      <Container>
          <Row>
              <Event title="Reprogram The World With Conflux Blockchain Workshop" type="Workshop" time="4:00 pm PST" month="OCT" day="25"></Event>
          </Row>
          <Row>
              <Event title="Crypto, Trading, & Defi Summit" type="Speaker Event" time="6:00 pm PST" month="NOV" day="4" location="Savery Hall 260"></Event>
          </Row>
      </Container>
    </div>
  );
}

export default Upcoming;
