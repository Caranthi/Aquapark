import React from "react";
import Dropdown from "../atoms/Dropdown";

import '../../styles/organisms/Header.css';
import Button from "../atoms/Button";
const Header = () =>
{
    const name = 'Baseny GżdyPuciek';
    const poolsDropdown = "BASENY";
    const shopDropdown = "SKLEP";
    const contactDropdown = "KONTAKT";

    const showPools = () =>
    {

    }

    return(
      <div className="Header">
          <p className="CompanyName">{name}</p>
          <div className="Dropdowns">
              <Dropdown value={poolsDropdown}/>
              <Button value={shopDropdown}/>
              <Button value={contactDropdown}/>
          </div>
      </div>
    );
}

export default Header;
