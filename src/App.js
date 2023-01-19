import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Awards from './Components/Awards/Awards';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='relative mx-auto max-w-4xl xl:max-w-6xl'>
     <Hero />
     <About />
     <Projects />
     <Skills />
     <Awards />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
