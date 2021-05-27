import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    // const active = useParams()
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand text-white" href="/">Gerriss Gailey</Link>
                <div>
                    <ul className="nav nav-tabs justify-content-end mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="./">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="./portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="./resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="./contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
            <br />
        </div>
    );
}

export default Navbar