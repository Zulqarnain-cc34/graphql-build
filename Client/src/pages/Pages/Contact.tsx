import React from "react";
import { Navbar } from "../Component/Home/Navbar";
import { ContactForm } from "../Component/Contact/ContactForm";
import "../../styles/pages/contact.css";
interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="contact">
            <Navbar />
            <ContactForm />
        </div>
    );
};
