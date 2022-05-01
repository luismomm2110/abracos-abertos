import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div
      style={{
        "text-align": "center",
        padding: 5,
      }}
    >
      <Navbar className="mr-auto">
        <Nav class="justify-content-between">
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
      </Navbar>
    </div>
  );
};

export default Header;
