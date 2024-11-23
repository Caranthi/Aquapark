import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import '../../styles/atoms/Dropdown.css';
const Dropdown = ({value}) => {

    return (
        <div className="Dropdown">
            <p>{value}</p>
            <FontAwesomeIcon icon={faArrowRight} className="Arrow"/>
        </div>
    );
}

export default Dropdown;
