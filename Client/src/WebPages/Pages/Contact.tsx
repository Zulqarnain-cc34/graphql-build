import React from "react";
import { Navbar } from "../Component/HomePageComponents/Navbar";
import { ContactForm } from "../Component/ContactPageComponents/ContactForm";
import "../Css/contact.css";
interface ContactProps { }

export const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="contact">
            <Navbar />
            <ContactForm />
        </div>
    );
};
