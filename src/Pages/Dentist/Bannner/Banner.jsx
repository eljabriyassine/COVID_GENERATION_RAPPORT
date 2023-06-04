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
              <h1>Dr. Nathan Currie</h1>
            </div>
            <div className="breadcrumb-nav">
              <a href="/" className="text-decoration-none text-white">
                Home Page
              </a>
              <span href="/" className="text-decoration-none text-white ml-2">
                Dr. Nathan Currie
              </span>
            </div>
            <div className="covid-description">
              <p>
                Your health and safety are our top priorities, especially during
                the COVID-19 pandemic. We have implemented rigorous measures to
                ensure a safe environment for all our patients. Our clinic
                strictly follows all recommended guidelines and protocols issued
                by health authorities.
              </p>
              <p>
                Dr. Nathan Currie is a highly skilled and experienced dentist
                dedicated to providing exceptional dental care. With a focus on
                patient comfort and satisfaction, he offers a wide range of
                dental services, including preventive care, restorative
                treatments, cosmetic dentistry, and more.
              </p>
              <p>
                Rest assured that our clinic adheres to strict infection control
                practices, including enhanced sanitization, the use of personal
                protective equipment (PPE), and social distancing measures. Your
                well-being is our utmost priority, and we strive to provide you
                with a safe and comfortable dental experience.
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
