import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import client from "../../../Images/testi1.png";
import "./Testimonial.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="testimonial-wrapper">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="section-title">
              <h1>Testimonials</h1>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} lg={4} sm={12}>
            <div className="client-box text-center" data-aos="fade-right">
              <div className="client-img">
                <img src={client} alt="" />
              </div>
              <h3 className="mt-4">Aliceano Colby</h3>
              <span>CEO of Prime IT</span>
            </div>
          </Col>
          <Col md={6} lg={8} sm={12}>
            <div className="review-item text-start" data-aos="zoom-out">
              <h5>Safe and Reliable</h5>
              <p>
                "I had the pleasure of receiving treatment from the staff at our
                clinic during the COVID-19 pandemic. Their commitment to safety
                protocols and hygiene measures gave me confidence in their
                services. I was impressed by their dedication to providing a
                secure and reliable experience for their patients."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
