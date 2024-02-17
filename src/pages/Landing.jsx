import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";


function Landing() {
  return (
    <>
      <div className="container py-5">
        <h1 className="fw-bold">
          Welcome to ReactJS and Firebase Authentication
        </h1>
        <Link to={appLinks.Login} className="btn btn-outline-dark">
          Login/Register
        </Link>
      </div>
    </>
  );
}

export default Landing;
