import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Twitter } from '@mui/icons-material';
import '../styles/Footer.css'

function Footer() {
  return <div className="footer">
    <div className="socialMedia">
        <InstagramIcon/><Twitter/><FacebookIcon/><LinkedInIcon/>
    </div>
        <p>&copy;  2023 Pizzeria.com</p>
  </div>
}

export default Footer;
