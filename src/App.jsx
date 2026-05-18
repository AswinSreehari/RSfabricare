import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Process from './components/Process/Process';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Process />
      </main>

      <Footer />
    </div>
  );
}

export default App;
