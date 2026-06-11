import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import PersonaMaria from './components/PersonaMaria';
import HowItWorks from './components/HowItWorks';
import MatchmakerDemo from './components/MatchmakerDemo';
import CommunityImpact from './components/CommunityImpact';
import EthicsRoadmap from './components/EthicsRoadmap';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Set up an Intersection Observer to dynamically update highlighters on scroll
  useEffect(() => {
    const sections = [
      'hero',
      'challenge',
      'maria',
      'how-it-works',
      'matchmaker-demo',
      'community-impact',
      'ethics'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the sweet spot of the viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between" id="app-wrapper">
      {/* Dynamic Header */}
      <Header lang={lang} setLang={setLang} activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="flex-1" id="main-content-layout">
        
        {/* Hero Banner Section */}
        <Hero lang={lang} />

        {/* The Piedmont Triad Housing Challenge Section */}
        <Challenge lang={lang} />

        {/* Interactive User Persona Story section */}
        <PersonaMaria lang={lang} />

        {/* How HomeLander AI Works Method Section */}
        <HowItWorks lang={lang} />

        {/* Interactive AI Matchmaker Demo Dashboard */}
        <MatchmakerDemo lang={lang} />

        {/* Community Impact and ROI calculator */}
        <CommunityImpact lang={lang} />

        {/* Trust & Ethics Guidelines + Future roadmap */}
        <EthicsRoadmap lang={lang} />

      </main>

      {/* Bottom Footer & Coalition Partners */}
      <Footer lang={lang} />
    </div>
  );
}
