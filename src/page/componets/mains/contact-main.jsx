import React from "react";

import "./contact-main.css";
const ContactMain = () => {
    return (
        <div className="contact-main">
            <form
                action="https://formspree.io/f/YOUR_FORM_ID" // Replace YOUR_FORM_ID with your Formspree ID
                method="POST"
                className="contact-main__form"
            >
                <div className="contact-main__form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="contact-main__form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="contact-main__form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="contact-main__submit">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactMain;

