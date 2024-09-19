import React from 'react'
import {
  Link
} from "react-router-dom";
function Navbar(props) {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="#"><b>NewsHunt</b></Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">technology</Link>
            </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}


export default Navbar

