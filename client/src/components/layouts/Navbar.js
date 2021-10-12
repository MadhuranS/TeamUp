import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="index.html">
                    <i className="fas fa-user-graduate"></i> TeamUp
                </a>
            </h1>
            <ul>
                <li>
                    <a href="profiles.html">Students</a>
                </li>
                <li>
                    <a href="register.html">Register</a>
                </li>
                <li>
                    <a href="login.html">Login</a>
                </li>
            </ul>
        </nav>
    );
};
