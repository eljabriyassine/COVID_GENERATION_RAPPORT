import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import promoBanner from '../../../Images/doctor-nurse.png';
import './Promo.css';

const Promo = () => {
    return (
        <section className="promo-wrapper">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} sm={12} lg={6}>
                        <div className="promo-content text-white text-start">
                            <h1 className="mt-sm-req">Request your appointment and prioritize your health during the COVID-19 pandemic</h1>
                            <Link to="/covidCheck"><button href=".#" className="theme-btn btn-fill mt-4">CovidCheck</button></Link>
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={6}>
                        <div className="promo-banner">
                            <img src={promoBanner} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Promo;