import '../projects_show/projects_show.css'

import img1 from '../../assets/projects_bg/projects_bg2.png'

const Projects_show = () => {
    return (
        <>
            <div className="projects_show">
                <div className="container">
                    <div className="projects_show_main">

                        <div className="projects_show_right">
                            <div className="projects_show_right_title">
                                <p>
                                    Главная - Проекты - Котеж в краснодаре
                                </p>
                            </div>
                            <div className="projects_show_right_subtitle">
                                <p>котеж в краснодаре</p>
                            </div>
                            <div className="products_show_info">
                                <p>Равным образом реализация намеченных плановых</p>
                                <p>заданий широкому кругу (специалистов) участи</p>
                                <p> кругу (специалистов) участи</p>
                            </div>
                            <div className="products_show_btn">
                                <button>Связаться с нами</button>
                            </div>
                            <div className="projects_show_page_count">
                                <p className='carusel_count_left'>01 /</p> <p className='carusel_count_right'>04</p>
                            </div>
                        </div>

                        <div className="projects_show_left">
                            <div className="projects_show_left_bg">
                                <img src={img1} alt="" />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects_show