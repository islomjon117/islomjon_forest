import '../about/about.css'

import about from '../../assets/about_img/about_img.png'
import { GoCircle } from 'react-icons/go'
import { FaPlay } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_main">

            <div className="about_right">

              <div className="about_title">
                <Link to="/about" >
                  <p className='about_us'>о нас</p>
                </Link>
              </div>

              <div className="about_subtitle">
                <p><b className='about_title_res'>принципы</b> которых</p>
                <p>мы придерживаемся</p>
              </div>

              <div className="about_qualities">
                <div className="qualities_num">
                  01
                </div>

                <div className="qualities_title_info">
                  <p className='qualities_title'>Качества</p>
                  <div className="qualities_info">
                    <p>Равным образом реализация намеченных плановых заданий</p>
                    <p>широкому кругу (специалистов) участие в формировании вилла в</p>
                    <p>лесу</p>
                  </div>
                </div>
              </div>

              <div className="about_creativity">
                <div className="creativity_num">
                  02
                </div>
                <div className="creativity_title_info">
                  <p className='creativity_title'>Креативность</p>
                  <div className="creativity_info">
                    <p>Значимость этих проблем настолько очевидна, что</p>
                    <p> реализация намеченных плановых заданий</p>
                  </div>
                </div>
              </div>

              <div className="about_modernity">
                <div className="modernity_num">
                  03
                </div>
                <div className="modernity_title_info">
                  <p className='modernity_title'>Современность</p>
                  <div className="modernity_info">
                    <p>Значимость этих проблем настолько очевидна, что реализация </p>
                    <p>намеченных плановых заданий играет важную роль в</p>
                    <p>формировании позиций</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about_left">
              <div className="about_left_img">
                <img src={about} alt="" />
                <span className='gocircle'><GoCircle /></span>
                <span className='faplay'><FaPlay /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About