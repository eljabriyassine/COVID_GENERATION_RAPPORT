import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import brushMan from "../../../Images/brushman.png";
import HeroMainbg from "../../../Images/hero-main-bg.png";
import injectTool from "../../../Images/inject-tool.png";
import inject from "../../../Images/injection.png";
import staircaseMan from "../../../Images/staircase.png";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-all text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} lg={6} sm={12}>
            <div className="section-title">
              <h1>About Us</h1>
            </div>
            <div className="breadcrumb-nav">
              <span href="/" className="text-decoration-none text-white ml-2">
                About Us
              </span>
            </div>
            <div className="banner-description">
              <p>
                Welcome to our clinic, where your health and safety are our top
                priorities. We provide comprehensive dental care and strive to
                create a comfortable and relaxing environment for our patients.
                Our experienced team of professionals is dedicated to delivering
                exceptional dental services tailored to your needs. Schedule an
                appointment today and experience the difference!
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
