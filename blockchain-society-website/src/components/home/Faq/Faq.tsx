import "../../../styles/variables/Palette.scss";
import { Accordion, Row } from "react-bootstrap";
import AOS from "aos";
import { useEffect } from "react";
import {
  FaQuestion,
  FaBitcoin,
  FaHandsHelping,
  FaEthereum,
} from "react-icons/fa";

function Faq() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="m-16 items-center"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <h2>Frequently Asked Questions</h2>
      <p
        className=" max-w-3xl relative mx-auto"
        data-aos="fade-up"
        data-aos-duration="550"
      >
        {" "}
        Blockchain technology, BitCoin, Ethereum––these are just some of the
        words that have become hot topics of conversation recently. As the
        digital economy grows, so does everyone's interest in knowing more about
        new technologies, industries, and fresh ideas.{" "}
      </p>
      <Row>
        <Accordion
          defaultActiveKey="0"
          className="col-xl-6 mb-4 text-left"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FaBitcoin className="mr-4" />
              What is Blockchain?
            </Accordion.Header>
            <Accordion.Body className="py-4 text-left">
              At its most basic level, blockchain is literally just a chain of
              blocks. These blocks hold data and are linked to each other. The
              'block' of data is stored on the 'chain'; which is a public
              database. Some features of the blockchain include immutability,
              transparency, and more!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FaQuestion className="mr-4" />
              What is UW Blockchain Society?
            </Accordion.Header>
            <Accordion.Body className="py-4 text-left">
              We are a tri-campus organization that aims to educate the masses
              on all things blockchain. Our members are involved in conferences,
              educational events, programming and more. We provide the best
              education, mentorship, career tracking and more to our hundreds of
              members.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion
          defaultActiveKey="0"
          className="col-xl-6"
          data-aos="fade-left"
          data-aos-duration="700"
          mb-4
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FaEthereum className="mr-4" />
              Wait? So what's a Cryptocurrency?
            </Accordion.Header>
            <Accordion.Body className="py-4 text-left">
              A cryptocurrency is a digital currency that uses secure methods of
              cryptography. They are difficult to change or counterfeit because
              of this security feature. Cryptocurrencies are usually built on
              blockchain technology.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FaHandsHelping className="mr-4" />
              How do I get involved?
            </Accordion.Header>
            <Accordion.Body className="py-4 text-left">
              Shoot us an email at <a href="blockchn@uw.edu">blockchn@uw.edu</a>{" "}
              or follow our social media. Sponsors can get involved{" "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqdJegvu7M1IBkPDO9hcad7KWWb2bf_FYTCmhar6tjZRd45Q/viewform?usp=sf_link">
                here
              </a>{" "}
              and students can get involved{" "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9-DaD8pXTEUw_HpjcbTvetdELDMmKBj9VvR4JS_czV5il-w/viewform?usp=sf_link">
                here
              </a>
              .
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </div>
  );
}

export default Faq;
