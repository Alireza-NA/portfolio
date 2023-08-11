// import { Routes , Route , Navigate } from 'react-router-dom';
import Home from './components/Home';
// Components
import Navbar from './components/Navbar';
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path='/skills' element={<Skills />}/>
      </Routes> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
