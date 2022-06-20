import { Navbar, Nav, Container } from "react-bootstrap";
import { NavContainer, LinkText } from './styles';
import logo from "../../assets/logo.png";

function Header() {
  return (
    <NavContainer>
      <Navbar expand="sm">
        <Container>
          <Nav style={{ display: "flex", alignItems: "center" }}>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="60px"
                width="130px"
                alt="logo"
              />
            </Navbar.Brand>
            <Nav.Link href="/about">
              <LinkText>Quem somos</LinkText>
            </Nav.Link>
            <Nav.Link href="/volunteer">
              <LinkText>Seja um voluntário</LinkText>
            </Nav.Link>
            <Nav.Link href="/student">
              <LinkText>Busque apoio!</LinkText>
            </Nav.Link>
            <Nav.Link href="/contact">
              <LinkText>Contato</LinkText>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </NavContainer>
  );
};

export default Header;
