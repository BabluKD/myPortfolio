import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Profile from '../../assets/img/profile/profile.jpeg'
import './about.style.css'

const About = () => {
    return (
        <div id="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2">
                            <Image className="profile justify-content-center" alt="Profile pic" src={Profile} thumbnail fluid />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="align-items-start p-2 mr-lg-2 my-details rounded">
                            Hey there! I am <strong>&nbsp;Bablu Kumar</strong>
                            <br />
                            An enthusiastic and organized student of BIT Sindri, pursuing B.Tech
                            degree in CSE branch. I am fascinated by new technologies like Machine Learning and Artificial Intelligence.
                            My goal is to assist a stable and thriving company in achieving
                            its mission and goals by being able to continuously learn and improve the
                            necessary skills and knowledge needed to help push both the company
                            and myself forward into success.
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://drive.google.com/file/d/1xwY7N3jMftO-i1MpBmFAGGci-8_HV7hs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                            My Resume
                                        </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/BabluKD" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-danger">
                                            GitHub
                                        </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/bablu-kumar-882b26159" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
