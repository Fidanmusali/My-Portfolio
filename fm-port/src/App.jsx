
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Navbar from './components/Layout/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />
      <div className="about-contact">
        <div className="main-about-contact">
          <About />
          <Contact />
        </div>
      </div>
      <div className="skill-edu">
        <div className="skill-pro">
          <Skills />
          <Project />
        </div>
        <Education />

      </div>


    </>
  )
}

export default App
