import React from 'react';
import FotoTiago from '../assets/images/tiago.png';
const Contact = props => (
    <button className="box-contact">
        <img src={FotoTiago} className="foto-contact" />
        <div className="text-contact">
            <span className="name-contact">{props.name}</span>
            <span className="status-contact">{props.status}</span>
        </div>
    </button>
);

export default Contact;