import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

import '../navbar/navbar.css'

import logo from '../../assets/navbar_icon/nav_logo.png'

// icon import
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

    const [active, setActive] = useState()
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`navbar_main ${scrolling ? 'scrolled' : ''}`}>
                <div className="navbar_help_div nav_container">

                    <div className="nav_logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className={active ? 'nav_links active' : 'nav_links'}>
                        <Link to="/" className='nav_active'>
                            Главная
                        </Link >
                        <Link to='/' className='nav_link'>
                            О нас
                        </Link>
                        <Link to="/services" className='nav_link'>
                            Услуги
                        </Link>
                        <Link to="/projects" className='nav_link'>
                            Проекты
                        </Link>
                        <Link to="/" className='nav_link'>
                            Консультация
                        </Link>
                        <Link to="/contact" className='nav_link'>
                            Контакты
                        </Link>
                    </div>

                    <div className={active ? 'nav_icons active' : 'nav_icons'}>
                        <Link to='https://www.facebook.com/' className="facebook_icon">
                            <BiLogoFacebookSquare />
                        </Link>
                        <Link to='https://www.youtube.com/' className="youtube_icon">
                            <FaYoutube />
                        </Link>
                        <Link to='https://www.instagram.com/' className="instagram_icon">
                            <AiFillInstagram />
                        </Link>
                    </div>

                    <div className='navbar_main_menu_and_close open1' onClick={() => setActive(!active)} >
                        {
                            active ?
                                <IoCloseSharp className='navbar_main_icon navbar_main_close' /> :
                                <FaBars className='navbar_main_menu navbar_main_icon' />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar