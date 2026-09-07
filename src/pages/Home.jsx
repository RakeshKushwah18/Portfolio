import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Journey from '../components/sections/Journey';
import Contact from '../components/sections/Contact';
import Certifications from '../components/sections/Certifications';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications/>
      <Journey />
      <Contact />
    </>
  );
}
