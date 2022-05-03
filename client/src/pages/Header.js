import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar expand="sm">
      <Container className="my-auto justify-content-center">
        <Nav className="me-auto">
          <Navbar.Brand className="link-header" href="/">
            <img src={logo} height="50" width="150" alt="logo" />
          </Navbar.Brand>
          <Nav.Link className="link-header" href="about">
            Quem somos
          </Nav.Link>
          <Nav.Link className="link-header" href="volunteer">
            Seja um voluntário
          </Nav.Link>
          <Nav.Link className="link-header" href="contact">
            Contato
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;