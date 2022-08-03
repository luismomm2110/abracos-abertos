import { Link } from "react-router-dom";
import { NavContainer, LinkText } from "./styles";
import logo from "../../assets/logo.png";

function Header() {
  const links = [
    { link: "/about", description: "Quem somos" },
    { link: "/volunteer", description: "Seja um voluntário" },
    { link: "/student", description: "Busque apoio!" },
    { link: "/contact", description: "Contato" },
  ];

  return (
    <NavContainer>
      <LinkText>
        <div expand="sm">
          <Link to="/">
            <img src={logo} height="60px" width="130px" alt="logo" />
          </Link>
        </div>
      </LinkText>
      {links.map((link, i) => (
        <Link to={link.link}>
          <LinkText>{link.description}</LinkText>
        </Link>
      ))}
    </NavContainer>
  );
}

export default Header;
