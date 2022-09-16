import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function logoutHandler(e) {
  e.preventDefault();
  localStorage.removeItem("user_token");
}

function SiteHeader() {
  const navigate = useNavigate();
  const token = localStorage.getItem("user_token");
  const userId = jwt_decode(token).data.objId;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Rent-Go-Where
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href={`/api/v1/board/show_properties/${userId}`}
              >
                Favourite
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Potential Housemate
              </a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            {token ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  UserName
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/api/v1/profile">Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a onClick={logoutHandler}>
                      <Link to="/">Logout</Link>
                    </a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <li className="nav-link">
                  <Link to="/api/v1/auth/register">Register</Link>
                </li>
                <li className="nav-link">
                  <Link to="/api/v1/auth/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SiteHeader;
