import React from "react";
import { useAuth } from "../firebase/auth";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";

function Navbar() {
  const { authUser, signOut } = useAuth();
  return (
    <>
      <nav className="navbar sticky-top border-bottom bg-white mb-2">
        <div className="container">
          <Link className="navbar-brand h4 fw-bold" to={appLinks.Dashboard}>
            AuthenticateMe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            data-bs-theme="dark"
          >
            <div className="offcanvas-header">
              {authUser ? (
                <>
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    Hello {authUser.email}
                  </h5>
                </>
              ) : (
                <>
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    Hello
                  </h5>
                </>
              )}

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <hr />

            {/* offcanvas body */}
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                {authUser ? (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to={appLinks?.Dashboard}
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to={appLinks?.Profile}
                      >
                        Profile
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className=" btn btn-outline-danger"
                        onClick={signOut}
                      >
                        Sign Out
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        className="btn btn-outline-success"
                        to={appLinks?.Login}
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
