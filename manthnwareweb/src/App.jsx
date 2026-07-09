import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import ResultSection from "./components/home/ResultSection";
import HowToGuide from "./components/home/HowToGuide";
import About from "./components/home/About";
import Features from "./components/home/Features";
import DiscoverMore from "./components/home/DiscoverMore";
import Contact from "./components/home/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ResultSection />
      <HowToGuide />
      <About />
      <Features />
      <DiscoverMore />
      <Contact />
      <Footer />
    </>
  );
}

export default App;