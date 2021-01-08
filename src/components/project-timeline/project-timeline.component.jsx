import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline';

//Projects
import L_GRS from "../../assets/img/projects/grs.jpg";
import L_ZOMATO from "../../assets/img/projects/zomato.jpg";
import L_NOTESTUD from "../../assets/img/projects/notestud.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_PHP from "../../assets/img/skills/php.svg";
import L_MYSQL from "../../assets/img/skills/mysql.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_ANACONDA from "../../assets/img/skills/ml/anaconda.png";
import L_JUPYTER from "../../assets/img/skills/ml/jupyter.svg";
import L_NUMPY from "../../assets/img/skills/ml/numpy.png";
import L_PANDAS from "../../assets/img/skills/ml/pandas.png";
import L_MPL from "../../assets/img/skills/ml/matplot.webp";
import L_SKL from "../../assets/img/skills/ml/sklearn.png";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";

import "./project-timeline.style.css";


const TimeLine = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    <ImageEvent
                        date="01/10/2019"
                        className="text-center"
                        text="<b>Full Stack GRS Website</b>"
                        src={L_GRS}
                        alt="GRS Club Website"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS &gt;
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description: </strong> 
                                                This is a Full Stack website of Gandhi Rachnatmak Samiti club of BIT Sindri.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Login/Register system for Members and Alumni of the club</li>
                                                    <li>Admin dashboard consisting CRUD operation on members</li>
                                                    <li>Super Admin to manage the admins and members</li>
                                                    <li>Responsive Design for mobile devices</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>
                                                            {" "}HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>
                                                            {" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="JavaScript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>
                                                            {" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PHP}
                                                                alt="PHP"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>
                                                            {" "}
                                                            PHP
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MYSQL}
                                                                alt="MY SQL"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>
                                                            {" "}
                                                            MySQL
                                                        </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-center flex-nowrap text-center">
                                <UrlButton
                                    href="https://testnmnp.000webhostapp.com/grs"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    <ImageEvent
                        date="01/10/2019"
                        className="text-center"
                        text="<b>Zomato restaurant rating Prediction (Machine Learning)</b>"
                        src={L_ZOMATO}
                        alt="Zomato restaurant rating"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS &gt;
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description: </strong> 
                                                This Machine Learning project's goal was 
                                                <span style={{fontWeight: '500'}}> Predicting the rating of zomato restaurants in Bangalore </span>
                                                which determine the quality and pricing of the food.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Applied Linear Regression, Decision Tree and Random Forest Reg. and chose The best one</li>
                                                    <li>Admin dashboard consisting CRUD operation on members</li>
                                                    <li>Super Admin to manage the admins and members</li>
                                                    <li>Responsive Design for mobile devices</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PYTHON}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>
                                                            {" "}PYTHON
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_ANACONDA}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>
                                                            {" "}
                                                            ANACONDA
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JUPYTER}
                                                                alt="JavaScript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>
                                                            {" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                </ul>
                                                    <strong>ML Libraries used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NUMPY}
                                                                alt="Numpy"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>
                                                            {" "}
                                                            NUMPY
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_PANDAS}
                                                                alt="Pandas"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>
                                                            {" "}
                                                            PANDAS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_SKL}
                                                                alt="SK Learn"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>
                                                            {" "}
                                                            SCI_KIT LEARN
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MPL}
                                                                alt="MatplotLib"
                                                                rounded
                                                                className="m-1"
                                                                style={{width: '4em'}}
                                                            ></Image>
                                                            {" "}
                                                            MATPLOTLIB
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-center flex-nowrap text-center">
                                <UrlButton
                                    href="https://www.kaggle.com/bablukd/zomato-bangalore-restaurant-rating-prediction"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    
                    <ImageEvent
                        date="01/10/2019"
                        className="text-center"
                        text="<b>Neumorphic Note sharing UI</b>"
                        src={L_NOTESTUD}
                        alt="Notestud Website"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS &gt;
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description: </strong> 
                                                    This is a neumorphic User Interface for Note-sharing website.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Neumorphic UI Design</li>
                                                    <li>It can be developed to share notes and homeworks between students</li>
                                                    <li>Responsive Design for mobile devices</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>
                                                            {" "}HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>
                                                            {" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="JavaScript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>
                                                            {" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-center flex-nowrap text-center">
                                <UrlButton
                                    href="https://testnmnp.000webhostapp.com/notestud"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                </Events>
            </Timeline>
        </div>
    )
}

export default TimeLine
