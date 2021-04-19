import { React, useState } from 'react'
import {Link, animateScroll as Scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import '../Styles/Navbar.scss'




function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [item, setItem] = useState(false)
    const [menuButton, setmenuButton] = useState(false)
    let changeBackgroundColor = () => {
        if (window.scrollY >= 150) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    let activeLink = () => {
        setItem(!item)
        setmenuButton(false)
    }
    let showMenu = () => {
        setmenuButton(!menuButton)
    }
    window.addEventListener("scroll", changeBackgroundColor)
    return (
        <nav className={navbar ? 'nav active' : 'nav'}>
            <Link to ="/" className="logo" smooth={true} duration={800} 
            onClick={() => Scroll.ToTop()}>
                <h1>Velo World</h1>
            </Link>
            <FaBars className="btn_menu" onClick={() => showMenu()}/>
            <ul className={menuButton ? "nav_menu mobile" : 'nav_menu'}>
                <Link to ="home" smooth={true} duration={800}>
                    <li className={item ? 'active' : ''} onClick={() => activeLink()}>home</li>
                </Link>
                <Link to ="matches" smooth={true} duration={800}>
                    <li className={item ? 'active' : ''} onClick={() => activeLink()}>matches</li>
                </Link>
                <Link to ="highlights" smooth={true} duration={800}>
                    <li className={item ? 'active' : ''} onClick={() => activeLink()}>highlights</li>
                </Link>
                <Link to ="newsletter" smooth={true} duration={800}>
                    <li className={item ? 'active' : ''} onClick={() => activeLink()}>newsletter</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
