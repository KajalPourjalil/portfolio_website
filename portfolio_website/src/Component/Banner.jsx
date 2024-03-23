import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"]
  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi I'm webcoded`}<span className="wrap"> web developer</span></h1>
              <p>Lorem ipsum</p>
              <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5} >
            <img src={headerImg} alt="Header image"></img>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
