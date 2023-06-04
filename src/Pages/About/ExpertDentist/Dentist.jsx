import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import expertDentist from "../../../Images/experienceddentist.png";
import "./Dentist.css";

const Dentist = () => {
  return (
    <section className="expert-dentist">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <img
              src={expertDentist}
              alt="expertDentist"
              className="img-fluid"
            />
          </Col>
          <Col lg={6}>
            <div className="expertDentist-txt mt-5 mt-lg-0">
              <h2>Experienced Dentist</h2>
              <p>
                At our clinic, Dr. Harrie, our experienced dentist, is dedicated
                to your safety and well-being, especially during the COVID-19
                pandemic. With his expertise in Cosmetic Dentistry, he has been
                providing top-quality dental care while prioritizing the health
                and happiness of our patients.
              </p>
              <p>
                Dr. Harrie understands the importance of dental health in
                relation to overall well-being. As a graduate of the University
                of California’s School of Dentistry, he is a leader in
                implementing strict safety protocols to ensure a safe
                environment for all our patients. Our clinic is committed to
                following the recommended guidelines to prevent the spread of
                COVID-19 and protect our community.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dentist;
