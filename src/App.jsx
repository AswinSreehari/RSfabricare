import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Services from './components/Services';
// import Footer from './components/Footer';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDark = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen w-full flex flex-col items-center bg-slate-50 dark:bg-gray-950 transition-colors duration-500 overflow-x-hidden">
        {/* Constraining the entire site to a centered column (except background) */}
        <div className="w-full max-w-5xl mx-auto">
          <Navbar darkMode={darkMode} toggleDark={toggleDark} />
          <Hero />
          {/* <Services /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
