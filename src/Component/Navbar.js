import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>

          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/page">pagination</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
