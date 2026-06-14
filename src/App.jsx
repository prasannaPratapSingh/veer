import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import CaseStudy from './CaseStudy';
import batmanImg from './assets/batman.png';
import section2Img from './assets/section2.png';
import section3Img from './assets/section3.png';
import section4Img from './assets/section4.png';
import r2rLogo from './assets/r2r_logo.png';
import aboutImg from './assets/aboutme.png';
import lastSectionImg from './assets/lasthomesection.png';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        const timer = setTimeout(() => {
          const retryElement = document.getElementById(targetId);
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset to trigger before section reaches the top

      const homeSection = document.getElementById('home');
      const workSection = document.getElementById('work');
      const aboutSection = document.getElementById('about');

      if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection('about');
      } else if (workSection && scrollPosition >= workSection.offsetTop) {
        setActiveSection('work');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    "UX DESIGN",
    "USER RESEARCH",
    "PRODUCT DESIGNING",
    "PROTOTYPING",
    "VISUAL DESIGN",
    "PRODUCT THINKING"
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-neutral-900/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-bebas text-3xl font-bold tracking-wider text-brand-red hover:text-white transition-colors duration-300">
            KARNVEER
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a 
              href="#home" 
              className={`font-sans text-xs font-bold tracking-[0.2em] relative transition-colors duration-300 ${
                activeSection === 'home' 
                  ? 'text-brand-red after:content-[""] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2px] after:bg-brand-red' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              HOME
            </a>
            <a 
              href="#work" 
              className={`font-sans text-xs font-bold tracking-[0.2em] relative transition-colors duration-300 ${
                activeSection === 'work' 
                  ? 'text-brand-red after:content-[""] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2px] after:bg-brand-red' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              WORK
            </a>
            <a 
              href="#about" 
              className={`font-sans text-xs font-bold tracking-[0.2em] relative transition-colors duration-300 ${
                activeSection === 'about' 
                  ? 'text-brand-red after:content-[""] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2px] after:bg-brand-red' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              ABOUT
            </a>
            <a 
              href="/Karnveer_Dixit_Resume_Updated.pdf" 
              download="Karnveer_Dixit_Resume_Updated.pdf" 
              className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-300"
            >
              RESUME
            </a>
          </nav>

          {/* Contact Me CTA */}
          <div>
            <a 
              href="#connect" 
              className="font-sans text-xs font-bold tracking-[0.15em] bg-brand-red hover:bg-[#ff1a1a] text-white px-6 py-3 rounded-none flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20"
            >
              CONTACT ME <span className="text-sm">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <div id="home" className="min-h-screen flex flex-col justify-between relative overflow-hidden border-b border-neutral-900/40">
        
        {/* Background Layer (Ambient, Text, and Illustration) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
          {/* Background Ambient Glows */}
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-brand-red/10 rounded-full blur-[150px]"></div>

          {/* Huge Backdrop "BATMAN" Text */}
          <div className="absolute left-[6vw] lg:left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] bottom-0 text-[16vw] lg:text-[14vw] font-bebas font-black tracking-[0.05em] batman-bg-text z-0 uppercase leading-none">
            BATMAN
          </div>

          {/* Batman Image Container */}
          <div className="absolute right-0 bottom-0 top-0 w-full lg:w-1/2 flex items-end justify-end z-10">
            <img 
              src={batmanImg} 
              alt="Karnveer Dixit | Batman Design" 
              className="h-[65vh] sm:h-[70vh] lg:h-[96vh] xl:h-[105vh] w-auto max-w-none object-contain object-bottom translate-x-[15%] sm:translate-x-[10%] lg:translate-x-[5%] xl:translate-x-[1%] opacity-35 lg:opacity-100 transition-all duration-300 filter contrast-[1.15] brightness-[0.95]"
            />
          </div>
        </div>

        {/* Hero Main Section */}
        <main className="flex-grow flex items-center relative z-20 max-w-7xl w-full mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="w-full lg:max-w-[58%] flex flex-col justify-center relative z-20">
            
            {/* Content Container */}
            <div className="relative z-10">
              {/* Subtitle */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1.5px] bg-brand-red inline-block"></span>
                <span className="font-sans text-xs font-semibold tracking-[0.25em] text-brand-red">
                  PRODUCT DESIGNER &middot; VISUAL DESIGNER
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-bebas text-7xl sm:text-8xl md:text-9xl xl:text-[8.5rem] font-bold leading-[0.85] tracking-wide select-text">
                <span className="block text-white">I AM</span>
                <span className="block split-text-red my-1 filter drop-shadow-[0_2px_10px_rgba(229,9,20,0.15)]">KARNVEER</span>
                <span className="block text-white">DIXIT.</span>
              </h1>

              {/* Description */}
              <p className="font-sans text-neutral-400 text-sm sm:text-base md:text-lg mt-8 mb-10 max-w-md leading-relaxed">
                I don't wear a mask. I craft experiences that speak without words.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a 
                  href="#work" 
                  className="font-sans text-xs sm:text-sm font-bold tracking-[0.2em] bg-brand-red hover:bg-[#ff1a1a] text-white px-8 py-4 flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/25"
                >
                  VIEW MY WORK <span className="text-base">→</span>
                </a>
                <a 
                  href="#bat-signal" 
                  className="font-sans text-xs sm:text-sm font-bold tracking-[0.2em] bg-transparent border border-brand-red hover:bg-brand-red/10 text-white px-8 py-4 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  LET'S CONNECT
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Skills Ticker */}
        <footer className="w-full relative z-30">
          <div className="w-full py-6 border-t border-b border-neutral-900/60 bg-black overflow-hidden flex select-none">
            <div className="flex whitespace-nowrap animate-marquee">
              {/* Set 1 */}
              <div className="flex items-center gap-16 pr-16">
                {skills.map((skill, index) => (
                  <div key={`s1-${index}`} className="flex items-center gap-16">
                    <span className="text-xs sm:text-sm font-sans font-bold tracking-[0.3em] text-brand-red">
                      {skill}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                  </div>
                ))}
              </div>
              {/* Set 2 (for seamless looping) */}
              <div className="flex items-center gap-16 pr-16" aria-hidden="true">
                {skills.map((skill, index) => (
                  <div key={`s2-${index}`} className="flex items-center gap-16">
                    <span className="text-xs sm:text-sm font-sans font-bold tracking-[0.3em] text-brand-red">
                      {skill}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* SECTION 2: SELECTED WORK */}
      <section id="work" className="relative py-24 sm:py-32 max-w-7xl mx-auto px-6 z-20 scroll-mt-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full mb-16 gap-6">
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-[1.5px] bg-brand-red inline-block"></span>
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-brand-red">
                SELECTED WORK
              </span>
            </div>
            <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl xl:text-[7.5rem] text-white leading-none">
              FEATURED
            </h2>
            <p className="text-neutral-500 font-sans text-xs sm:text-sm mt-4 tracking-widest uppercase font-bold">
              Where design thinks. Where visuals speak.
            </p>
          </div>
          <div className="md:text-right">
            <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl xl:text-[7.5rem] text-white leading-none relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[5px] after:bg-brand-red">
              PROJECTS
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* Left Large Project Card: Pharmacist Shubham */}
          <div 
            onClick={() => setModalOpen(true)}
            className="cursor-pointer lg:col-span-7 bg-[#050505] border border-neutral-900 rounded-none overflow-hidden relative group hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between h-[380px] sm:h-[480px] lg:h-[600px] p-6 sm:p-8"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-35 group-hover:opacity-55 group-hover:scale-[1.01] transition-all duration-700 pointer-events-none">
              <img 
                src={section2Img} 
                alt="Pharmacist Shubham Mockup" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"></div>
            </div>
            
            {/* Year */}
            <span className="text-brand-red text-xs font-bold tracking-[0.2em] z-10">2026</span>
            
            {/* Project Details */}
            <div className="z-10 mt-auto">
              <h3 className="font-bebas text-3xl sm:text-4xl lg:text-[2.75rem] text-white tracking-wider mb-4 leading-none">
                PHARMACIST SHUBHAM
              </h3>
              <div className="flex flex-wrap gap-2">
                {["UX/UI DESIGN", "RESEARCH", "DESIGN SYSTEM", "PROTOTYPING"].map((tag) => (
                  <span key={tag} className="text-[10px] font-sans font-bold tracking-widest text-neutral-400 border border-neutral-800/80 bg-black/50 px-3 py-1.5 rounded-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Top Card: S.E.H.A.T Healthcare */}
            <div className="block text-left bg-[#050505] border border-neutral-900 rounded-none h-[286px] p-6 sm:p-8 flex items-center justify-between overflow-hidden relative group hover:border-brand-red/40 transition-all duration-300">
              {/* Invisible clickable overlay to navigate to /sehat */}
              <Link to="/sehat" className="absolute inset-0 z-10" aria-label="View S.E.H.A.T Healthcare Case Study"></Link>
              
              <div className="flex flex-col justify-between h-full z-20 max-w-[62%] pointer-events-none">
                <span className="text-brand-red text-xs font-bold tracking-[0.2em]">2026</span>
                
                <div className="mt-auto">
                  <h3 className="font-bebas text-2xl sm:text-3xl lg:text-[2rem] text-white tracking-wider mb-2.5 leading-none">
                    S.E.H.A.T HEALTHCARE
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["UI DESIGN", "DESIGN SYSTEM"].map((tag) => (
                      <span key={tag} className="text-[10px] font-sans font-bold tracking-widest text-neutral-400 border border-neutral-800/80 bg-black/50 px-3 py-1.5 rounded-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Blinking Live Link Button - Positioned absolutely at the right end */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.sehat.health.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-6 sm:top-8 right-6 sm:right-8 z-30 pointer-events-auto inline-flex items-center gap-2 text-[8px] font-sans font-bold tracking-[0.15em] text-white bg-brand-red/10 border border-brand-red/35 hover:bg-brand-red hover:border-brand-red hover:text-white px-3 py-1.5 transition-all duration-300 w-fit cursor-pointer shadow-md shadow-brand-red/5 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-85"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-red"></span>
                </span>
                <span>LIVE APP</span>
              </a>
              {/* Right side Phone Mockup */}
              <div className="w-[120px] sm:w-[150px] h-[90%] flex justify-end items-end absolute right-4 bottom-0 pointer-events-none group-hover:scale-105 transition-transform duration-500 z-10">
                <img 
                  src={section3Img} 
                  alt="S.E.H.A.T Healthcare Mockup" 
                  className="h-full w-auto object-contain object-bottom" 
                />
              </div>
            </div>

            {/* Bottom Card: Loyalty Rewards */}
            <div 
              onClick={() => setModalOpen(true)}
              className="cursor-pointer bg-[#050505] border border-neutral-900 rounded-none h-[286px] p-6 sm:p-8 overflow-hidden relative group hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Background Mockup Image */}
              <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 group-hover:scale-[1.01] transition-all duration-700 pointer-events-none">
                <img 
                  src={section4Img} 
                  alt="Loyalty Rewards Mockup" 
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              
              <div className="flex flex-col justify-between h-full z-10 w-full">
                <span className="text-brand-red text-xs font-bold tracking-[0.2em] mb-auto">2025</span>
                <div>
                  <h3 className="font-bebas text-2xl sm:text-3xl lg:text-[2rem] text-white tracking-wider mb-4 leading-none">
                    LOYALTY REWRADS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["UI DESIGN", "RESEARCH"].map((tag) => (
                      <span key={tag} className="text-[10px] font-sans font-bold tracking-widest text-neutral-400 border border-neutral-800/80 bg-black/50 px-3 py-1.5 rounded-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Internship Experience Row */}
        <div className="border-t border-neutral-900/60 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left side details */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Logo image */}
            <div className="flex items-center">
              <img 
                src={r2rLogo} 
                alt="Root2Rise Logo" 
                className="h-9 w-auto object-contain select-none pointer-events-none" 
              />
            </div>
            
            {/* Role & Date */}
            <div>
              <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-white uppercase mb-1.5">
                PRODUCT AND CREATIVE STRATEGY INTERN
              </h4>
              <p className="font-sans text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase italic">
                JANUARY 2026 - PRESENT | GHAZIABAD
              </p>
            </div>
          </div>

          {/* Red vertical divider */}
          <div className="hidden md:block md:col-span-1 flex justify-center">
            <div className="w-[1.5px] h-14 bg-brand-red"></div>
          </div>

          {/* Right side description */}
          <div className="md:col-span-6">
            <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
              Working as a founding design partner at a career-tech startup, turning early-stage ambiguity into product strategy, frameworks, and experiences students actually trust.
            </p>
          </div>

        </div>

      </section>

      {/* SECTION 3: ABOUT ME */}
      <section id="about" className="relative py-24 sm:py-32 border-t border-neutral-900/60 bg-black z-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & Skills & Quote */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Subtitle */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[1.5px] bg-brand-red inline-block"></span>
                <span className="font-sans text-xs font-semibold tracking-[0.25em] text-brand-red">
                  THE ARCHITECT BEHIND THE MASK
                </span>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white leading-none relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[5px] after:bg-brand-red">
                  ABOUT ME
                </h2>
              </div>

              {/* Biography paragraphs */}
              <div className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed space-y-6 mb-8 max-w-2xl">
                <p>
                  I'm <strong className="text-white font-semibold">Karnveer Dixit</strong> a Product and Visual Designer who believes great design isn't decoration. It's architecture. It shapes how people think, feel, and act.
                </p>
                <p>
                  Like Batman building Gotham's defenses one blueprint at a time, build interfaces layer by layer from deep user research to pixel perfect execution
                </p>
                <p>
                  I don't just design screens. I craft systems. I design stories. Ever project is a mission.
                </p>
              </div>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {[
                  "UX RESEARCH",
                  "UI DESIGN",
                  "VISUAL DESIGN",
                  "PROTOTYPING",
                  "DESIGN SYSTEMS",
                  "MOTION DESIGN",
                  "PRODUCT",
                  "PRODUCT THINKING"
                ].map((tag) => (
                  <span key={tag} className="text-[10px] font-sans font-bold tracking-widest text-neutral-400 border border-brand-red/30 bg-neutral-950/20 px-3.5 py-2 rounded-full hover:border-brand-red/60 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quote Block */}
              <div className="border-l-[3px] border-brand-red pl-5 py-1.5 my-4">
                <p className="font-bebas text-xl sm:text-2xl lg:text-3xl text-white tracking-wide leading-tight uppercase">
                  "IT'S NOT WHO I AM UNDERNEATH, BUT WHAT I DO THAT DEFINES ME."
                </p>
                <p className="font-sans text-[9px] font-bold tracking-[0.2em] text-neutral-500 uppercase mt-3">
                  — BATMAN, THE DARK KNIGHT
                </p>
              </div>

            </div>

            {/* Right Column: Portrait Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] lg:max-w-none aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[24px] border border-neutral-900/60 shadow-2xl group hover:border-brand-red/30 transition-all duration-500">
                <img 
                  src={aboutImg} 
                  alt="Karnveer Dixit" 
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 select-none pointer-events-none" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-black/65 via-25% to-transparent to-50% pointer-events-none"></div>
              </div>
            </div>

          </div>

          {/* Metrics block */}
          <div className="mt-16 border border-neutral-900 bg-[#050505] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-900 py-8 px-6">
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className="font-bebas text-5xl sm:text-6xl text-brand-red font-bold mb-2">20+</span>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">PROJECTS COMPLETE</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className="font-bebas text-5xl sm:text-6xl text-brand-red font-bold mb-2">5+</span>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">BRANDS COLLABORATED</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className="font-bebas text-5xl sm:text-6xl text-brand-red font-bold mb-2">2+</span>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">YEARS OF EXPERIENCE</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: CONTACT & FOOTER */}
      <section id="connect" className="relative py-24 sm:py-32 border-t border-neutral-900/60 bg-black z-20 overflow-hidden scroll-mt-24">
        
        {/* Red gradient radial glow at the top of the section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[250px] bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.18)_0%,transparent_70%)] pointer-events-none z-0"></div>

        {/* Batman Profile Image Container */}
        <div className="absolute right-0 top-0 bottom-[260px] sm:bottom-[220px] w-full lg:w-1/2 overflow-hidden pointer-events-none z-10 flex items-start justify-end">
          {/* Red glow behind Batman */}
          <div className="absolute right-[10%] top-[10%] w-[350px] h-[350px] bg-brand-red/10 rounded-full blur-[110px]"></div>
          
          <img 
            src={lastSectionImg} 
            alt="Karnveer Dixit | Contact Batman Design" 
            className="h-full w-auto max-w-none object-contain object-top select-none pointer-events-none opacity-25 lg:opacity-100 transition-opacity duration-300 translate-x-[10%] lg:translate-x-0" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          
          {/* Headline and Call to Action */}
          <div className="w-full lg:max-w-[55%] mb-20 relative z-20">
            <h2 className="font-bebas text-7xl sm:text-8xl md:text-9xl xl:text-[8.5rem] font-bold leading-[0.85] tracking-wide mb-6">
              <span className="block text-white">READY TO BUILD</span>
              <span className="block text-brand-red">GOTHAM?</span>
            </h2>
            
            <p className="font-sans text-neutral-400 text-sm sm:text-base md:text-lg mb-10 max-w-md leading-relaxed">
              Let's design something the world hasn't seen yet.
            </p>

            {/* CTA Button */}
            <div id="bat-signal" className="scroll-mt-24">
              <a 
                href="mailto:dixitkarnveer@gmail.com" 
                className="inline-flex items-center gap-3 font-sans text-xs sm:text-sm font-bold tracking-[0.2em] bg-brand-red hover:bg-[#ff1a1a] text-white px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/25 uppercase"
              >
                SEND THE BAT-SIGNAL <span className="text-base">→</span>
              </a>
            </div>
          </div>

          {/* Divider line above contact info columns */}
          <div className="border-t border-neutral-900/60 my-16"></div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 relative z-20">
            
            {/* Column 1: Get in Touch */}
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-brand-red uppercase">
                GET IN TOUCH
              </span>
              <a 
                href="mailto:dixitkarnveer@gmail.com" 
                className="font-sans text-sm sm:text-base font-bold text-white hover:text-brand-red transition-colors duration-300 inline-flex items-center underline underline-offset-4"
              >
                <svg className="w-4 h-4 text-brand-red inline-block mr-2.5 align-middle" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                DIXITKARNVEER@GMAIL.COM
              </a>
            </div>

            {/* Column 2: Find me on */}
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-brand-red uppercase">
                FIND ME ON
              </span>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.linkedin.com/in/karnveer-dixit-9b5bb3333?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-sans text-sm sm:text-base font-bold text-white hover:text-brand-red transition-colors duration-300 inline-flex items-center underline underline-offset-4"
                >
                  <svg className="w-4 h-4 text-brand-red inline-block mr-2.5 align-middle" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0z"/>
                  </svg>
                  Karnveer Dixit
                </a>
                <a 
                  href="https://www.instagram.com/_karn.ux?igsh=MXh3MjZua2NxMTU1eA==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-sans text-sm sm:text-base font-bold text-white hover:text-brand-red transition-colors duration-300 inline-flex items-center underline underline-offset-4"
                >
                  <svg className="w-4 h-4 text-brand-red inline-block mr-2.5 align-middle" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  @_karn.ux
                </a>
              </div>
            </div>

            {/* Column 3: Based in */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-brand-red uppercase">
                BASED IN
              </span>
              <div>
                <span className="font-sans text-base sm:text-lg font-bold text-white uppercase block">
                  INDIA
                </span>
                <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase mt-1.5 block">
                  AVAILABLE WORLDWIDE
                </span>
              </div>
            </div>

          </div>

          {/* Divider line above copyright footer */}
          <div className="border-t border-neutral-900/60 mt-16 mb-8"></div>

          {/* Footer Copyright Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-20 text-[10px] font-sans font-medium text-neutral-600 uppercase tracking-widest">
            <div>
              &copy; 2025 Karnveer Dixit. All rights reserved.
            </div>
            <div className="tracking-[0.2em] text-neutral-500 font-bold">
              DESIGNED WITH OBSESSION. BUILT FOR IMPACT.
            </div>
          </div>

        </div>
      </section>

      {/* CASE STUDY LOCK MODAL */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-backdrop-in"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-[#050505] border border-brand-red/30 w-full max-w-md p-8 sm:p-10 relative overflow-hidden flex flex-col items-center text-center rounded-none shadow-[0_0_50px_rgba(229,9,20,0.15)] animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-red/10 rounded-full blur-2xl pointer-events-none"></div>
            
            {/* Locked Dossier Icon */}
            <div className="w-16 h-16 rounded-full bg-brand-red/5 border border-brand-red/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-red animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>

            {/* Pill status */}
            <div className="inline-flex items-center gap-2 border border-brand-red/30 bg-brand-red/5 px-3.5 py-1 rounded-full text-brand-red text-[9px] font-bold tracking-[0.15em] uppercase font-sans mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
              <span>CLASSIFIED BRIEFING</span>
            </div>

            <h3 className="font-bebas text-4xl text-white tracking-wider mb-3 leading-tight">
              Coming Soon
            </h3>
            
            <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-xs">
              This case file will be updated soon.
            </p>

            <button 
              onClick={() => setModalOpen(false)}
              className="font-sans text-xs font-bold tracking-[0.2em] bg-brand-red hover:bg-[#ff1a1a] text-white px-8 py-3.5 w-full rounded-none transition-all duration-300 uppercase shadow-lg shadow-brand-red/20 active:scale-95 cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sehat" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;