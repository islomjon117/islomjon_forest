import '../descriptions/descriptions.css'

import { MdOutlineSupportAgent } from "react-icons/md";

const Descriptions = () => {
    return (
        <>
            <div className="descriptions">
                <div className="container">
                    <div className="descriptions_main">

                        <div className="descriptions_right">
                            <div className="description_title">
                                <p>
                                    Описания котежа
                                </p>
                            </div>
                            <div className="description_info_bottom">
                                <p>
                                    С другой стороны новая модель организационной деятельности <br /> играет важную роль в формировании системы обучения кадров, <br /> соответствует насущным потребностям.
                                </p>
                            </div>
                            <div className="description_info_top">
                                <p>
                                    Повседневная практика показывает, что постоянный <br /> количественный рост и сфера нашей активности.Повседневная <br /> практика показывает, что начало повседневной работы по <br /> формированию позиции требуют от нас анализа системы обучения <br /> кадров, соответствует насущным потребностям. Таким образом <br /> сложившаяся структура организации требуют определения и <br /> уточнения соответствующий условий активизации. Разнообразный и <br /> богатый опыт сложившаяся структура организации позволяет <br /> оценить значение новых предложений.. Таким образом сложившаяся <br /> структура организации требуют определения и уточнения <br /> соответствующий условий активизации.
                                </p>
                            </div>
                        </div>

                        <div className="descriptions_left">

                            <div className="descriptions_location">
                                <div className="location_title">
                                    <p>АДРЕС</p>
                                </div>
                                <div className="descriptions_location_info">
                                    <p>г.Краснодар, Чиланзарский район, 24-7-7</p>
                                </div>
                            </div>

                             <div className="description_square">
                                <div className="square_title">
                                    <p>ПЛОЩАДЬ</p>
                                </div>
                                <div className="square_info">
                                    <p>49 215 М2</p>
                                </div>
                            </div>

                            <div className="description_materials">
                                <div className="materials_title">
                                    <p>
                                        МАТЕРИАЛЫ
                                    </p>
                                </div>
                                <div className="materials_info">
                                    <p>Битон, цимент, гипс</p>
                                </div>
                            </div> 

                             <div className="description_term">
                                <div className="term_title">
                                    <p>
                                        СРОК
                                    </p>
                                </div>
                                <div className="term_info">
                                    <p>
                                        Построенно за 12 месяцев
                                    </p>
                                </div>
                            </div>

                            <div className="descriptions_stories">
                                <div className="stories_title">
                                    <p>ЭТАЖНОСТЬ</p>
                                </div>
                                <div className="stories_info">
                                    <p>
                                        24 этажей
                                    </p>
                                </div>
                            </div>

                            <div className="online_support_and_btn">
                                <button className='calculate_btn'>Рассчитать подобный проек</button>
                                <div className="online_support">
                                    <div className="online_support_icon">
                                        <MdOutlineSupportAgent />
                                    </div>
                                    <div className="online_support_info">
                                        <p>
                                            Наши эксперты рассчитают для вас <br />
                                            стоимость строительства объект 45 минут
                                        </p>
                                    </div>
                                </div>
                            </div> 

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descriptions