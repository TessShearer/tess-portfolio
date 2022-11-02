import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [selectedSection, setSelectedSection] = useState("About Me")

  return (
    <div>
     <header className="header">
            <h1>
                Tess Shearer
            </h1>
            <nav>
                <ul>
                    <li className={(selectedSection)==="About Me"?"selected navLink":"navLink"} onClick={() => setSelectedSection("About Me")}>
                        About Me
                    </li>
                    <li className={(selectedSection)==="Portfolio"?"selected navLink":"navLink"} onClick={() => setSelectedSection("Portfolio")}>
                        Portfolio
                    </li>
                    <li className={(selectedSection)==="Resume"?"selected navLink":"navLink"} onClick={() => setSelectedSection("Resume")}>
                        Resume
                    </li>
                    {/* <li className={(selectedSection)==="Contact"?"selected navLink":"navLink"} onClick={() => setSelectedSection("Contact")}>
                        Contact Me
                    </li> */}
                </ul>
            </nav>
        </header>
      <section className="App">
        <main>
          {selectedSection === "About Me" && <About></About>}
          {selectedSection === "Portfolio" && <Portfolio></Portfolio>}
          {selectedSection === "Resume" && <Resume></Resume>}
          {/* {selectedSection === "Contact" && <Contact></Contact>} */}
        </main>
      </section>
      <section className="footer">
<a href="https://github.com/TessShearer">GitHub</a>
<a href="https://www.linkedin.com/in/tess-shearer-a343b2232/">LinkedIn</a>
<a href="https://stackoverflow.com/users/18235820/tess-shearer?tab=profile">Stack Overflow</a>
      </section>
    </div>
  );
}

export default App;
