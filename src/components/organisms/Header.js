import React from "react";
import Dropdown from "../atoms/Dropdown";
import {useNavigate} from "react-router-dom";

import '../../styles/organisms/Header.css';
import Button from "../atoms/Button";
const Header = ({style}) =>
{
    const name = 'Baseny GżdyPuciek';
    const poolsDropdown = "BASENY";
    const shopDropdown = "SKLEP";
    const contactDropdown = "KONTAKT";
    const navigate = useNavigate();

    const goToMain = () =>
    {
        navigate('/');
    }
    const goToContact = () =>
    {
        navigate('/contact');
    }

    return(
      <div className="Header" style={style}>
          <p className="CompanyName" onClick={goToMain}>{name}</p>
          <div className="Dropdowns">
              <Dropdown value={poolsDropdown}/>
              <Button value={shopDropdown}/>
              <Button value={contactDropdown} onClick={goToContact}/>
          </div>
      </div>
    );
}

export default Header;
