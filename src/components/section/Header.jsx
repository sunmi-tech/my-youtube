import { Link, useLocation } from "react-router-dom";
import Menu from "../header/Menu";
import Sns from "../header/Sns";

function Header() {
  const location = useLocation();

  return (
    <header id="header" role="banner">
      <h1 className="header_logo">
        <a href="/">
          <em aria-hidden="true"></em>
          <span>
            My
            <br />
            YouTube
          </span>
        </a>
      </h1>
      <Menu />
      <Sns />
    </header>
  );
}

export default Header;
