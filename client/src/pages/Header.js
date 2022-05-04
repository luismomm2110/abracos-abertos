import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Navbar expand="sm">
        <Container>
          <Nav>
            <Navbar.Brand href="/">
              <img src={logo} height="50" width="150" alt="logo" />
            </Navbar.Brand>
            <Nav.Link href="about">Quem somos</Nav.Link>
            <Nav.Link href="volunteer">Seja um voluntário</Nav.Link>
            <Nav.Link href="contact">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
