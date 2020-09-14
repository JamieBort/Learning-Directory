import React from 'react';
import Contact from './Contact';

function ContactList(props) {
    return (
        <div>
            {props.contacts.map(c => <Contact key={c.id} name={c.name} />)}
        </div>
    );
}

export default ContactList;