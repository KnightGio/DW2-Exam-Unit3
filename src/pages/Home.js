import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <section className="Home">
            <div>
                <h1>Soy Giovanni Linares.</h1>
                <p>Soy un<strong>Backend Developer</strong> especializado en PHP y Python.</p>
                <div className="social-links">
                    <a href="https://www.facebook.com/gio.linares.3" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/gio-linares-071571283/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />                          
                    </a>
                    <a href="https://github.com/KnightGio" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;