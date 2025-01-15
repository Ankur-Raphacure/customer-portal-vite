import React from "react";
import { CRHeaderStyled } from "./CRHeader.styled";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CRHeader = () => {
  const history = useHistory();
  const redirectTo = (route: string) => {
    history.push(`/chatroom/${route}`);
  };
  return (
    <CRHeaderStyled>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => redirectTo("chatroom")}>
            Chat Room
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item onClick={() => redirectTo("home")}>Home</Nav.Item>
              <Nav.Item onClick={() => redirectTo("login")}>Login</Nav.Item>
            </Nav>
            <Nav>
              <NavDropdown
                className="d-flex justify-content-center"
                title={
                  <Image
                    src="https://ankur02sarkar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.ade7d646.png&w=1080&q=75"
                    roundedCircle
                    width="50"
                    height="50"
                    alt="Profile"
                    className="rounded-circle shadow-5"
                  />
                }
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </CRHeaderStyled>
  );
};

export default CRHeader;
