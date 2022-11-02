import React from 'react';

function Nav(props) {
    const selectedSection = props.selectedSection;
    const setSelectedSection = props.setSelectedSection;

    return (
    <nav className="nav">
        <ul>
            <li className={(selectedSection) === "About Me" ? "selected navLink" : "navLink"} onClick={() => setSelectedSection("About Me")}>
                About Me
            </li>
            <li className={(selectedSection) === "Portfolio" ? "selected navLink" : "navLink"} onClick={() => setSelectedSection("Portfolio")}>
                Portfolio
            </li>
            <li className={(selectedSection) === "Resume" ? "selected navLink" : "navLink"} onClick={() => setSelectedSection("Resume")}>
                Resume
            </li>
            <li className={(selectedSection) === "Contact" ? "selected navLink" : "navLink"} onClick={() => setSelectedSection("Contact")}>
                Contact Me
            </li>
        </ul>
    </nav>
)};

export default Nav;