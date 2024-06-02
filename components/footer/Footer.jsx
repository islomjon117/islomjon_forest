import '../footer/footer.css'

import { GoArrowUp } from "react-icons/go";
import img1 from '../../assets/navbar_icon/nav_logo.png'
import { Link } from 'react-router-dom';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaYoutube } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer_main">
                        <div className="footer_logo">
                            <img src={img1} alt="" />
                        </div>
                        <div className="all_rights_reserved">
                            <p>© Все право защищены 2021</p>
                        </div>

                        <div className="footer_links">
                            <Link to="/" className='nav_link'>
                                О нас
                            </Link>
                            <Link to="/services" className='nav_link uslugi'>
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

                        <div className="up_arrow_icon">
                            <GoArrowUp />
                        </div>

                        <div className="footer_icons">
                            <Link to='https://t.me/my_projects_689' className="telegram_icon">
                                <FaTelegram />
                            </Link>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer