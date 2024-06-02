import { useState } from 'react';
import '../services_contact/services_contact.css'

const Services_contact = () => {
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        if (/^\+?\d*$/.test(value)) {
            setPhone(value.startsWith('+') ? value : '+' + value);
        }
    };
    return (
        <>
            <div className="services_contact">
                <div className="container">
                    <div className="services_contact_main">
                        <div className="services_contact_title">
                            <p>получите расчет сметы с учетом стоимости работ и материалов через 30 минут</p>
                        </div>
                        <div className="services_contact_title2 ">
                            <p>Оставьте заявку прямо сейчас</p>
                        </div>

                        <div className="services_contact_inputs">
                            <input type="text" className='services_name_input' placeholder='Имя' />
                            <input type="tel" className='services_tel' id="phone" name="phone" placeholder="Tелефон"
                                value={phone} onChange={handlePhoneChange} onFocus={() => {
                                    if (phone === '') setPhone('+998');
                                }}
                                onBlur={() => {
                                    if (phone === '+') setPhone('');
                                }}
                            />
                            <button>Отправить</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services_contact