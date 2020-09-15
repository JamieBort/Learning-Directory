import React from 'react';
import "./Contact.css";

function Contact(props) {
    return (
        <div className="contact">
            <span>{props.name}</span>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>
    )
}

export default Contact;