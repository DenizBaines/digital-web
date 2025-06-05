import './App.css';
import Digital from './components/digital/Digital';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import OurIdeology from './components/ourideology/OurIdeology';
import Services from './components/services/Services';
import Privacy from './components/privacy/Privacy';
import Career from './components/career/Career';
import Terms from './components/terms/Terms';

function App() {
  return (
    <Router> {/* ✅ ONLY ONE Router */}
      <Navbar />
      <div className="App">
       
        <div className="content">
          <Routes>
            <Route path="/" element={<Digital />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourideology" element={<OurIdeology />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/career" element={<Career />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


