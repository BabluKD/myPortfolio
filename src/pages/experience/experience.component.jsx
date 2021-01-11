import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tilt from 'react-tilt'
//import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import L_JGI from "../../assets/img/experience/jgi.png"
import L_DREAMYFLIES from "../../assets/img/experience/dreamyflies.webp"
import L_WEBTEK from "../../assets/img/experience/webtek.png"
import "./experience.style.css"

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">TRAINING & INTERNSHIPS</h1>
            <Jumbotron fluid className="jumbo-style">
                <Row className="d-flex justify-content-around ml-2 mr-2">
                    <Col md={4} className="mb-4">
                            <Tilt options={{ max: 10 }}>
                                <Card>
                                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                        <Card.Img variant="top" className="img-resize" src={L_JGI} alt="Accenture image" />
                                    </Card.Header>
                                    <Card.Body className="d-flex justify-content-center flex-column">
                                        <div>
                                            <Card.Title className="text-center">
                                                JUST GET IT
                                            </Card.Title>
                                        </div>
                                        <div>
                                            <Card.Text className="text-center style">
                                                <h4>
                                                    <strong>Role :</strong> Full Stack Intern <hr/>
                                                </h4>
                                                        <strong>Description :</strong>
                                                        <ul>
                                                            <li>
                                                                Worked as the backend developer in a team of 5 in a fabric management website which 
                                                                uses technologies to enhance the process.
                                                            </li>
                                                            <li>
                                                                Developed an algorithm to which reduced the fabric wastage during cutting by 2%. 
                                                            </li>
                                                        </ul>
                                                        <strong>Technology :</strong><br /> HTML, CSS, JavaScript, Bootstrap and Django & Python
                                                <br />
                                                        <strong>Duration :</strong> April 2020 - May 2020
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tilt>
                    </Col>
                    <Col md={4} className="mb-4">
                        {/* <Container> */}
                            <Tilt options={{ max: 10 }}>
                                <Card>
                                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                        <Card.Img variant="top" className="img-resize" style={{ width: '100%'}} src={L_DREAMYFLIES} alt="Accenture image" />
                                    </Card.Header>
                                    <Card.Body className="d-flex justify-content-center flex-column">
                                        <div>
                                            <Card.Title className="text-center">
                                                DREAMYFLIES
                                            </Card.Title>
                                        </div>
                                        <div>
                                            <Card.Text className="text-center style">
                                                <h4>
                                                    <strong>Role :</strong> Full Stack Intern <hr/>
                                                </h4>
                                                        <strong>Description :</strong>
                                                        <ul>
                                                            <li>
                                                                Developed 2 major websites.
                                                            </li>
                                                            <li>
                                                                First one was a full stack website responsible for conducting events related to school children.
                                                            </li>
                                                            <li>
                                                                Second one was a frontend website related to notes-sharing.
                                                            </li>
                                                        </ul>
                                                        <strong>Technology :</strong><br /> HTML, CSS, JavaScript, Bootstrap and PHP, MySQL
                                                <br />
                                                        <strong>Duration :</strong> June 2019 - Aug 2019
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tilt>
                        {/* </Container> */}
                    </Col>
                    <Col md={4} className="mb-4">
                        {/* <Container> */}
                            <Tilt options={{ max: 10 }}>
                                <Card>
                                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                        <Card.Img variant="top" className="img-resize" src={L_WEBTEK} alt="Accenture image" />
                                    </Card.Header>
                                    <Card.Body className="d-flex justify-content-center flex-column">
                                        <div>
                                            <Card.Title className="text-center">
                                                WEBTEK LABS
                                            </Card.Title>
                                        </div>
                                        <div>
                                            <Card.Text className="text-center style">
                                                <h4>
                                                    <strong>Role :</strong> Machine Learning Trainee <hr/>
                                                </h4>
                                                        <strong>Description :</strong>
                                                        <ul>
                                                            <li>
                                                                Learned almost all topics of Machine Learning and completed a major project.
                                                            </li>
                                                            <li>
                                                                Implemented ML libraries like Numpy, Pandas for Data Processing, Matplotlib, Seaborn for Data Visualization and SKLearn.  
                                                            </li>
                                                        </ul>
                                                        <strong>Technology :</strong><br /> HTML, CSS, JavaScript, Bootstrap and PHP, MySQL
                                                <br />
                                                        <strong>Duration :</strong> June 2019 - July 2019
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tilt>
                        {/* </Container> */}
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Experience
