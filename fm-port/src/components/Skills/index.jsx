import React, { useContext } from 'react'
import './style.css'
import LanguageContext from '../../assets/Language'
import html from '../../../public/img/Html.png'
import css from '../../../public/img/css.png'
import js from '../../../public/img/js.png'
import nextjs from '../../../public/img/nextjs.png'
import redux from '../../../public/img/redux.png'
import figma from '../../../public/img/figma.png'
import mui from '../../../public/img/mui.png'
import react from '../../../public/img/react.png'
import tailwind from '../../../public/img/tailwind.png'
const lang1 = {
    en: "Skills",
    az: "Bacarıqlar",
    ru: "Навыки"
}
const Skills = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className="skills">
            <div className="skills-btn">
            <h2>{lang1[language]}</h2>

                <div className="skill1">
                    <div className="s1">
                        <img src={html} alt="" />
                        <p>HTML</p>
                    </div>
                    <div className="s1">
                        <img src={css} alt="" />
                        <p>CSS</p>
                    </div>
                    <div className="s1">
                        <img src={js} alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div className="s1">
                        <img src={react} alt="" />
                        <p>React</p>
                    </div>
                </div>

                <div className="skill1">
                    <div className="s1">
                        <img src={nextjs} alt="" />
                        <p>Next Js</p>
                    </div>
                    <div className="s1">
                        <img src={figma} alt="" />
                        <p>Figma</p>
                    </div>
                    <div className="s1">
                        <img src={mui} alt="" />
                        <p>MUI</p>
                    </div>
                </div>
                <div className="skill1">
                    <div className="s1">
                        <img src={redux} alt="" />
                        <p>Redux Toolkit</p>
                    </div>
                    <div className="s1">
                        <img src={tailwind} alt="" />
                        <p>Tailwind CSS</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Skills