import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import styles from "./styles";

const Header = () => {
  return (
    <div style={styles.mainDiv}>
      <Navbar expand="sm">
        <Container>
          <Nav style={styles.nav}>
            <Navbar.Brand href="/" style={styles.navBrand}>
              <img src={logo} height="50" width="150" alt="logo" />
            </Navbar.Brand>
            <Nav.Link href="about" style={styles.menuLink}>
              Quem somos
            </Nav.Link>
            <Nav.Link href="volunteer" style={styles.menuLink}>
              Seja um voluntário
            </Nav.Link>
            <Nav.Link href="student" style={styles.menuLink}>
              Busque apoio!
            </Nav.Link>
            <Nav.Link href="contact" style={styles.menuLink}>
              Contato
            </Nav.Link>
            <Nav.Link href="listavoluntarios" style={styles.menuLink}>
              Lista de Voluntários
            </Nav.Link>
            <Nav.Link href="listaestudantes" style={styles.menuLink}>
              Lista de Estudantes
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
