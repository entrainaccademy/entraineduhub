import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { HomeView } from './components/HomeView.jsx';
import { AboutView } from './components/AboutView.jsx';
import { AcademyView } from './components/AcademyView.jsx';
import { LabView } from './components/LabView.jsx';
import { GrowthLabView } from './components/GrowthLabView.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
  const [activeView, setActiveView] = useState('home');

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onNavigate={setActiveView} />;
      case 'about':
        return <AboutView onNavigate={setActiveView} />;
      case 'academy':
        return <AcademyView onNavigate={setActiveView} />;
      case 'lab':
        return <LabView onNavigate={setActiveView} />;
      case 'growth-lab':
        return <GrowthLabView onNavigate={setActiveView} />;
      default:
        return <HomeView onNavigate={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#0A756A]/30 selection:text-[#14B8A6] relative flex flex-col justify-between overflow-hidden">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />
      
      {/* Top Ambient Spotlight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0A756A]/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <Navbar activeView={activeView} setActiveView={setActiveView} />

      <main className="flex-1 relative z-10">
        {renderActiveView()}
      </main>

      <Footer activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
}

export default App;
