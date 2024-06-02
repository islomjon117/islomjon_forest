import '../partners/partners.css'

import img1 from '../../assets/partners_logo/logo8.png'
import img2 from '../../assets/partners_logo/logo7.png'
import img3 from '../../assets/partners_logo/logo6.png'
import img4 from '../../assets/partners_logo/logo5.png'
import img5 from '../../assets/partners_logo/logo1.png'
import img6 from '../../assets/partners_logo/logo2.png'
import img7 from '../../assets/partners_logo/logo3.png'
import img8 from '../../assets/partners_logo/logo4.png'

const Partners = () => {
  return (
    <>
      <div className="partners">
        <div className="container">
          <div className="partners_main">

            <div className="partners_title">
              <p>
                ПАРТНЕРЫ
              </p>
            </div>

            <div className="partners_subtitle">
              <p>наши партнеры</p>
            </div>

            <div className="partners_logo">
              <div className="pertners_logo_bottom">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
              <br />
              <div className="pertners_logo_top">
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners