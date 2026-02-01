import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import NonProfit from '../components/NonProfit';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Pricing />
      <NonProfit />
      <Contact />
    </>
  );
}
