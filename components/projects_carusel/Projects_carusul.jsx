import { Swiper, SwiperSlide } from 'swiper/react';
import '../projects_carusel/projectscarusel.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import img1 from '../../assets/carusel_img/img1.png'
import img2 from '../../assets/carusel_img/img2.png'
import img3 from '../../assets/carusel_img/img3.png'
import img4 from '../../assets/carusel_img/img3.png'

import { MdArrowForwardIos } from "react-icons/md";

const Projects_carusul = () => {
    return (
        <div className="projects_carusel">
            <div className='container'>
                <div className="projects_carusel_main">

                    <div className="projects_carusel_title">
                        <p>Проекты</p>
                    </div>
                    <div className="projects_carusel_subtitle">
                        <p>проекты компании</p>
                    </div>

                    <div className="carusel_imgs">
                        <Swiper
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                375: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            scrollbar={true}
                            loop={true}
                            navigation={true}
                            slidesPerView={3}
                            className="mySwiper"
                            modules={[Navigation, Pagination, Scrollbar]} // Scrollbar ni ham qo'shing
                            onSwiper={(swiper) => {
                                swiper.on('paginationClick', function () {
                                    swiper.slideTo(swiper.clickedIndex);
                                });
                            }}
                        >
                            <SwiperSlide>
                                <div className="swiper-zoom-container carusel_img">
                                    <img src={img1} alt="nature-1" />
                                </div>
                                <button className='carusel_img_btn'>лесный дом в Новосибирске <p className='arrow_btn_icon'><MdArrowForwardIos /></p></button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-zoom-container carusel_img">
                                    <img src={img2} alt="nature-2" />
                                </div>
                                <button className='carusel_img_btn'>лесный дом в Новосибирске <p className='arrow_btn_icon'><MdArrowForwardIos /></p></button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-zoom-container carusel_img">
                                    <img src={img3} alt="nature-3" />
                                </div>
                                <button className='carusel_img_btn'>лесный дом в Новосибирске <p className='arrow_btn_icon'><MdArrowForwardIos /></p></button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-zoom-container carusel_img">
                                    <img src={img4} alt="nature-4" />
                                </div>
                                <button className='carusel_img_btn'>лесный дом в Новосибирске <p className='arrow_btn_icon'><MdArrowForwardIos /></p></button>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects_carusul;
