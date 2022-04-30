import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Header = () => {
  return (
    <Navbar>
      <Container style={{ backgroundColor: "blue" }}>
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav>
            <NavbarBrand> Abracos Abertos </NavbarBrand>
            <Nav.Link href="about">About </Nav.Link>
            <Nav.Link href="history">History </Nav.Link>
            <Nav.Link href="volunteer">Volunteer </Nav.Link>
            <Nav.Link href="contact">Contact Us </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
