import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Content.css";

const Content = () => {
  return (
    <section className="about-content-sec">
      <Container>
        <Row>
          <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
            <div className="section-title">
              <h1>Our Dental Practice</h1>
            </div>
            <p className="w-50 m-auto content-inner">
              At Donto Dentistry, we have been proudly serving our community
              since 1998. Our dedicated team, led by Dr. John Dae and Micha, is
              committed to providing exceptional dental care using the latest
              techniques and state-of-the-art equipment. We strive to create a
              personalized and comfortable dental experience for our patients,
              setting us apart as a trusted Mason dentist.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
