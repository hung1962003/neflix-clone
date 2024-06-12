import { Link } from "react-router-dom";
import "./index.scss";
import { SearchOutlined } from "@ant-design/icons";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="./image/netflix.png" alt="Netflix Logo" width={200} />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/movie-management">Movie-Management </Link>
          </li>
          <SearchOutlined />
        </ul>
      </nav>
    </div>
  );
}

export default Header;
