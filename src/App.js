import './App.scss';
import {Routes,Route,useLocation} from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import particle from "./utils/particle";
import {useCallback} from 'react';


function App() {

        const location = useLocation();
        console.log(location);

        const showParticleJsInHomePage = location.pathname === "/";

    const particlesInit = useCallback(async (main)=>{
      //console.log(main);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
    }, []);
    const particlesLoaded =useCallback( async container => {
      await console.log(container);
  }, []);
  

    
  return (
    <div className="App">
      {/* particles js */}
       
      {
        showParticleJsInHomePage && 
        <Particles id="tsparticles" init={particlesInit}  options={particle} loaded={particlesLoaded} />
      }
      {/* navbar */}
        <Navbar />
      {/* main page content */}
        {/* <About headerText="About Me" icon="fas fa-user-circle" />
        <Resume headerText="My Resume" icon = "fas fa-file-alt" />
        <Portfolio headerText="My Portfolio" icon = "fas fa-folder-open" />
        <Skills headerText="My Skills" icon = "fas fa-graduation-cap" />
        <Contact headerText="Contact Me" icon = "fas fa-envelope" /> */}
      {/* routings */}
       <div className="App__main-page-content">
       <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       </div>
    </div>
  );
}

export default App;
