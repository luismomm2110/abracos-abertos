import { Navbar } from "react-bootstrap";
import styles from './styles';

export default function Footer({ isFixed }) {
  return (
    <Navbar
      style={styles}
      fixed={isFixed ? "bottom" : " "}
    >
      © Copyright 2022 Abraços Abertos | Todos os Direitos Reservados.
    </Navbar>
  );
}
