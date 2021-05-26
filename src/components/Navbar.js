import React from 'react';

function Navbar() {
    // const active = useParams()
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white" href="/">Gerriss Gailey</a>
                <div>
                    <ul className="nav nav-tabs justify-content-end mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="./">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="./portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="./resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="./contact">Contact</a>
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