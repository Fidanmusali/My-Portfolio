import React, { useContext, useRef } from 'react';
import './App.css';
import prof from "../public/img/1.jpg"
import bdu from "../public/img/bdu.png"

import LanguageContext, { LanguageSwicher } from './assets/Lang';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const targetPosition = ref.current.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second
    let start = null;

    const animationScroll = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animationScroll);
  };

  const { language } = useContext(LanguageContext);
  const lang1 = {
    az: 'Haqqımda',
    en: 'About Me',
    ru: "Обо мне"
  }

  const lang2 = {
    az: "MERN Full-stack Proqramist",
    ru: "MERN Full-stack Pазработчик",
    en: "MERN Full-stack Developer"
  }

  const lang3 = {
    en: "I am Fidan Musali. I'm 19. I'm a Jr MERN Full-stack Developer.",
    az: "Mən Fidan Musalı. Mənim 19 yaşım var. Mən MERN Full-stack Proqramistəm",
    ru: "Я Фидан Мусали. Мне 19. Я JR MERN Full-stack Pазработчик."
  }

  const lang4 = {
    en: "I am passionate about learning and staying up-to-date with the latest technologies",
    ru: "Я люблю учиться и быть в курсе новейших технологий.",
    az: "Mən öyrənməyə və ən son texnologiyalardan xəbərdar olmağa həvəsliyəm"
  }

  const lang5 = {
    en: "I’m always exploring new frameworks, tools, and programming languages to enhance my skill set and apply cutting-edge solutions to my projects.",
    az: "Mən öz bacarıqlarımı artırmaq və layihələrimə qabaqcıl həllər tətbiq etmək üçün həmişə yeni çərçivələr, alətlər və proqramlaşdırma dillərini araşdırıram.",
    ru: "Я постоянно изучаю новые платформы, инструменты и языки программирования, чтобы улучшить свои навыки и применять передовые решения в своих проектах."
  }

  const lang6 = {
    en: "I’m dedicated to continuous improvement and personal growth.",
    ru: "Я нацелен на постоянное совершенствование и личностный рост.",
    az: "Mən davamlı inkişafa və şəxsi inkişafa sadiqəm."
  }

  const lang7 = {
    en: "I actively seek out new challenges and opportunities to expand my skills, and I’m always open to feedback to become a better developer.",
    az: "Mən bacarıqlarımı genişləndirmək üçün fəal şəkildə yeni problemlər və imkanlar axtarıram və daha yaxşı inkişaf etdirici olmaq üçün həmişə rəylərə açıram.",
    ru: "Я активно ищу новые задачи и возможности для расширения своих навыков и всегда открыт для обратной связи, чтобы стать лучшим разработчиком."
  }

  const lang8 = {
    az: "Ana Səhifə",
    ru: "Главная",
    en: "Home"
  }

  const lang9 = {
    az: 'Haqqımda',
    en: 'About Me',
    ru: "Обо мне"
  }

  const lang10 = {
    az: "Bacarıqlar",
    ru: "Навыки",
    en: "Skills"
  }

  const lang11 = {
    az: "Layihə",
    ru: "Проект",
    en: "Project"
  }

  const lang12 = {
    az: "Təhsil",
    ru: "Образование",
    en: "Education"
  }

  const lang13 = {
    az: "Əlaqə",
    ru: "Контакт",
    en: "Contact"
  }

  const lang14 = {
    en: "Baku State University",
    az: "Bakı Dövlət Universiteti",
    ru: "Бакинский Государственный Университет"
  }

  const lang16 = {
    en: "Computer Science ",
    az: "Kompüter elmləri ",
    ru: 'Информатика'
  }
  const lang17 = {
    az: "Jet Academy",
    ru: "Jet Academy",
    en: "Jet Academy"
  }
  const lang18 = {
    az: "Frontend Developer",
    ru: "Фронтенд-разработчик",
    en: "Frontend Developer"
  }
  const lang19 = {
    az: "Jet Academy",
    ru: "Jet Academy",
    en: "Jet Academy"
  }
  const lang20 = {
    az: "MERN Full-stack Developer",
    ru: "MERN Full-stack Pазработчик",
    en: "MERN Full-stack Developer"
  }
  const lang21 = {
    az: "Jet Academy",
    ru: "Jet Academy",
    en: "Jet Academy "
  }
  const lang22 = {
    az: "Frontend Developer (təcrübə)",
    ru: "Фронтенд-разработчик (практика)",
    en: "Frontend Developer (practice)"
  }
  const lang23 = {
    en: "other",
    ru: "другой",
    az: "digər"
  }
  const lang24 = {
    en: "Professional Sales Course",
    ru: "Профессиональные продажи Курс",
    az: "Peşəkar Satış Kursu"
  }
  const lang25 = {
    en: "Professional Management Course",
    ru: "Курс профессионального менеджмента",
    az: "Peşəkar İdarəetmə Kursu"
  }
  const lang26 = {
    az: "Ingilis dili (B2)",
    ru: "Aнглийский (B2)",
    en: "English (B2)"
  }
  return (
    <div className='port'>
      <nav>
        <h1>Fidan Musali</h1>
        <button onClick={() => scrollToSection(homeRef)}>{lang8[language]}</button>
        <button onClick={() => scrollToSection(aboutRef)}>{lang9[language]}</button>
        <button onClick={() => scrollToSection(educationRef)}>{lang12[language]}</button>
        <button onClick={() => scrollToSection(skillsRef)}>{lang10[language]}</button>
        <button onClick={() => scrollToSection(projectRef)}>{lang11[language]}</button>
        <button onClick={() => scrollToSection(contactRef)}>{lang13[language]}</button>
        <div className="l-b">
          <LanguageSwicher />
        </div>
      </nav>
      <div className="sect">
        <div ref={homeRef} ></div>
        <div ref={aboutRef} className='about' >
          <div className="about1">
            <h2>{lang1[language]}</h2>
            <img src={prof} alt="" />
          </div>
          <div className="about2">
            <h3>Fidan Musali</h3>
            <p>{lang2[language]}</p>
            <br />
            <div className="p-group">
              <p><li>{lang3[language]}</li></p>
              <p><li>{lang4[language]}</li></p>
              <p><li>{lang5[language]}</li></p>
              <p><li>{lang6[language]}</li></p>
              <p><li>{lang7[language]}</li></p>
            </div>

          </div>
        </div>
        <div ref={educationRef} className='education'>
          <h2>{lang12[language]}</h2>
          <div className="edu-grp">

            <div className="edu1">
              <div className="e-info">
                <h4>{lang14[language]}</h4>
                <p>{lang16[language]}</p>
              </div>
              <img className='logoimg' src={bdu} alt="" />
            </div>

            <div className="edu1">
              <div className="e-info">
                <h4>{lang17[language]}</h4>
                <p>{lang18[language]}</p>
              </div>
              <img className='logoimg' src={bdu} alt="" />
            </div>

            <div className="edu1">
              <div className="e-info">
                <h4>{lang19[language]}</h4>
                <p>{lang20[language]}</p>
              </div>
              <img className='logoimg' src={bdu} alt="" />
            </div>

            <div className="edu1">
              <div className="e-info">
                <h4>{lang21[language]}</h4>
                <p>{lang22[language]}</p>
              </div>
              <img className='logoimg' src={bdu} alt="" />
            </div>

            <p className='other'>{lang23[language]}</p>
            <div className="edu1">
              <div className="e-info">
                <h4>BFC</h4>
                <p>{lang26[language]}</p>
              </div>
              <img className='logoimg' src={bdu} alt="" />
            </div>

            <div className="edu1">
              <div className="e-info">
                <h4>Sat Group</h4>
                <p>{lang24[language]}</p>
              </div>
              <img className='logoimg' src={bdu} alt="" />
            </div>

            <div className="edu1">
              <div className="e-info">
                <h4>Sat Group</h4>
                <p>{lang25[language]}</p>
              </div>
              <img className='logoimg' src={bdu} alt="" />
            </div>

          </div>
        </div>
        <div ref={skillsRef} className='skills' ></div>
        <div ref={projectRef} >Projects Section</div>
        <div ref={contactRef} >Contact Section</div>
      </div>
    </div>
  );
}

export default App;
