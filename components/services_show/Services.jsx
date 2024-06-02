import '../services_show/services.css'

import img1 from '../../assets/about_img/about_img.png'

const Services = () => {
    return (
        <>
            <div className="services">
                <div className="container">
                    <div className="services_main">

                        <div className="services_left">
                            <div className="services_left_title">
                                <p>Главная - Услуги</p>
                            </div>
                            <div className="services_left_subtitle">
                                <p>Строительство <b className='subtitle_in' style={{ fontSize: '36px', color: '86DA44' }}>домов и <br /> коттеджей</b></p>
                            </div>

                            <div className="services_info_bottom">
                                <p>на выбор подходяший раззмер и конфигурация дома для разных <br />  земельных участок и разного состава семьи ( молодая пара. семья с <br /> маленьким ребенком, дом для большой семьи).Мы сможем <br /> установить дом где угодно - на участке перед вышем домом, в лесной <br /> зоне, на береге реки. Доставку осуществляет наша компания  </p>
                            </div>

                            <div className="services_info_top">
                                <p>
                                    Преимущества <br /> Комплексный подряд. Вы можете заказать выполнение всех работ в <br /> нашей компании: от проектирования до электромонтажа в готовом <br /> здании. «АНКА техник» располагает парком спецтехники, штатом <br /> специалистов. Возможно сотрудничество на условиях субподряда. <br /><br /> Качество. Мы учитываем характеристики участка, соблюдаем ШНК, <br /> другие нормы, используем надежные строительные технологии. <br /><br />  Сотрудничество. Компания «АНКА техник» подберет технологии <br /> строительства, стройматериалы, обеспечит их поставку. <br />  Запланированные работы выполняются без нарушения графика. <br /> Грамотная организация строительства позволяет <br /> возводить коттеджи и таунхаусы всего за несколько месяцев.<br /><br />
                                </p>
                            </div>

                            <div className="services_info_top_2">
                                <p>
                                    Сопутствующие услуги. Мы выполняем изыскания, топосъемку,
                                    <br />
                                    подготовку территории к застройке, демонтаж старых зданий.
                                </p>
                            </div>

                            <div className="services_left_btn">
                                <button>Подробнее</button>
                            </div>
                        </div>
                        
                        <div className="services_right">
                            <div className="services_right_img">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services