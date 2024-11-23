import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import '../../styles/atoms/Dropdown.css';

const Dropdown = ({value}) => {
    const pool1 = 'Bajoro';
    const pool2 = 'Kałuża';
    const pool3 = 'Złote jezioro';

    const [isVisible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible((prev) => !prev);
    };

    return (
        <div className={`${isVisible ? "Dropdown-Visible" : "Dropdown-Hidden"}`}>
            <div className="Text">
                <p onClick={toggleDropdown}>{value}</p>
                <FontAwesomeIcon icon={faArrowRight} className="Arrow"/>
            </div>
            {isVisible && (
                <div className="Pools">
                    <p className="Pool">{pool1}</p>
                    <p className="Pool">{pool2}</p>
                    <p className="Pool">{pool3}</p>
                </div>
            )}
        </div>
    );
}
export default Dropdown;
