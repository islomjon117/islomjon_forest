import '../canwe/canwe.css'

import canwe_img from '../../assets/canwe_img/canwe_img.png'
import { Link } from 'react-router-dom'
import { GoCircle } from 'react-icons/go'
import { FaPlay } from 'react-icons/fa6'

const CanWe = () => {
    return (
        <>
            <div className="canwe">
                <div className="container">
                    <div className="canwe_main">

                        <div className="canwe_right">
                            <div className="canwe_title">
                                <p>Что мы можем?</p>
                            </div>
                            <div className="canwe_subtitle">
                                <p className='individual' style={{ color: '#86DA44' }}>индивидуальное</p>
                                <p>проектирование вашех домов</p>
                            </div>
                            <div className="canwe_info">
                                на выбор подходяший раззмер и конфигурация дома для разных
                                земельных участок и разного состава семьи ( молодая пара. семья с
                                маленьким ребенком, дом для большой семьи).Мы сможем установить дом где угодно - на участке перед вышем домом, в лесной зоне, на береге реки. Доставку осуществляет наша компания
                            </div>
                            <Link>Подробнее об услугах</Link>
                        </div>

                        <div className="canwe_left">
                            <div className="canwe_left_img">
                                <img src={canwe_img} alt="" />
                                <span className='gocircle2'><GoCircle /></span>
                                <span className='faplay2'><FaPlay /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CanWe