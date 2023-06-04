import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import imageHome2 from "../../../Images/imageHome2.png";
import imageHome3 from "../../../Images/g4.jpg";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="about-wrapper">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="about-left">
              <img src={imageHome2} alt="donto" className="img-fluid donto" />
              <img src={imageHome3} alt="donto" className="img-fluid donto" />
            
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-right mt-5 mt-lg-0">
              <div className="about-content text-start" data-aos="zoom-in">
                <h1>Welcome to a Safe Environment</h1>
                <p>
                  Welcome to our establishment, where your health and safety are
                  our top priorities. We have implemented enhanced safety
                  measures to ensure a safe and secure environment during the
                  COVID-19 pandemic. Our team follows strict protocols and
                  guidelines recommended by health authorities to protect our
                  clients and staff. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Quod ea, consequuntur itaque enim et
                  expedita, optio omnis ipsa magni, perspiciatis totam ipsum!
                  Voluptatibus, neque at.
                </p>
                <a href="/about">About Us</a>
              </div>
              <div className="fun-fact-sec" data-aos="fade-right">
                <div className="single-fun">
                  <span>500</span>
                  <span>+</span>
                  <p>Happy Clients</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-right">
                  <span>88</span>
                  <span>+</span>
                  <p>Qualified Professionals</p>
                </div>
                <div className="single-fun" data-aos="fade-left">
                  <span>25</span>
                  <span>+</span>
                  <p>Years of Experience</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-left">
                  <span>50</span>
                  <span>+</span>
                  <p>Awards and Recognition</p>
                </div>
                <span className="line"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
