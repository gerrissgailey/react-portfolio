import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Navbar() {
    const active = useParams()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white" href="index.html">Gerriss Gailey</a>
                <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className="nav nav-tabs justify-content-end mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/">
                                <p className={`nav-link ${active === "/" ? "active text-black" : "text-white"}`}>About Me <span className="sr-only">(current)</span></p>
                            </Link>
                            <Link to="/portfolio">
                                <p className={`nav-link ${active === "/portfolio" ? "active text-black" : "text-white"}`}>Portfolio <span className="sr-only">(current)</span></p>
                            </Link>
                            <Link to="/resume">
                                <p className={`nav-link ${active === "/resume" ? "active text-black" : "text-white"}`}>Resume <span className="sr-only">(current)</span></p>
                            </Link>
                            <Link to="/contact">
                                <p className={`nav-link ${active === "/contact" ? "active text-black" : "text-white"}`}>Contact <span className="sr-only">(current)</span></p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
            <br />
        </div>
    )
}

export default Navbar
