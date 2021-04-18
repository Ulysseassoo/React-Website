import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'
import '../Styles/Footer.scss'

function Footer() {
    return (
        <div className="footer_container">
                <p>Velo World. All Rights Reserved, @2021</p>
                <ul className="links_footer">
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                    <li><FaLinkedin /></li>
                    <li><FaYoutube /></li>
                </ul>
                <div className="policies">
                    <p>Privacy policy</p>
                    <span></span>
                    <p>Terms & Conditions</p>
                </div>
        </div>
    )
}

export default Footer
