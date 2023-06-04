import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contactUs-wrapper">
      <Container>
        <Row>
          <Col md={6} lg={6} xl={4}>
            <div className="single-contact icon1">
              <div className="c-icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
              <div className="c-info text-start">
                <h4>Address</h4>
                <p>Faculté des Sciences et Techniques</p>
                <p>Av.Abdelkarim Elkhattabi, Guéliz Marrakech</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <div className="single-contact icon2">
              <div className="c-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="c-info text-start">
                <h4>Email</h4>
                <p>contact@fstg-marrakech.com</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <div className="single-contact icon3">
              <div className="c-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="c-info text-start">
                <h4>Phone</h4>
                <p>(+212) 524 43 31 70</p>
                <p>(+212) 524 43 34 04</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
