import React, { useState } from 'react';
import '../contact_page/contact_page.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaYoutube } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

import { IoMdClose } from "react-icons/io";

const containerStyle = {
    width: '900px',
    height: '520px',
};



const center = {
    lat: 40.52861000,
    lng: 70.94250000,
};

const Contact_page = () => {
    const [isLoginModal, setLoginModal] = useState(false)
    const toggleLogin = () => {
        setLoginModal(!isLoginModal)
    }

    const [phone, setPhone] = useState('');

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        if (/^\+?\d*$/.test(value)) {
            setPhone(value.startsWith('+') ? value : '+' + value);
        }
    };

    return (
        <div className='contact_page'>
            <div className="container">
                <div className="contact_page_main">

                    <div className="contactspage_left">
                        <div className="contact_page_title">
                            <p>Главная - Контакты</p>
                        </div>
                        <div className="contact_page_subtitle">
                            <p>КОНТАКТЫ</p>
                        </div>
                        <div className="contactpage_info">
                            <p className='contactpage_info_title'>Наш офис:</p>
                            <p className='contact_ofis_location'>г.Москва ул. Ломоносова д. 16</p>
                            <p className='contact_working_time'>9:00-21:00 Без выходных</p>
                        </div>

                        <div className="contact_phone_num">
                            +8 800 800 80 80
                        </div>
                        <div className="contact_email">
                            <p className='ofis_email_title'> Электронная почта:</p>
                            <p >ForestINVERONMENTAL@mail.ru</p>
                        </div>
                        <div className="contactpage_icon">
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

                        <div className="contact_modal_btn">
                            <button onClick={toggleLogin}>Связаться с нами</button>
                        </div>

                    </div>

                    <div className="google_maps">
                        <LoadScript googleMapsApiKey="AIzaSyCbx1ERRfLuXePQwos_-jwvQNWCkEXptZg">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                            >
                            </GoogleMap>
                        </LoadScript>


                    </div>

                    {isLoginModal &&
                        <div className="login_modal_bg">
                            <div className="login_modal">

                                <div className="login_close_btn">
                                    <p className='close_modal_btn' onClick={toggleLogin}><IoMdClose /></p>
                                </div>
                                <div className="modal_title">
                                    <p>
                                        Связаться с нами
                                    </p>
                                </div>
                                <div className="modal_info">
                                    <p>
                                        Персональный менеджер свяжется с вами
                                        <br />
                                        в течение 15 минут
                                    </p>
                                </div>
                                <div className="modal_inputs">
                                    <input type="text" placeholder='Имя' />
                                    <input type="text" placeholder='E-mail' />

                                    <input type="tel" id="phone" name="phone" placeholder="Tелефон"
                                        value={phone} onChange={handlePhoneChange} onFocus={() => {
                                            if (phone === '') setPhone('+998');
                                        }}
                                        onBlur={() => {
                                            if (phone === '+') setPhone('');
                                        }}
                                    />
                                </div>
                                <div className="modal_checkbox">
                                    <input type="checkbox" />
                                    <p>Согласен(на) с обработкой персональных данных</p>
                                </div>
                                <button>ОСТАВИТЬ ЗАЯВКУ</button>


                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Contact_page;
