import React from "react";
import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <img src={""} alt="Logo"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={""} alt=""></img>
              </a>
              <a href="#">
                <img src={""} alt=""></img>
              </a>
              <a href="#">
                <img src={""} alt=""></img>
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("contact us")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
