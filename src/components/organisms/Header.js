import React from "react";
import Dropdown from "../atoms/Dropdown";

import '../../styles/organisms/Header.css';
const Header = () =>
{
    const name = 'Baseny GżdyPuciek';
    const poolsDropdown = "BASENY";
    const shopDropdown = "SKLEP";
    const contactDropdown = "KONTAKT";

    return(
      <div className="Header">
          <p className="CompanyName">{name}</p>
          <div className="Dropdowns">
              <Dropdown value={poolsDropdown}/>
              <Dropdown value={shopDropdown}/>
              <Dropdown value={contactDropdown}/>
          </div>
      </div>
    );
}

export default Header;
