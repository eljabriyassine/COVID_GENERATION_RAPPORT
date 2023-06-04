import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Practices</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">For Patients</NavLink>
                                <NavLink className="footer-link">FAQ's</NavLink>
                                <NavLink className="footer-link">About</NavLink>
                                <NavLink className="footer-link">Contact Us</NavLink>
                                <NavLink className="footer-link">Blog</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Resources</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">New Patients</NavLink>
                                <NavLink className="footer-link">Meet the Team</NavLink>
                                <NavLink className="footer-link">Patient Form</NavLink>
                                <NavLink className="footer-link">Insurance</NavLink>
                                <NavLink className="footer-link">Account Login</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link" to="/covid-dictionary">COVID-19 Dictionary</NavLink>
                                <NavLink className="footer-link" to="/covid-prevention">COVID-19 Prevention</NavLink>
                                <NavLink className="footer-link" to="/covid-testing">COVID-19 Testing</NavLink>
                                <NavLink className="footer-link" to="/covid-vaccination">COVID-19 Vaccination</NavLink>
                                <NavLink className="footer-link" to="/covid-symptoms">COVID-19 Symptoms</NavLink>
                            </div>

                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Faculté des Sciences et Techniques</NavLink>
                                <NavLink className="footer-link">Av. Abdelkarim Elkhattabi, Guéliz Marrakech</NavLink>
                                <NavLink className="footer-link">Phone:(+212) 524 43 34 04</NavLink>
                                <NavLink className="footer-link">Email:contact@fstg-marrakech.com</NavLink>
                                <NavLink className="footer-link">Fax:(+212) 524 43 31 70</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'>&copy; 2022 - <span className="developer">Saiful Emon</span> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;