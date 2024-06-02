import React, { useState } from 'react';
import '../contacts/contacts.css';

import { Link } from 'react-router-dom';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaYoutube } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

const Contacts = () => {
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        if (/^\+?\d*$/.test(value)) {
            setPhone(value.startsWith('+') ? value : '+' + value);
        }
    };



    return (
        <>
            <div className="contacts">
                <div className="container">
                    <div className="contacts_main">

                        <div className="contacts_right">
                            <div className="contacts_right_title">
                                <p>Консультация</p>
                            </div>
                            <div className="contacts_right_subtitle">
                                <p>Персональный менеджер свяжется с вами</p>
                                <p> в течение 15 минут</p>
                            </div>

                            <div className="contacts_right_inputs">

                                <input type="text" className='contacts_name' placeholder='имя' />
                                <input type="email" className='contacts_email' placeholder='E-mail' />
                                <input type="tel" id="phone" name="phone" placeholder="телефон"
                                    value={phone} onChange={handlePhoneChange} onFocus={() => {
                                        if (phone === '') setPhone('+998');
                                    }}
                                    onBlur={() => {
                                        if (phone === '+') setPhone('');
                                    }}
                                />

                                <div className="checkbox">
                                    <input type="checkbox" className='input_checkbox' />
                                    <p>Согласен(на) с обработкой персональных данных</p>
                                </div>
                            </div>
                                <button className='submit_btn'>ОСТАВИТЬ ЗАЯВКУ</button>
                        </div>

                        <div className="contacts_left">
                            <div className="contacts_left_title">
                                <p>КОНТАКТЫ</p>
                            </div>
                            <div className="ofis_info">
                                <p className='ofis_info_title'>Наш офис:</p>
                                <p className='ofis_location'>г.Москва ул. Ломоносова д. 16</p>
                                <p className='working_time'>9:00-21:00 Без выходных</p>
                            </div>

                            <div className="ofis_phone_num">
                                +8 800 800 80 80
                            </div>
                            <div className="ofis_email">
                                <p className='ofis_email_title'> Электронная почта:</p>
                                <p >ForestINVERONMENTAL@mail.ru</p>
                            </div>
                            <div className="contact_icon_left">
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
            </div>
        </>
    );
}

export default Contacts;
