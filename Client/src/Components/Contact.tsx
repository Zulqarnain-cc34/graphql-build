import React from "react";
import { Navbar } from "./Navbar";
import { ContactForm } from "./ContactForm";
import "../Css/contact.css";
interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="contact">
            <Navbar />
            <ContactForm />
        </div>
    );
};
