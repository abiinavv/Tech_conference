import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import SpeakerSection from './components/SpeakerSection';
import TimelinePage from './pages/TimelinePage';

function App() {
  return (
    <Router>
      {/* Navbar is placed here, outside of the Routes */}
      <Navbar /> 

      {/* Content of the page changes based on the route */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <Sponsors />
              <SpeakerSection />
              <ContactSection />
              <Footer />
            </>
          } 
        />
        <Route path="/timeline" element={<TimelinePage />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
