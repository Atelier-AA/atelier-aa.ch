import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Properties from './components/Properties';
import WhyUs from './components/WhyUs';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Properties />
        <WhyUs />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
