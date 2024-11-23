import React from "react";
import Header from "../organisms/Header";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faMailForward} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faAdd} from '@fortawesome/free-solid-svg-icons';
import '../../styles/pages/Contact.css';
import Footer from "../atoms/Footer";

const Contact = () => {
    const phoneText = 'Telefon: 987 654 321';
    const emailText = 'Email: sample@gmail.com';
    const regonText = 'Regon: 12 345678 9 1234 5';
    const addressText = 'Nasz adres: Chrząszczyrzewoszyce 1a';

    return (
        <div className="Contact">
            <Header style={{backgroundColor: 'grey'}}/>
            <div className="ContactContent">
                <div className="Texts">
                    <div className="SingleText">
                        <FontAwesomeIcon icon={faPhone} className="Icon"/>
                        <p>{phoneText}</p>
                    </div>
                    <div className="SingleText">
                        <FontAwesomeIcon icon={faMailForward} className="Icon"/>
                        <p>{emailText}</p>
                    </div>
                    <div className="SingleText">
                        <FontAwesomeIcon icon={faAdd} className="Icon"/>
                        <p>{regonText}</p>
                    </div>
                    <div className="SingleText">
                        <FontAwesomeIcon icon={faHome} className="Icon"/>
                        <p>{addressText}</p>
                    </div>
                </div>
                <div className="Image">

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
