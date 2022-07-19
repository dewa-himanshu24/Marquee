import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="container-fluid">
          <Link to="/findCompany">
            <button type="button" className="btn-company shadow">
              COMPANY +
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
