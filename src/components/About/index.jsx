import React, { useContext } from 'react'
import "./style.css"
import profile from "../../../public/img/p.jpg"
import LanguageContext from '../../assets/Language'

const About = () => {
    const { language } = useContext(LanguageContext)

    const lang1 = {
        ru: 'ПРИВЕТ, Я',
        en: "HI THERE I'M",
        az: 'SALAM MEN'
    };

    const lang2 = {
        en: " I'm a Jr front-end developer.",
        az: 'Mən Jr front-end developerəm.',
        ru: "Я Jr фронтенд-разработчик."
    };

    const lang3 = {
        az: 'Fidan Musali',
        en: "Fidan Musali",
        ru: "Фидан Мусали"
    };
    const lang6 = {
        en: "I am passionate about learning and staying up-to-date with the latest technologies",
        ru: "Я люблю учиться и быть в курсе новейших технологий.",
        az: "Mən öyrənməyə və ən son texnologiyalardan xəbərdar olmağa həvəsliyəm"
    }
    const lang8 = {
        en: "I’m dedicated to continuous improvement and personal growth.",
        ru: "Я нацелен на постоянное совершенствование и личностный рост.",
        az: "Mən davamlı inkişafa və şəxsi inkişafa sadiqəm."
    }
    const lang9 = {
        en: "Download resume",
        ru: "Скачать резюме",
        az: "CV-ni yükləyin"
    }
    return (
        <div className='about'>
            <main>
                <div className="profile-img">
                    <img src={profile} alt="" />
                </div>
                <div className="info">
                    <p>{lang1[language]}</p>
                    <h2>{lang3[language]}</h2>
                    <p>{lang2[language]}</p>
                    <p>{lang6[language]}</p>
                    {/* <p>{lang8[language]}</p> */}
                    <div className="cv">
                        <button className='a'>
                            <a href="../../../public/fidan.pdf">{lang9[language]}</a>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About