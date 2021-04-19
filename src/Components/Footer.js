import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'
import '../Styles/Footer.scss'

function Footer() {
    return (
        <div className="footer_container">
                <p>Velo World. Tout droits réservés, @2021</p>
                <ul className="links_footer">
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                    <li><FaLinkedin /></li>
                    <li><FaYoutube /></li>
                </ul>
                <div className="policies">
                    <p>Politique de Confidentialité</p>
                    <span></span>
                    <p>Termes & Conditions</p>
                </div>
        </div>
    )
}

export default Footer
