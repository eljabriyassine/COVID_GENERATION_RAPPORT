import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "../../../Images/doctor-nurse.png";

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
              <img src={About} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
