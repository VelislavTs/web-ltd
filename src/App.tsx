import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Process from './components/Process';
import Pricing from './components/Pricing';
import NonProfit from './components/NonProfit';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Process />
      <Pricing />
      <NonProfit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
