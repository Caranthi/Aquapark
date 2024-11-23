import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import '../../styles/atoms/Dropdown.css';
const Dropdown = ({value}) => {
    const [isVisible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible((prev) => !prev);
    };

    return (
        <div className="Dropdown">
            <p onClick={toggleDropdown}>{value}</p>
            <FontAwesomeIcon icon={faArrowRight} className="Arrow"/>
        </div>
    );
}

export default Dropdown;
