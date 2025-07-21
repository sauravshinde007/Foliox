import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResumeBuilder from './pages/ResumeBuilder';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { ResumeProvider } from './context/ResumeContext';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/resume/:templateId" 
              element={
                <ResumeProvider>
                  <ResumeBuilder />
                </ResumeProvider>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
