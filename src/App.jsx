import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { HomeView } from './components/HomeView.jsx';
import { AboutView } from './components/AboutView.jsx';
import { AcademyView } from './components/AcademyView.jsx';
import { LabView } from './components/LabView.jsx';
import { GrowthLabView } from './components/GrowthLabView.jsx';
import { ContactView } from './components/ContactView.jsx';
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
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-[#0A756A]/30 selection:text-[#14B8A6] relative flex flex-col justify-between">
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      <main className="flex-1">
        {renderActiveView()}
      </main>

      <Footer activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
}

export default App;
