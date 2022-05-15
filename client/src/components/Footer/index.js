import { Navbar } from "react-bootstrap";
import styles from './styles';

export default function Footer() {
  return (
    <Navbar
      style={styles}
      fixed="bottom"
    >
      © Copyright 2022 Abraços Abertos | Todos os Direitos Reservados.
    </Navbar>
  );
}
