import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../styles/Components/Contact/contactForm.css";
interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = () => {
    return (
        <div className="contactform">
            <div className="contact-info">
                <div className="input-field">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input
                        type="text"
                        name="username"
                        placeholder="name"
                        required
                    />
                </div>
            </div>
        </div>
    );
};
