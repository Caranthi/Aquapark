import React from "react";

import '../../styles/atoms/Footer.css';
const Footer = () =>
{
    const footerText = '© 2024 Baseny GżdyPuciek';

    return(
      <div className="Footer">
          <p className="FooterText">{footerText}</p>
      </div>
    );
}

export default Footer;
