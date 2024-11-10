import React, { useContext } from 'react'
import bdu from '../../../public/img/bdu.png'
import sat from '../../../public/img/sat.jpg'
import bfc from '../../../public/img/bfc.jpg'
import jet from '../../../public/img/jed.png'
import "./style.css"


import LanguageContext from '../../assets/Language'

const Education = () => {
    const { language } = useContext(LanguageContext);

    const lang1 = {
        en: "Baku State University",
        az: "Bakı Dövlət Universiteti",
        ru: "Бакинский Государственный Университет"
    }

    const lang2 = {
        ru: "Информатика",
        az: "Kompüter Elmləri",
        en: "Computer Science"
    }

    const lang3 = {
        ru: "Frontend (практика)",
        en: "Frontend (practice)",
        az: "Frontend (təcrübə)"
    }
    const lang4 = {
        az: "Digərləri",
        en: "Others",
        ru: "Другие"
    }

    const lang5 = {
        az: "Peşəkar Satış",
        en: "Professional Sales",
        ru: "Профессиональные продажи"
    }

    const lang6 = {
        az: "Peşəkar Idarəçilik",
        ru: "Профессиональный менеджмент",
        en: "Professional Management"
    }

    const lang0 = {
        en: "Education",
        az: "Təhsil",
        ru: "Образование"
    }
    const lang7 = {
        en: "English (B2)",
        ru: "английский (B2)",
        az: "İngilis (B2)"

    }
    return (
        <div className='education'>
            <div className="education-grp">
                <h2>{lang0[language]}</h2>

                <div className="edu1">
                    <div className="edu-img">
                        <img src={bdu} alt="" />
                    </div>
                    <div className="edu-info">
                        <h3>{lang1[language]}</h3>
                        <p>{lang2[language]}</p>
                    </div>
                </div>

                <div className="edu1">
                    <div className="edu-img">
                        <img src={jet} alt="" />
                    </div>
                    <div className="edu-info">
                        <h3>Jet Academy</h3>
                        <p>Frontend</p>
                    </div>
                </div>

                <div className="edu1">
                    <div className="edu-img">
                        <img src={jet} alt="" />
                    </div>
                    <div className="edu-info">
                        <h3>Jet Academy</h3>
                        <p>{lang3[language]}</p>
                    </div>
                </div>


                <h2>{lang4[language]}</h2>

                <div className="edu1">
                    <div className="edu-img">
                        <img src={bfc} alt="" />
                    </div>
                    <div className="edu-info">
                        <h3>BFC</h3>
                        <p>{lang7[language]}</p>
                    </div>
                </div>

                <div className="edu1">
                    <div className="edu-img">
                        <img src={sat} alt="" />
                    </div>
                    <div className="edu-info">
                        <h3>Sat Group</h3>
                        <p>{lang5[language]}</p>
                    </div>
                </div>

                <div className="edu1">
                    <div className="edu-img">
                        <img src={sat} alt="" />
                    </div>
                    <div className="edu-info">
                        <h3>Sat Group</h3>
                        <p>{lang6[language]}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education