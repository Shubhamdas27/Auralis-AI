import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import BrandsMarquee from './components/BrandsMarquee';
import BookCall from './components/BookCall';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-aurum-dark">
      <Header />
      <Hero />
      <Services />
      <Process />
       <BrandsMarquee /> 
       <Pricing />
       <BookCall />
      <Testimonials />
      <FAQ />
      <About />
      <Footer />
    </div>
  );
}

export default App;