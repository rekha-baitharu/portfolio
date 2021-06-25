import React from "react";
import "./App.css";
import rekha from './Images/Rekha3.JPG';
import html from './Images/html.png';
import css from './Images/css.png';
import javascript from './Images/javascript.jfif';
import reactjs from './Images/reacttjs.png';
import redux from './Images/redux.png';
import mongodb from './Images/mongo.png';
import nodejs from './Images/node.png';
import express from './Images/express.png';
import java from './Images/java.png';
import sis from './Images/sis.jpg';
import sms from './Images/sms.jpg';
import api from './Images/project.png';
import notebook from './Images/notebook.png';
import cal from './Images/cal.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    Grid, Typography, Container, Step, Stepper, StepLabel, Card
} from '@material-ui/core';
export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }
    render() {
        return (
            <div style={{ backgroundColor: "#C0C0C0" }}>
                <Container style={{ backgroundColor: "lightblue" }}>
                    <div data-aos="zoom-in">
                        <img src={rekha} className="img" /><br />
                        <Typography variant="h3" style={{ fontFamily: "serif", textAlign: "center", color: "brown" }}><b><i>Hello, I am Rekha Baitharu!</i></b></Typography><br />
                        <Typography style={{ fontFamily: "serif", marginLeft: 50, fontSize: 29, textAlign: "center" }}><i>
                            I graduated from Biju Pattnaik University,
                            Rourkela in 2020 with a degree in Computer Science.
                            My interests are in both Front End And Back End Engineering
                            and I love to create beautiful performant products with
                            delightful user experiences. I am still a beginner but always
                            ready to face new challenges in my life.
                        </i></Typography>
                    </div>
                </Container>
                <Container style={{ backgroundColor: "teal" }}>
                    <h1 style={{ fontFamily: "serif", textAlign: "center" }}><i>About Me</i></h1>
                </Container>
                <Container>
                    <div data-aos="zoom-in">
                        <Stepper orientation="vertical" activeStep={1, 2, 3} style={{ marginLeft: 100 }}>
                            <Step >
                                <StepLabel>
                                    <Typography variant="h6" style={{ fontFamily: "serif", color: "grey", marginTop: 20 }}><i>Aug 2016 - Aug 2020</i></Typography>
                                    <Typography variant="h5" style={{ fontFamily: "serif", marginLeft: 50 }}><i><b>Synergy Institute of Engineering & Technology, Dhenkanal</b></i></Typography>
                                    <Typography variant="h6" style={{ fontFamily: "serif", marginLeft: 50 }}><i>
                                        University - BPUT<br />
                                        Branch - Computer Science & Engineering(With Hons)<br />
                                        CGPA - 7.67</i></Typography>
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    <Typography variant="h6" style={{ fontFamily: "serif", color: "grey" }}><i>March 2014 - March 2016</i></Typography>
                                    <Typography variant="h5" style={{ fontFamily: "serif", marginLeft: 50 }}><i><b>Govt. Autonomous College, Bhawanipatna</b></i></Typography>
                                    <Typography variant="h6" style={{ fontFamily: "serif", marginLeft: 50 }}><i>
                                        Stream - Science<br />
                                        Result - 55%</i></Typography>
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    <Typography variant="h6" style={{ fontFamily: "serif", color: "grey" }}><i>March 2014</i></Typography>
                                    <Typography variant="h5" style={{ fontFamily: "serif", marginLeft: 50 }}><i><b>Khageswar Meher High School, Baladiamal</b></i></Typography>
                                    <Typography variant="h6" style={{ fontFamily: "serif", marginLeft: 50 }}><i>
                                        Result - 75.33%</i></Typography>
                                </StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                </Container>
                <Container style={{ backgroundColor: "teal" }}>
                    <h1 style={{ fontFamily: "serif", textAlign: "center" }}><i>My Skills</i></h1>
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <div data-aos="flip-left">
                            <img src={html} className="skillimg" /><br />
                        </div>
                        <div data-aos="flip-left">
                            <img src={css} className="skillimg" /><br />
                        </div>
                        <div data-aos="flip-left">
                            <img src={javascript} className="skillimg" /><br />
                        </div>
                        <div data-aos="flip-left">
                            <img src={reactjs} className="skillimg" /><br />
                        </div>
                        <div data-aos="flip-left">
                            <img src={redux} className="skillimg" /><br />
                        </div>
                        <div data-aos="flip-left">
                            <img src={nodejs} className="skillimg" /><br />
                        </div>
                        <div data-aos="flip-left">
                            <img src={express} className="skillimg" /><br />
                        </div>
                        <div data-aos="flip-left">
                            <img src={mongodb} className="skillimg" /><br />
                        </div>
                        <div data-aos="flip-left">
                            <img src={java} className="skillimg" /><br />
                        </div>
                    </Grid>
                </Container>
                <Container style={{ backgroundColor: "teal" }}>
                    <h1 style={{ fontFamily: "serif", textAlign: "center" }}><i>My Projects</i></h1>
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={6} className="forImage">
                            <div data-aos="zoom-out-right">
                                <img src={sis} className="projectimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} className="text">
                            <div data-aos="zoom-out-left">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Student Information System</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 25, textAlign: "center" }}><i>
                                    A student information system(SIS) is a
                                    system that manages the records of students regarding
                                    their academic part. A student information system is
                                    designed to help education institute for management of
                                    student.This can make the system easier to navigate and
                                    to use maximizing the effectiveness of time and other
                                    resourseces.
                                </i></Typography><br />
                                <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center" }}><i><b>Technologies used here:</b> Android</i></Typography>
                            </div>
                        </Grid>
                    </Grid><br />
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={6} className="forImage">
                            <div data-aos="zoom-out-right">
                                <img src={sms} className="projectimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} className="text">
                            <div data-aos="zoom-out-left">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>School Management System</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 25, textAlign: "center" }}><i>
                                    A school management system is a collection of
                                    computer instructions, specially designed to manage the
                                    day-to-day administrative tasks of schools.
                                    School management system allow schools to digitally monitor
                                    the daily activities along with managing all the resources
                                    and information on a single platform.
                                </i></Typography><br />
                                <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center" }}><i><b>Technologies used here:</b> Android</i></Typography>
                            </div>
                        </Grid>
                    </Grid><br />
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={6} className="forImage">
                            <div data-aos="zoom-out-right">
                                <img src={api} className="projectimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} className="text">
                            <div data-aos="zoom-out-left">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Api Documentaion</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 27, textAlign: "center" }}><i>
                                    This simulates real application scenarios.
                                    If you want to test a user authentication system,
                                    Reqres will respond to a successful login/register
                                    request with a token for you to identify a sample user,
                                    or with a 403 forbidden response to an unsuccessful
                                    login/registration attempt.
                                </i></Typography><br />
                                <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center" }}><i><b>Technologies used here:</b> Reactjs, nodejs, expressjs and mongodb</i></Typography>
                                <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center" }}><i><b>GitHub Link:</b> <a href="https://github.com/rekha-baitharu/react_project">https://github.com/rekha-baitharu/react_project</a> </i></Typography>
                            </div>
                        </Grid>
                    </Grid><br />
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={6} className="forImage">
                            <div data-aos="zoom-out-right">
                                <img src={notebook} className="projectimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} className="text">
                            <div data-aos="zoom-out-left">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Notebook Application</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 27, textAlign: "center" }}><i>
                                    In this notebook application you can add,
                                    manage, and organize a group of notes.
                                    This Notebook provides different ways to
                                    take notes and capture your thoughts.
                                </i></Typography><br />
                                <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center" }}><i><b>Technologies used here:</b> Reactjs, nodejs, expressjs and mongodb</i></Typography>
                                <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center" }}><i><b>GitHub Link:</b><a href="https://github.com/rekha-baitharu/notebook_application">https://github.com/rekha-baitharu/notebook_application</a> (Frontend) <a href="https://github.com/rekha-baitharu/backend">https://github.com/rekha-baitharu/backend</a> (Backend) </i></Typography>
                            </div>
                        </Grid>
                    </Grid><br />
                </Container>
                <Container>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={6} className="forImage">
                            <div data-aos="zoom-out-right">
                                <img src={cal} className="projectimg" /><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} className="text">
                            <div data-aos="zoom-out-left">
                                <Typography variant="h3" style={{ fontFamily: "serif", marginTop: "60px", textAlign: "center", backgroundColor: "#FAEBD7", borderRadius: "100px" }}><b><i>Calculator</i></b></Typography><br />
                                <Typography style={{ fontFamily: "serif", fontSize: 27, textAlign: "center" }}><i>
                                    A calculator is a machine which allows
                                    people to do math operations more easily. For example, most calculators will add, subtract, multiply, and divide.
                                    Some also do square roots, and more complex calculators can help with calculus and draw function graphs.
                                    Calculators are found everywhere.
                                </i></Typography><br />
                                <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center" }}><i><b>Technologies used here:</b> Reactjs</i></Typography>
                                <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center" }}><i><b>GitHub Link:</b><a href="https://github.com/rekha-baitharu/calculator">https://github.com/rekha-baitharu/calculator</a></i></Typography>
                            </div>
                        </Grid>
                    </Grid><br />
                </Container>
                <Container fixed style={{ background: "teal", marginTop: 100 }}>
                    <Typography variant="h5" style={{ fontFamily: "serif", textAlign: "center", color: "black" }}><i><b>Thank you for visiting my Site :)</b></i></Typography>
                </Container>
            </div>
        )
    }
}