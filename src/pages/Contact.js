import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact () {
    return (
        <section className="contact">
            <h2>Contactame</h2>
            <p>Puedes contactarme a traves de mi correo electronico:</p>
            <h2>giovannilinares.a@gmail.com</h2>
            <p>Sigueme en mis redes</p>
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
        </section>
    )
}
export default Contact;