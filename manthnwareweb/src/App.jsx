import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import ResultSection from "./components/home/ResultSection";
import HowToGuide from "./components/home/HowToGuide";
import About from "./components/home/About";
import Features from "./components/home/Features";
import DiscoverMore from "./components/home/DiscoverMore";
import Contact from "./components/home/Contact";

import StudentLogin from "./components/pages/login/studentlogin";
import SchoolLogin from "./components/pages/login/schoollogin";
import CoordinatorLogin from "./components/pages/login/coordinator";

import Vision from "./components/pages/about/Vision";
import Values from "./components/pages/about/Values";

function Home() {
  return (
    <>
      <Hero />
      <ResultSection />
      <HowToGuide />
      <About />
      <Features />
      <DiscoverMore />
      <Contact />
      
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/schoollogin" element={<SchoolLogin />} />
        <Route path="/coordinatorlogin" element={<CoordinatorLogin />} />

        <Route path="/Vision" element={<Vision />} />
        <Route path="/Values" element={<Values />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;