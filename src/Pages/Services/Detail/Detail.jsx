import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/service-details-promo1.png";
import serviceDetailImg2 from "../../../Images/service-details-promo2.png";
import "./Detail.css";

const Detail = () => {
  return (
    <>
      <section className="healing p-5">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2 className="fw-bold">PRF For Faster Healing</h2>
                <p>
                  Our clinic offers Platelet-Rich Fibrin (PRF) therapy for
                  faster healing during the COVID-19 pandemic. PRF treatment
                  involves using your own blood components to enhance the
                  healing process. It is a safe and effective method to promote
                  healing and reduce recovery time. Our experienced dentists
                  will ensure that all necessary precautions are taken to
                  provide you with a safe and comfortable treatment experience.
                </p>
                <p>
                  If you require dental procedures or oral surgeries during this
                  time, PRF therapy can significantly improve your healing
                  outcomes. Please contact us to learn more about this advanced
                  treatment option.
                </p>
              </div>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <img
                src={serviceDetailImg}
                alt="expertDentist"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="healing p-5 footer-bg">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <img
                src={serviceDetailImg2}
                alt="expertDentist"
                className="img-fluid pt-xs-5"
              />
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2 className="fw-bold text-white">Composite or Mercury?</h2>
                <p className="text-white">
                  During the COVID-19 pandemic, our clinic prioritizes your
                  health and safety. We strictly adhere to infection control
                  protocols and follow guidelines recommended by health
                  authorities. As part of our commitment to your well-being, we
                  avoid using mercury-based dental materials.
                </p>
                <p className="text-white">
                  Composite materials are used for dental fillings and
                  restorations, offering several benefits over mercury-based
                  amalgam fillings. They are aesthetically pleasing, durable,
                  and free from potential health risks associated with mercury.
                  Our skilled dentists will provide you with composite
                  restorations to ensure your dental health while maintaining a
                  safe environment for both patients and staff.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Detail;
