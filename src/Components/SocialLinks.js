import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../Styles/SocialLinks.scss'



function SocialLinks() {
    return (
        <ul className="links">
            <li>
                <Link to="/">
                    <FaFacebook />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaInstagram />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaLinkedin />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaTwitter />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaYoutube />
                </Link>
            </li>
        </ul>
    )
}

export default SocialLinks
