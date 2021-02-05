import { Link } from "react-router-dom";
import "./nav.styles.scss";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link className="links current" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links " to="/work">
            Work
          </Link>
        </li>
        <li>
          <Link className="links " to="/skills">
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
