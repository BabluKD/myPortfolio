import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './contact-form.style.css'

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:bablu2vaibhaw@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="bablu2vaibhaw@gmail.com">
                                    <i className="fas fa-envelope"></i> &nbsp;Mail Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/bablu-kumar-882b26159/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="My LinkedIn Page">
                                    <i className="fab fa-linkedin"></i> &nbsp;LinkedIn
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.facebook.com/bablu.vaibhaw" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="My Facebook Page">
                                    <i className="fab fa-facebook-square"></i>&nbsp;Facebook
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://github.com/BabluKD/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My GitHub Profile">
                                    <i className="fab fa-github"></i>&nbsp;GitHub
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.kaggle.com/bablukd/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-info" title="My Kaggle Profile">
                                    <i className="fab fa-kaggle"></i>&nbsp;Kaggle
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Contact
