import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import brushMan from "../../../Images/brushman.png";
import HeroMainbg from "../../../Images/hero-main-bg.png";
import injectTool from "../../../Images/inject-tool.png";
import inject from "../../../Images/injection.png";
import staircaseMan from "../../../Images/staircase.png";
const Banner = () => {
  return (
    <section className="banner-all text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} lg={6} sm={12}>
            <div className="section-title">
              <h1>Service Details</h1>
            </div>
            <div className="service-description">
              <p>
                At our clinic, we prioritize the health and safety of our
                patients, especially during the COVID-19 pandemic. We have
                implemented strict protocols and precautions to ensure a safe
                environment for everyone. Our team follows rigorous sanitation
                practices, maintains social distancing, and wears personal
                protective equipment (PPE). We are committed to providing
                essential dental services while minimizing the risk of
                transmission. Rest assured that your well-being is our top
                priority.
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <div className="hero-slide-right text-start">
              <div className="banner-animate">
                <img src={HeroMainbg} alt="" className="img-fluid" />
                <img src={staircaseMan} alt="" className="img-fluid a2" />
                <img src={brushMan} alt="" className="img-fluid a3" />
                <img src={inject} alt="" className="img-fluid a4" />
                <img src={injectTool} alt="" className="img-fluid a5" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
