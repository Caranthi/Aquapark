import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import '../../styles/atoms/Button.css';
const Button = ({value, onClick}) => {

    return (
        <div className="Button" onClick={onClick}>
            <p>{value}</p>
            <FontAwesomeIcon icon={faArrowRight} className="Arrow"/>
        </div>
    );
}

export default Button;
