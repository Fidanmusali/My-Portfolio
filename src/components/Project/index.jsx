import React, { useContext } from 'react'
import "./style.css"
import LanguageContext from '../../assets/Language'
import { Link } from 'react-router-dom'
import p1 from "../../../public/img/p2.png"
import p2 from "../../../public/img/p1.png"
import p3 from "../../../public/img/r.png"



const Project = () => {
    const { language } = useContext(LanguageContext)

    const lang1 = {
        en: "Projects",
        az: "Layihələr",
        ru: "Проекты"
    }

    return (
        <div className='project'>
            <h2>{lang1[language]}</h2>
            <div className="project-grp">

            <div className="pro1">
                    <div className="pro-img">
                        <img src={p1} alt="" />
                    </div>
                    <div className="pro-info">
                        <h3>Pam Consulting</h3>
                    </div>
                    <Link to="https://github.com/Fidanmusali/Pam-Consuling">
                    <button className='click-pro'>Lunch</button>
                    </Link>
                </div>

                <div className="pro1">
                    <div className="pro-img1">
                        <img src={p3} alt="" />
                    </div>
                    <div className="pro-info">
                        <h3>Radio</h3>
                    </div>
                    <Link to="https://github.com/Fidanmusali/Radio">
                    <button className='click-pro'>Lunch</button>
                    </Link>
                </div>

                <div className="pro1">
                    <div className="pro-img1">
                        <img src={p2} alt="" />
                    </div>
                    <div className="pro-info">
                        <h3>Marinex</h3>
                    </div>
                    <Link to="https://github.com/Fidanmusali/Projects/tree/main/Marinex">
                    <button className='click-pro'>Lunch</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project