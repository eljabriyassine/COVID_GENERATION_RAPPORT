import "@fontsource/josefin-sans";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageHome from "../../../Images/ImageHome.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={12} sm={12} lg={6}>
            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
              <h3>Stay Safe During</h3>
              <h2>COVID-19 Pandemic</h2>
              <p className="mb-xs-5">
                Your health and safety are our top priorities. We are taking
                extra precautions to ensure a safe dental environment during the
                COVID-19 pandemic. Our dedicated professionals are here to
                assist you with any dental concerns.
              </p>
              <div className="banner-btn m-sm-auto">
                <Link to="/covidCheck">
                  <button className="theme-btn btn-fill">CovidCheck</button>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} lg={6} className="mt-sm-5">
            <div className="hero-slide-right text-center text-lg-start mt-sm-5">
              <img src={ImageHome} alt="" className="heroTeeth" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
