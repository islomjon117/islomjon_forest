import '../header/header.css'

import left_img from '../../assets/header_bg/left_img.png'

import { GoCircle } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header_main">

          <div className="headar_section">
            <div className="header_left">
              <div className="header_title">
                <p className='header_title1 '>посреди <b style={{ fontWeight: '400', color: '#86DA44' }}>леса</b></p>
                <p className='header_title2'>далеко от шума</p>
              </div>

              <div className="header_text">
                <p>Равным образом реализация намеченных плановых заданий</p>
                <p>широкому кругу (специалистов) участие в формировании</p>
              </div>

              <div className="header_btn">
                <button>Связаться с нами</button>
              </div>
            </div>

            <div className="play_video_icon">
              <div className="circle">
                <GoCircle />
              </div>
              <div className="play_vd">
                <FaPlay />
              </div>
            </div>

          </div>

          <div className="header_top container">
            <div className="header_carusel_count">
              <p className='carusel_count_left'>01 /</p><p className='carusel_count_right'>04</p>
            </div>

            <div className="header_top_left_img">
              <img src={left_img} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header