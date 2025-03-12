import React, { useContext, useRef, useState } from 'react';
import './App.css';
import prof from "../public/img/fidanp.jpg"
import bdu from "../public/img/bdu.png"
import html from "../public/img/Html.png"
import css from "../public/img/css.png"
import github from "../public/img/github.jpg"
import figma from "../public/img/figma.png"
import js from "../public/img/js.png"
import expressjs from "../public/img/expressjs.png"
import node from "../public/img/node.png"
import react from "../public/img/react.png"
import redux from "../public/img/redux.png"
import tailwind from "../public/img/tailwind.png"
import next from "../public/img/nextjs.png"
import mui from "../public/img/mui.png"
import mongo from "../public/img/mongo.png"
import marinex from "../public/img/marinex.png"
import radio from "../public/img/radio.png"
import pam from "../public/img/pam.png"
import ch from "../public/img/ch.jpg"
import jet from "../public/img//jet.png"
import bfc from "../public/img/bfc.jpg"
import sat from "../public/img/sat.png"



import LanguageContext, { LanguageSwicher } from './assets/Lang';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
        setStatusMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      setStatusMessage('There was an error sending your message. Please try again.');
    }
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
    az: "Mən bacarıqlarımı genişləndirmək üçün fəal şəkildə yeni problemlər və imkanlar axtarıram və daha yaxşı inkişaf etdirici olmaq üçün həmişə rəylərə açıqam.",
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
  const lang27 = {
    az: "Bacarıqlar",
    ru: "Навыки",
    en: "Skills"
  }
  const lang28 = {
    az: "Mən çoxlu təcrübə və bacarıqlar əldə etmişəm, məsələn:",
    ru: "Я приобрел большой опыт и навыки, такие как:",
    en: "I have gained a lot of experience and skills, such as:"
  }
  const lang29 = {
    az: "Bacarıqlar",
    ru: "Навыки",
    en: "Skills"
  }
  const lang30 = {
    az: "Bacarıqlar",
    ru: "Навыки",
    en: "Skills"
  }
  const lang31 = {
    az: "Bacarıqlar",
    ru: "Навыки",
    en: "Skills"
  }
  const lang32 = {
    en: "Projects",
    az: "Layihələr",
    ru: "Проекты"
  }
  const lang33 = {
    en: "Contact Us",
    az: "Bizimlə əlaqə saxlayın",
    ru: "Связаться с нами"
  }
  const lang34 = {
    en: "We would love to hear from you! Feel free to reach out with any questions or feedback.",
    az: "Fikrinizi eşitmək istərdik! Suallarınız və ya rəyiniz üçün bizimlə əlaqə saxlamaqdan çekinmeyin.",
    ru: "Мы хотели бы услышать ваше мнение! Не стесняйтесь обращаться к нам с любыми вопросами или отзывами."
  }
  const lang35 = {
    en: "Your Name",
    az: "Adınız",
    ru: "Ваше имя"
  }
  const lang36 = {
    en: "Your Email",
    az: "E-poçtunuz",
    ru: "Ваш адрес электронной почты"
  }
  const lang37 = {
    en: "Your Message",
    az: "Mesajınız",
    ru: "Ваше сообщение"
  }
  const lang38 = {
    en: "Submit",
    az: "Təqdim et",
    ru: "подавать"
  }
  const lang39={
    en:"Keep in touch",
    az:"Əlaqə saxlayın",
    ru:"Поддерживать связь"
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
        <div className="cv">
          <a href="/public/cv/Fidan Cv Eng.pdf">CV</a>
        </div>
      </nav>
      <div className="sect">
        <div ref={homeRef} ></div>
        <div ref={aboutRef} className='about' >
          <div className="about1">
            <div className="p1">
              <h2>{lang1[language]}</h2>
              <img src={prof} alt="" />
            </div>
            <div className="p2">
              <h4>{lang39[language]}</h4>
              <div className="p2-gr">
                <Link className='a' to="https://github.com/Fidanmusali"><li>Github: <span color='red'>Fidanmusali</span></li></Link>
                <Link className='a' to="mailto:fidanmusali05@gmail.com"><li>Mail: <span color='red'>fidanmusali05@gmail.com</span></li></Link>
              </div>
            </div>
          </div>
          <div className="about2">
            <h3>Fidan Musali</h3>
            <p>{lang2[language]}</p>
            <br />
            <div className="p-group">
              <div className="pg">
                <p><li>{lang3[language]}</li></p>
                <p><li>{lang4[language]}</li></p>
                <p><li>{lang5[language]}</li></p>
                <p><li>{lang6[language]}</li></p>
                <p><li>{lang7[language]}</li></p>
              </div>

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
              <img className='logoimg' src={jet} alt="" />
            </div>

            <div className="edu1">
              <div className="e-info">
                <h4>{lang19[language]}</h4>
                <p>{lang20[language]}</p>
              </div>
              <img className='logoimg' src={jet} alt="" />
            </div>

            <div className="edu1">
              <div className="e-info">
                <h4>{lang21[language]}</h4>
                <p>{lang22[language]}</p>
              </div>
              <img className='logoimg' src={jet} alt="" />
            </div>

            <p className='other'>{lang23[language]}</p>
            <div className="edu1">
              <div className="e-info">
                <h4>BFC</h4>
                <p>{lang26[language]}</p>
              </div>
              <img className='logoimg' src={bfc} alt="" />
            </div>

            <div className="edu1">
              <div className="e-info">
                <h4>Sat Group</h4>
                <p>{lang24[language]}</p>
              </div>
              <img className='logoimg' src={sat} alt="" />
            </div>

            <div className="edu1">
              <div className="e-info">
                <h4>Sat Group</h4>
                <p>{lang25[language]}</p>
              </div>
              <img className='logoimg' src={sat} alt="" />
            </div>

          </div>
        </div>
        <div ref={skillsRef} className='skills' >
          <h2 className='skill-h2'>{lang27[language]}</h2>
          <p className='skill-p'>{lang28[language]}</p>
          <div className="skill-grp">

            <div className="s-g1">
              <img src={html} alt="" />
              <p>Html</p>
            </div>

            <div className="s-g1">
              <img src={css} alt="" />
              <p>Css</p>
            </div>

            <div className="s-g1">
              <img src={js} alt="" />
              <p>JavaScript</p>
            </div>

            <div className="s-g1">
              <img src={react} alt="" />
              <p>React</p>
            </div>

            <div className="s-g1">
              <img src={next} alt="" />
              <p>Next Js</p>
            </div>

            <div className="s-g1">
              <img src={mui} alt="" />
              <p>Mui</p>
            </div>

            <div className="s-g1">
              <img src={tailwind} alt="" />
              <p>Tailwind</p>
            </div>

            <div className="s-g1">
              <img src={node} alt="" />
              <p>Node Js</p>
            </div>

            <div className="s-g1">
              <img src={expressjs} alt="" />
              <p>Express Js</p>
            </div>

            <div className="s-g1">
              <img src={redux} alt="" />
              <p>Redux Tollkit</p>
            </div>

            <div className="s-g1">
              <img src={mongo} alt="" />
              <p>Mongo DB</p>
            </div>

            <div className="s-g1">
              <img src={github} alt="" />
              <p>Github</p>
            </div>

          </div>
        </div>
        <div ref={projectRef} className='project'>
          <h2>{lang32[language]}</h2>
          <div className="project-grp">

            <div className="pro1">
              <div className="pro-img">
                <img src={pam} alt="" />
              </div>
              <div className="pro-info">
                <h3>Pam Consulting</h3>
              </div>
              <Link to="https://github.com/Fidanmusali/Pam-Consuling">
                <button className='click-pro'>Lunch</button>
              </Link>
            </div>

            <div className="pro1">
              <div className="pro-img">
                <img src={radio} alt="" />
              </div>
              <div className="pro-info">
                <h3>Radio</h3>
              </div>
              <Link to="https://github.com/Fidanmusali/Radio">
                <button className='click-pro'>Lunch</button>
              </Link>
            </div>

            <div className="pro1">
              <div className="pro-img">
                <img src={marinex} alt="" />
              </div>
              <div className="pro-info">
                <h3>Marinex</h3>
              </div>
              <Link to="https://github.com/Fidanmusali/Projects/tree/main/Marinex">
                <button className='click-pro'>Lunch</button>
              </Link>
            </div>

            <div className="pro1">
              <div className="pro-img">
                <img src={ch} alt="" />
              </div>
              <div className="pro-info">
                <h3>Chic Harmony</h3>
              </div>
              <Link to="https://github.com/Fidanmusali/Chic-Harmony">
                <button className='click-pro a'>Lunch</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="cs">
          <div ref={contactRef} className='contact-section' >
            <h2>{lang33[language]}</h2>
            <p>{lang34[language]}</p>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{lang35[language]}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={lang35[language]}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{lang36[language]}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={lang36[language]}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{lang37[language]}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={lang37[language]}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">{lang38[language]}</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
