import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Achivement.css";

const Achivement = () => {
  return (
    <section className="achivement-wrap text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} lg={6} sm={12}>
            <div className="section-title">
              <h1>Our Achievement</h1>
            </div>
            <div className="achivement-txt">
              <p className="w-75">
                At our clinic, we take pride in our achievements, especially
                during the challenging times of the COVID-19 pandemic. Our
                dedicated team, led by Dr. Harrie, has embraced Cosmetic
                Dentistry and has been instrumental in redesigning smiles for
                thousands of patients while ensuring their safety and
                well-being.
              </p>
              <div className="more-tool">
                <Link to="/covidCheck">
                  <button className="theme-btn btn-fill">covid-check</button>
                </Link>
               
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <Row className="achivement-funfact text-white">
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>22 +</span>
                  <p>Patients</p>
                </div>
              </Col>
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>75 +</span>
                  <p>Doctors</p>
                </div>
              </Col>
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>25 +</span>
                  <p>Awards</p>
                </div>
              </Col>
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>28 +</span>
                  <p>Branches</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Achivement;
