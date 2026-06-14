import React from 'react';
import { Link } from 'react-router-dom';
import sehatImg from './assets/section3.png';
import colorsImg from './assets/colors.png';
import r2rLogo from './assets/r2r_logo.png';
import lastSectionImg from './assets/lasthomesection.png';

const SummaryMockup = () => (
  <div className="w-full max-w-[400px] aspect-[184/145] bg-[#050505] border border-neutral-900/80 p-6 flex flex-col gap-4 rounded-2xl relative overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08)_0%,transparent_70%)] blur-xl pointer-events-none"></div>
    <div className="border border-neutral-900 bg-neutral-950/40 px-4 py-3 rounded-lg flex items-center gap-3 text-neutral-400">
      <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span className="font-sans text-xs font-medium">Report Uploaded</span>
    </div>
    <div className="border border-brand-red/30 bg-brand-red/5 px-4 py-3 rounded-lg flex items-center gap-3 text-brand-red animate-pulse">
      <svg className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <span className="font-sans text-xs font-semibold tracking-wide">AI Generating Summary...</span>
    </div>
    <div className="border border-neutral-900 bg-neutral-950/60 px-4 py-4 rounded-lg flex flex-col gap-2.5">
      <div className="flex items-center gap-2 text-[10px] font-bold text-brand-red tracking-wider uppercase">
        <svg className="w-4 h-4 text-green-500 fill-green-500/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>YOUR SUMMARY</span>
      </div>
      <p className="text-xs text-neutral-200 leading-relaxed font-sans font-medium">
        Your HbA1c is slightly elevated. Here's what it means and what to do next...
      </p>
    </div>
  </div>
);

const SOSMockup = () => (
  <div className="w-full max-w-[400px] aspect-[184/145] bg-[#050505] border border-neutral-900/80 p-6 flex flex-col justify-between rounded-2xl relative overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08)_0%,transparent_70%)] blur-xl pointer-events-none"></div>
    <div className="flex justify-between items-center z-10">
      <div className="flex items-center gap-2 text-[10px] font-bold text-brand-red tracking-wider uppercase">
        <span className="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
        <span>CRITICAL SOS EVENT</span>
      </div>
      <span className="font-mono text-[10px] text-neutral-500">ACCID. ID: #9021</span>
    </div>
    <div className="flex justify-center items-center py-2 z-10">
      <div className="w-24 h-24 rounded-full bg-brand-red/10 border-2 border-brand-red flex flex-col items-center justify-center relative cursor-pointer group-hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(229,9,20,0.2)]">
        <div className="absolute inset-0 rounded-full border border-brand-red/60 animate-ping opacity-75"></div>
        <svg className="w-8 h-8 text-brand-red mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span className="font-bebas text-sm font-bold text-white tracking-widest">SOS ACTIVE</span>
      </div>
    </div>
    <div className="border border-neutral-900 bg-neutral-950/50 p-3 rounded-lg z-10 flex items-center justify-between">
      <div>
        <span className="block text-[8px] font-bold text-neutral-500 uppercase tracking-widest">NEAREST DISPATCH</span>
        <span className="text-xs font-bold text-white font-sans mt-0.5 block">MAX HEALTHCARE AMBULANCE</span>
      </div>
      <span className="text-xs font-bebas text-brand-red font-bold bg-brand-red/5 px-2.5 py-1 border border-brand-red/25 rounded-md">ETA 4 MINS</span>
    </div>
  </div>
);

const BookingMockup = () => (
  <div className="w-full max-w-[400px] aspect-[184/145] bg-[#050505] border border-neutral-900/80 p-6 flex flex-col justify-between rounded-2xl relative overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08)_0%,transparent_70%)] blur-xl pointer-events-none"></div>
    <div className="flex items-center gap-3.5 z-10">
      <div className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-brand-red font-bebas text-xl">
        AS
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-white font-sans">Dr. Ananya Sen</span>
          <span className="text-[9px] font-sans font-bold text-green-500 border border-green-500/20 bg-green-500/5 px-1.5 py-0.5 rounded">VERIFIED</span>
        </div>
        <span className="block text-[9px] text-neutral-400 font-sans mt-0.5">Cardiology &middot; Fortis Hospital</span>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2 z-10 my-1">
      {[
        { day: "MON", date: "15", active: false },
        { day: "TUE", date: "16", active: true },
        { day: "WED", date: "17", active: false },
        { day: "THU", date: "18", active: false }
      ].map((item, idx) => (
        <div 
          key={idx} 
          className={`p-2 rounded-lg text-center border transition-all duration-300 ${
            item.active 
              ? "border-brand-red bg-brand-red/5 text-white" 
              : "border-neutral-900 bg-neutral-950/30 text-neutral-500 hover:border-neutral-800"
          }`}
        >
          <span className="block text-[8px] font-bold tracking-wider">{item.day}</span>
          <span className="text-xs font-bold font-sans mt-0.5 block">{item.date}</span>
        </div>
      ))}
    </div>
    <div className="flex gap-2 z-10">
      {["09:00 AM", "10:30 AM", "02:00 PM"].map((slot, idx) => (
        <div 
          key={idx} 
          className={`flex-1 text-center py-2 border rounded-lg text-[10px] font-bold font-sans transition-all duration-300 cursor-pointer ${
            idx === 1 
              ? "border-brand-red bg-brand-red/10 text-white" 
              : "border-neutral-900 bg-neutral-950/20 text-neutral-400 hover:border-neutral-800"
          }`}
        >
          {slot}
        </div>
      ))}
    </div>
  </div>
);

const CommunityMockup = () => (
  <div className="w-full max-w-[400px] aspect-[184/145] bg-[#050505] border border-neutral-900/80 p-5 flex flex-col justify-between rounded-2xl relative overflow-hidden group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08)_0%,transparent_70%)] blur-xl pointer-events-none"></div>
    <div className="flex items-center justify-between border-b border-neutral-900 pb-3 z-10">
      <div>
        <span className="text-xs font-bold text-white font-sans block">Diabetes Support Circle</span>
        <span className="text-[8px] text-neutral-500 font-bold uppercase tracking-wider mt-0.5 block">14,204 members</span>
      </div>
      <span className="text-[8px] font-bold tracking-widest text-brand-red bg-brand-red/5 border border-brand-red/20 px-2 py-0.5 rounded-full">ACTIVE</span>
    </div>
    <div className="bg-neutral-950/60 border border-neutral-900 p-2.5 rounded-lg z-10 flex flex-col gap-1">
      <div className="flex justify-between items-center text-[8px] font-bold text-neutral-400 uppercase">
        <span>Anonymous User</span>
        <span>2m ago</span>
      </div>
      <p className="text-[10px] text-neutral-300 font-sans leading-relaxed">
        Does anyone else feel fatigued after morning walks? Just started insulin.
      </p>
    </div>
    <div className="bg-neutral-900/40 border border-brand-red/10 p-2.5 rounded-lg z-10 flex flex-col gap-1 ml-4 self-end w-[90%]">
      <div className="flex justify-between items-center text-[8px] font-bold text-brand-red uppercase">
        <span className="flex items-center gap-1">
          <svg className="w-2 h-2 text-brand-red fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          Dr. K. Dixit &middot; Endocrinologist
        </span>
        <span className="text-neutral-500">Just now</span>
      </div>
      <p className="text-[10px] text-neutral-200 font-sans leading-relaxed">
        Yes, Arjun. Adjusting dosage takes time. Try checking glucose levels right after.
      </p>
    </div>
  </div>
);

const CaseStudy = () => {
  const problemPoints = [
    {
      num: "01",
      title: "MEDICAL REPORTS REMAIN OPAQUE",
      desc: "Most platforms show reports as raw PDFs. Users get medical jargon with zero context — anxiety instead of clarity."
    },
    {
      num: "02",
      title: "NO EMERGENCY INFRASTRUCTURE",
      desc: "Existing apps are built for scheduled care. No panic button, no SOS, no accident reporting."
    },
    {
      num: "03",
      title: "FRAGMENTED HEALTH ECOSYSTEM",
      desc: "Users juggle 3-5 apps for appointments, medicines, lab reports, tracking. Exhausting, not empowering."
    },
    {
      num: "04",
      title: "AI EXISTS BUT DOESN'T HELP",
      desc: "Competitor AI is buried, jargon-heavy, or just a chatbot helper that confuses isn't assistance."
    },
    {
      num: "05",
      title: "NO SENSE OF COMMUNITY",
      desc: "Health is social. Support, peer knowledge, shared coping — none exist in current platforms."
    },
    {
      num: "06",
      title: "ACCESSIBILITY IGNORED",
      desc: "Elderly and low-literacy users are an afterthought. Dense hierarchies and tiny targets actively exclude them."
    }
  ];

  const businessGoals = [
    {
      title: "ESTABLISH A DEFENSIBLE MARKET POSITION",
      desc: "Move from reactive summaries to proactive intelligence — AI spotting patterns across historical reports."
    },
    {
      title: "DRIVE RETENTION THROUGH ECOSYSTEM LOCK-IN",
      desc: "A unified platform so compelling users never need a competing app. Memberships, community, and family keep them engaged."
    },
    {
      title: "PREMIUM MONETISATION VIA MEMBERSHIPS",
      desc: "Clear path from free to paid through tangible value: priority ambulance, unlimited AI, family care plans."
    }
  ];

  const userGoals = [
    {
      title: "UNDERSTAND THEIR OWN HEALTH",
      desc: "Users want to feel informed, not overwhelmed. Turn every interaction into clarity, not confusion."
    },
    {
      title: "FEEL SAFE IN ANY SITUATION",
      desc: "From routine checkups to roadside accidents — help is one tap away; the app has their back."
    },
    {
      title: "MANAGE HEALTH, NOT CHASE INFORMATION",
      desc: "Consolidate health records so users spend less time searching, more time living — health proactively managed."
    }
  ];

  const personas = [
    {
      name: "ARJUN RAO",
      age: "26",
      tagline: "BEREAVED ONCE, BENGALURU",
      quote: "I want a single app that handles everything — I don't have time to manage five different health apps.",
      targets: ["SIMPLIFIED RECORDS", "QUICK DOCTOR BOOKING", "AMBULANCE TRACKING"],
      initial: "AR"
    },
    {
      name: "PRIYA DESAI",
      age: "40",
      tagline: "WORKING MOTHER, PUNE",
      quote: "I manage health for my whole family — I need peace of mind, not more stress.",
      targets: ["FAMILY ACCOUNTS", "PREVENTATIVE CARE", "HEALTH DOSSIER"],
      initial: "PD"
    },
    {
      name: "RAMESH KUMAR",
      age: "67",
      tagline: "RETIRED TEACHER, JAIPUR",
      quote: "I want to understand my own health results without always calling my son to explain them.",
      targets: ["LARGE TARGETS", "ACCESSIBLE UI", "VOICE HELP"],
      initial: "RK"
    }
  ];

  const researchInsights = [
    {
      title: "MEDICAL REPORTS TRIGGER ANXIETY, NOT ACTION",
      desc: "82% of participants got a lab report but couldn't act without calling a doctor or googling. Information existed — understanding did not."
    },
    {
      title: "EMERGENCY MOMENTS EXPOSE A TERRIFYING VOID",
      desc: "During medical emergencies, users panicked, deciding where to go while trying to call family. No clear safety net."
    },
    {
      title: "TRUST IS BUILT THROUGH TRANSPARENCY",
      desc: "Hidden fees, unclear doctor reviews, cancelled bookings. Distrust that bury cancellation policies in fine print."
    },
    {
      title: "COMMUNITY & PEER SUPPORT IS UNDERUTILISED",
      desc: "Participants with chronic conditions sought peer communities. None found one inside a healthcare app — they used WhatsApp."
    },
    {
      title: "MOBILE-FIRST MEANS THUMB-FIRST",
      desc: "94% of healthcare interactions happened one-handed. Yet most apps bury critical actions in top corners."
    }
  ];

  const solutionPillars = [
    {
      num: "01",
      title: "AI AS TRANSLATOR",
      desc: "Turn raw medical data into plain language instantly. Summaries anyone can act on."
    },
    {
      num: "02",
      title: "SAFETY NET FIRST",
      desc: "Emergency SOS and accident reporting front-and-center. Never buried in settings."
    },
    {
      num: "03",
      title: "ONE ECOSYSTEM",
      desc: "Appointments, records, checklists, community — one app, one profile, zero switching."
    },
    {
      num: "04",
      title: "ACCESSIBLE BY DEFAULT",
      desc: "Large targets, clear hierarchy, bottom-anchored navigation — for every user, every situation."
    }
  ];

  const features = [
    {
      pill: "FEATURE 01 · AI INTELLIGENCE",
      title: "MEDICAL SUMMARIES THAT ACTUALLY MAKE SENSE",
      desc: "A doctor spends 7 minutes explaining a report. The AI does it in 7 seconds — in plain language. Users upload any medical document and receive a structured summary: what it means, what's concerning, what to do next.",
      bullets: [
        {
          bold: "Progressive disclosure",
          text: "Summary first, technical detail on demand. Respects all literacy levels."
        },
        {
          bold: "Traffic-light indicators",
          text: "Green / orange / red instantly communicates severity without medical knowledge."
        },
        {
          bold: "Action cards",
          text: "Each summary ends with a suggested next step — book a follow-up, dietary change."
        },
        {
          bold: "Accessible language",
          text: "AI prompted at Grade-8 reading level. No jargon by default."
        }
      ],
      type: "summary"
    },
    {
      pill: "FEATURE 02 · SAFETY INFRASTRUCTURE",
      title: "EMERGENCY & ACCIDENT REPORTING - A NEW CATEGORY",
      desc: "The most crucial feature in s.e.h.a.t. — and the one with zero competitors. One-tap SOS sends location to emergency contacts and nearest ambulance simultaneously. The accident reporting flow lets users report incidents they witness — a civic safety network.",
      bullets: [
        {
          bold: "Panic state UI",
          text: "High-contrast, large targets, clear status for high-stress situations."
        },
        {
          bold: "Dual reporting modes",
          text: "Report personal medical emergency or report an accident witnessed on the road."
        },
        {
          bold: "Auto-location sharing",
          text: "Instant coordinate sharing with nearby services and emergency contacts."
        },
        {
          bold: "Confirmation guards",
          text: "Smart 3-second hold prevents accidental pocket-dial triggers."
        }
      ],
      type: "sos"
    },
    {
      pill: "FEATURE 03 · DISCOVERY & CARE",
      title: "BOOKING A DOCTOR SHOULD FEEL LIKE BOOKING A FLIGHT",
      desc: "Clear, fast, transparent. Doctor profiles surface what patients actually care about — wait time, reviews, fees, mode (in-person vs video) — without five taps to find any of it.",
      bullets: [
        {
          bold: "Trust signals upfront",
          text: "Fees, verified ratings, and average wait times shown directly on search cards."
        },
        {
          bold: "Calendar-first layout",
          text: "View all available time slots in one screen, removing unnecessary booking taps."
        },
        {
          bold: "Mode switching",
          text: "Toggle easily between virtual teleconsultation and physical clinic visits."
        },
        {
          bold: "Smart pre-fill",
          text: "Automatically attaches health dossier history to provide context to the doctor."
        }
      ],
      type: "booking"
    },
    {
      pill: "FEATURE 04 · EMOTIONAL SUPPORT",
      title: "HEALTH AS A SHARED JOURNEY, NOT A SOLO BATTLE",
      desc: "Community features fill the emotional gap clinical apps always miss. Peer support, condition-specific circles, for un-biased AI anxiety booking, family plans.",
      bullets: [
        {
          bold: "Moderated spaces",
          text: "Peer circles verified and moderated to keep health discussions constructive and safe."
        },
        {
          bold: "Membership value ladder",
          text: "Free advice tier up to premium priorities like immediate ambulance dispatch."
        },
        {
          bold: "Anonymous participation",
          text: "Post sensitive questions without revealing your identity to the community."
        },
        {
          bold: "Gamified milestones",
          text: "Daily healthy habits converted into loyalty coins and membership extensions."
        }
      ],
      type: "community"
    }
  ];


  const journeySteps = [
    {
      title: "THE HOME DASHBOARD — A PERSONAL HEALTH BRIEFING",
      desc: "Greeted by name with a contextual nudge ('You haven't logged a checkup in 3 months'). Shows upcoming appointment, AI summary badge, and the SOS — always visible, always one tap.",
      icon: "home"
    },
    {
      title: "AI SUMMARY — CONFUSION TO CLARITY IN 8 SECONDS",
      desc: "He opens his HbA1c. Instead of a raw PDF: 'Slightly elevated — no immediate concern.' Traffic-light orange. Tap 'What should I do?' for three plain-language steps.",
      icon: "dna"
    },
    {
      title: "BOOKING A FOLLOW-UP — THREE TAPS",
      desc: "AI surfaces a 'Book a follow-up' card. Sees Dr. Sharma (4.9, verified, 10 AM), picks slot, confirms. Health history pre-attached. Under 90 seconds.",
      icon: "calendar"
    },
    {
      title: "CHECKING IN WITH THE COMMUNITY — HE'S NOT ALONE",
      desc: "Joins a Diabetes Support Circle. Saves a meal plan that worked for someone with elevated HbA1c. Moderated, safe, verified — built into his health context.",
      icon: "people"
    },
    {
      title: "THE ACCIDENT FLOW — A SCENARIO HE HOPED HE'D NEVER NEED",
      desc: "Witnesses an accident. Taps 'Report Nearby Incident,' confirms location (auto-detected), submits. Information relayed to nearest responders.",
      icon: "siren"
    },
    {
      title: "END OF DAY — HEALTH IS MANAGED, NOT CHASED",
      desc: "Understood a scary report, booked a doctor, found community, helped in an emergency — one app, one day. He didn't manage healthcare. s.e.h.a.t managed it with him.",
      icon: "sparkle"
    }
  ];

  const challenges = [
    {
      title: "EMERGENCY UX VS. ACCIDENTAL TRIGGERS",
      desc: "SOS needed instant reach — but no accidental taps. Solution: 3-second hold. Long enough to prevent pocket-dials, short enough that real emergencies don't lose seconds. Stress-tested against panic scenarios.",
      icon: "warning"
    },
    {
      title: "AI CONFIDENCE VS. MEDICAL ACCURACY",
      desc: "AI summaries had to be clear and actionable — but overconfident AI in healthcare is dangerous. Every summary includes 'This is not a diagnosis,' always visible. Tone calibrated: informative, never prescriptive.",
      icon: "target"
    },
    {
      title: "FEATURE RICHNESS VS. INTERFACE SIMPLICITY",
      desc: "28 screens, 6 modules — easily overwhelming. Solution: ruthless grouping. Home surfaces 4 most-likely actions by context. Five maximum tabs. Anything beyond lives in contextual entry points.",
      icon: "grid"
    },
    {
      title: "DESIGNING FOR BOTH 20-YEAR-OLDS AND 70-YEAR-OLDS",
      desc: "Arjun expects density and speed. Ramesh needs large targets and simplified flows. Resolution: one design system with accessibility as baseline, plus optional 'Simplified Mode' — both thrive in one product.",
      icon: "halfcircle"
    }
  ];

  const metrics = [
    { num: "38%", label: "↑ VS. COMPETITORS", desc: "TASK COMPLETION RATE" },
    { num: "4.7", label: "★ AVG SATISFACTION", desc: "SUS SCORE (OUT OF 5)" },
    { num: "68S", label: "↓ VS. 4 MIN AVG", desc: "TIME TO BOOK APPOINTMENT" },
    { num: "91%", label: "WOULD RECOMMEND", desc: "NPS POSITIVE RESPONSE" }
  ];

  const futurePlans = [
    {
      pill: "NEAR-TERM · V1.5",
      title: "PREDICTIVE AI HEALTH INSIGHTS",
      desc: "Move from reactive summaries to proactive intelligence — AI spotting patterns across historical reports. 'Your cholesterol increased 12% across three tests. Consider consultation.' Preventive healthcare through pattern recognition."
    },
    {
      pill: "MID-TERM · V2.0",
      title: "WEARABLE & HEALTH DEVICE INTEGRATION",
      desc: "Sync with Apple Health, Google Fit, fitness trackers — bringing real-time biometrics into AI summaries. HRV, sleep, steps become part of the health narrative."
    },
    {
      pill: "MID-TERM · V2.0",
      title: "VERNACULAR LANGUAGE SUPPORT",
      desc: "India has 22 official languages. Hindi, Tamil, Bengali, Marathi summaries extend the value prop to 700M+ users — unlocking the next 10x of the addressable market."
    },
    {
      pill: "LONG-TERM · V3.0",
      title: "HYPER-PERSONALISED CARE PLANS",
      desc: "A dynamic AI-generated personal roadmap evolving with the user — adjusting goals and connections based on health trajectory. s.e.h.a.t becomes a lifelong co-pilot."
    },
    {
      pill: "LONG-TERM · V3.0",
      title: "COMMUNITY-POWERED SECOND OPINIONS",
      desc: "Verified specialists in communities provide informal opinions — moderated, time-limited, disclaimer-protected. Peer review backed by professional oversight."
    }
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-neutral-900/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-bebas text-3xl font-bold tracking-wider text-brand-red hover:text-white transition-colors duration-300">
            KARNVEER
          </Link>
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-300">
              HOME
            </Link>
            <Link to="/#work" className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-300">
              WORK
            </Link>
            <Link to="/#about" className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-300">
              ABOUT
            </Link>
            <a 
              href="/Karnveer_Dixit_Resume_Updated.pdf" 
              download="Karnveer_Dixit_Resume_Updated.pdf" 
              className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-300"
            >
              RESUME
            </a>
          </nav>
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

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 max-w-7xl mx-auto px-6 z-20 border-b border-neutral-900/60">
        
        {/* Ambient Glows at the Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(229,9,20,0.35)_0%,transparent_75%)] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-150px] left-[10%] w-[600px] h-[400px] bg-brand-red/18 rounded-full blur-[140px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-150px] right-[10%] w-[700px] h-[500px] bg-brand-red/32 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse"></div>

        {/* Radar Graphic Circles in background on the right */}
        <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none select-none z-0 hidden lg:block opacity-50">
          <div className="absolute inset-0 border border-brand-red/12 rounded-full"></div>
          <div className="absolute inset-[100px] border border-brand-red/12 rounded-full"></div>
          <div className="absolute inset-[200px] border border-brand-red/12 rounded-full"></div>
          <div className="absolute inset-[300px] border border-brand-red/18 rounded-full"></div>
          <div className="absolute inset-[350px] w-24 h-24 rounded-full bg-brand-red/20 blur-[45px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-4xl relative z-10">
          
          {/* Case File Pill */}
          <div className="inline-flex items-center gap-2 border border-brand-red/35 bg-brand-red/5 px-4 py-1.5 rounded-full text-brand-red text-[9px] font-bold tracking-[0.15em] uppercase font-sans mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
            <span>CASE FILE &middot; 001 / MISSION BRIEF</span>
          </div>

          {/* S.E.H.A.T spaced text */}
          <span className="block font-sans text-neutral-400 text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
            S &middot; E &middot; H &middot; A &middot; T
          </span>

          {/* Title */}
          <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold leading-[0.95] tracking-wide mb-8">
            <span className="block text-white">HEALTHCARE,</span>
            <span className="block text-neutral-500">REIMAGINED FOR</span>
            <span className="block text-brand-red">THE MODERN OPERATIVE.</span>
          </h1>

          {/* Description */}
          <p className="font-sans text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mb-12 max-w-xl italic">
            An AI-powered, emergency-first healthcare ecosystem built not to compete but to rule &mdash; designed end-to-end across 28 screens.
          </p>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-neutral-900/60 max-w-3xl">
            <div>
              <span className="font-sans text-[9px] font-bold tracking-[0.15em] text-neutral-500 uppercase block mb-1">ROLE</span>
              <span className="font-sans text-xs sm:text-sm font-bold text-white uppercase">UX/UI Designer</span>
            </div>
            <div>
              <span className="font-sans text-[9px] font-bold tracking-[0.15em] text-neutral-500 uppercase block mb-1">TIMELINE</span>
              <span className="font-sans text-xs sm:text-sm font-bold text-white uppercase">6 Weeks &middot; 2025</span>
            </div>
            <div>
              <span className="font-sans text-[9px] font-bold tracking-[0.15em] text-neutral-500 uppercase block mb-1">TOOLS</span>
              <span className="font-sans text-xs sm:text-sm font-bold text-white uppercase">Figma &middot; Photoshop</span>
            </div>
            <div>
              <span className="font-sans text-[9px] font-bold tracking-[0.15em] text-neutral-500 uppercase block mb-1">CATEGORY</span>
              <span className="font-sans text-xs sm:text-sm font-bold text-white uppercase">Healthcare</span>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB-NAVIGATION */}
      <div className="sticky top-[68px] bg-black/90 backdrop-blur-md border-b border-neutral-900/60 z-40 hidden md:block py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold tracking-widest text-neutral-400">
          <a href="#overview" className="hover:text-brand-red transition-colors">OVERVIEW</a>
          <a href="#problem" className="hover:text-brand-red transition-colors">PROBLEM</a>
          <a href="#goals" className="hover:text-brand-red transition-colors">GOALS</a>
          <a href="#users" className="hover:text-brand-red transition-colors">USERS</a>
          <a href="#research" className="hover:text-brand-red transition-colors">RESEARCH</a>
          <a href="#solution" className="hover:text-brand-red transition-colors">SOLUTION</a>
          <a href="#features" className="hover:text-brand-red transition-colors">FEATURES</a>
          <a href="#system" className="hover:text-brand-red transition-colors">SYSTEM</a>
          <a href="#journey" className="hover:text-brand-red transition-colors">JOURNEY</a>
          <a href="#challenges" className="hover:text-brand-red transition-colors">CHALLENGES</a>
          <a href="#impact" className="hover:text-brand-red transition-colors">IMPACT</a>
          <a href="#future" className="hover:text-brand-red transition-colors">FUTURE</a>
          <a href="#reflection" className="hover:text-brand-red transition-colors">REFLECTION</a>
        </div>
      </div>

      {/* 01. OVERVIEW SECTION */}
      <section id="overview" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="text-brand-red text-xs font-bold tracking-[0.2em] mb-3 block">01 / PROJECT OVERVIEW</span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider mb-6">WHAT IS S.E.H.A.T.?</h2>
            <div className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed space-y-6">
              <p>
                <strong className="text-white font-semibold">S.E.H.A.T.</strong> (Hindi for "health") is a comprehensive healthcare mobile application built for the modern Indian user — one who navigates a fragmented, often confusing health ecosystem every single day.
              </p>
              <p>
                Designed to compete with platforms like Practo and PharmEasy, s.e.h.a.t. goes beyond appointment booking and medicine delivery. It brings together AI-powered medical intelligence, real-time emergency response, community care, and personalized health management all within one cohesive, accessible experience.
              </p>
              <p>
                As the sole Product & UI/UX Designer, I was responsible for the end-to-end design process — from research synthesis to interaction design, visual design, and a unified design system.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-[#050505] border border-neutral-900 p-6 flex flex-col justify-center text-center">
              <span className="font-bebas text-4xl sm:text-5xl text-brand-red font-bold mb-1">28+</span>
              <span className="font-sans text-[9px] font-bold tracking-widest text-neutral-400 uppercase">SCREENS DESIGNED</span>
            </div>
            <div className="bg-[#050505] border border-neutral-900 p-6 flex flex-col justify-center text-center">
              <span className="font-bebas text-4xl sm:text-5xl text-brand-red font-bold mb-1">6</span>
              <span className="font-sans text-[9px] font-bold tracking-widest text-neutral-400 uppercase">FEATURE MODULES</span>
            </div>
            <div className="bg-[#050505] border border-neutral-900 p-6 flex flex-col justify-center text-center">
              <span className="font-bebas text-4xl sm:text-5xl text-brand-red font-bold mb-1">3</span>
              <span className="font-sans text-[9px] font-bold tracking-widest text-neutral-400 uppercase">USER PERSONAS</span>
            </div>
            <div className="bg-[#050505] border border-neutral-900 p-6 flex flex-col justify-center text-center">
              <span className="font-bebas text-4xl sm:text-5xl text-brand-red font-bold mb-1">1</span>
              <span className="font-sans text-[9px] font-bold tracking-widest text-neutral-400 uppercase">DESIGN SYSTEM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. PROBLEM SECTION */}
      <section id="problem" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        <span className="text-brand-red text-xs font-bold tracking-[0.2em] mb-3 block">02 / PROBLEM STATEMENT</span>
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wider mb-8 max-w-4xl leading-tight">
          INDIA'S HEALTHCARE APPS ARE SOLVING THE <span className="text-brand-red">WRONG PROBLEMS.</span>
        </h2>
        
        {/* Quote Block */}
        <div className="border-l-[3px] border-brand-red pl-6 py-2 my-10 max-w-3xl">
          <p className="font-bebas text-xl sm:text-2xl text-white tracking-wide leading-relaxed uppercase">
            "COMPETITORS HAVE DIGITISED HEALTHCARE ACCESS — BUT THEY HAVEN'T MADE HEALTHCARE HUMAN. THEY OPTIMISE FOR TRANSACTIONS, NOT FOR THE PERSON IN CRISIS AT 2 AM."
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemPoints.map((point) => (
            <div key={point.num} className="bg-[#050505] border border-neutral-900 p-6 sm:p-8 hover:border-brand-red/30 transition-colors duration-300">
              <span className="text-brand-red font-bebas text-xl block mb-4">{point.num}</span>
              <h3 className="font-sans text-xs font-bold tracking-widest text-white uppercase mb-3">{point.title}</h3>
              <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03. GOALS SECTION */}
      <section id="goals" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        <span className="text-brand-red text-xs font-bold tracking-[0.2em] mb-3 block">03 / GOALS & OBJECTIVES</span>
        <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider mb-12">THE TARGET BLUEPRINT</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Business Goals */}
          <div className="space-y-6">
            <h3 className="font-bebas text-2xl text-brand-red tracking-wider border-b border-neutral-900 pb-3">BUSINESS GOALS</h3>
            <div className="space-y-6">
              {businessGoals.map((goal, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="font-bebas text-neutral-600 text-lg">0{idx+1}</span>
                  <div>
                    <h4 className="font-sans text-xs font-bold tracking-widest text-white uppercase mb-2">{goal.title}</h4>
                    <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Goals */}
          <div className="space-y-6">
            <h3 className="font-bebas text-2xl text-white tracking-wider border-b border-neutral-900 pb-3">USER GOALS</h3>
            <div className="space-y-6">
              {userGoals.map((goal, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="font-bebas text-neutral-600 text-lg">0{idx+1}</span>
                  <div>
                    <h4 className="font-sans text-xs font-bold tracking-widest text-brand-red uppercase mb-2">{goal.title}</h4>
                    <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. USERS SECTION */}
      <section id="users" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        <span className="text-brand-red text-xs font-bold tracking-[0.2em] mb-3 block">04 / TARGET USERS</span>
        <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider mb-6">THREE PEOPLE. ONE APP FOR ALL OF THEM.</h2>
        <p className="font-sans text-neutral-400 text-sm sm:text-base mb-12 max-w-2xl leading-relaxed">
          s.e.h.a.t. is designed for the full spectrum of Indian healthcare users — from the digital-native millennial to the elderly parent managing chronic conditions.
        </p>

        {/* Persona Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div key={persona.name} className="bg-[#050505] border border-neutral-900 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-red/30 transition-colors duration-300">
              <div>
                {/* Header Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center font-bebas text-xl text-brand-red">
                    {persona.initial}
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-white">{persona.name}</h3>
                    <span className="font-sans text-[9px] font-bold tracking-wider text-neutral-500 uppercase block mt-1">
                      AGE: {persona.age} &middot; {persona.tagline}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p className="font-sans text-neutral-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{persona.quote}"
                </p>
              </div>

              {/* Targets */}
              <div className="border-t border-neutral-900/60 pt-6 mt-6">
                <span className="font-sans text-[9px] font-bold tracking-widest text-brand-red block mb-3 uppercase">USER NEEDS</span>
                <div className="flex flex-wrap gap-2">
                  {persona.targets.map((target) => (
                    <span key={target} className="text-[9px] font-sans font-bold tracking-widest text-neutral-400 border border-brand-red/20 px-2.5 py-1 rounded">
                      {target}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05. RESEARCH SECTION */}
      <section id="research" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Insights list */}
          <div className="lg:col-span-7">
            <span className="text-brand-red text-xs font-bold tracking-[0.2em] mb-3 block">05 / RESEARCH INSIGHTS</span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider mb-10">WHAT PEOPLE ACTUALLY SAID AND DID.</h2>
            
            <div className="space-y-8">
              {researchInsights.map((insight, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="font-bebas text-brand-red text-lg">0{idx+1}</span>
                  <div>
                    <h3 className="font-sans text-xs font-bold tracking-widest text-white uppercase mb-2">{insight.title}</h3>
                    <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">{insight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Callout block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-red/5 border border-brand-red/20 p-8 rounded-none relative">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase block mb-4">THE STRATEGIC OPENING</span>
              <p className="font-bebas text-2xl text-white tracking-wide leading-tight uppercase mb-6">
                NO INDIAN HEALTHCARE APP OWNS THE INTERSECTION OF AI-POWERED CLARITY AND EMERGENCY PREPAREDNESS. THIS GAP IS S.E.H.A.T.'S STRATEGIC OPENING.
              </p>
              
              <div className="border-t border-brand-red/10 pt-6 mt-6">
                <span className="font-sans text-[9px] font-bold tracking-widest text-brand-red block mb-3 uppercase">RESEARCH METHODS</span>
                <span className="font-sans text-[10px] font-bold tracking-widest text-neutral-300 uppercase block">
                  USER INTERVIEWS &bull; COMPETITIVE ANALYSIS &bull; CARD SORTING &bull; USABILITY TESTING
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 06. SOLUTION SECTION */}
      <section id="solution" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        <span className="text-brand-red text-xs font-bold tracking-[0.2em] mb-3 block">06 / SOLUTION STRATEGY</span>
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wider mb-8 max-w-4xl leading-tight">
          THE ANSWER WASN'T MORE FEATURES. <span className="text-brand-red">IT WAS THE RIGHT ONES.</span>
        </h2>
        <p className="font-sans text-neutral-400 text-sm sm:text-base mb-12 max-w-2xl leading-relaxed">
          Built on a single thesis: healthcare apps should reduce cognitive load, not add to it. Every feature simplifies something complex or responds to something urgent.
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionPillars.map((pillar) => (
            <div key={pillar.num} className="bg-[#050505] border border-neutral-900 p-6 flex flex-col justify-between hover:border-brand-red/30 transition-colors duration-300">
              <div>
                <span className="text-brand-red font-bebas text-lg block mb-4">{pillar.num}</span>
                <h3 className="font-sans text-xs font-bold tracking-widest text-white uppercase mb-3">{pillar.title}</h3>
              </div>
              <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed mt-4">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 07. FEATURES SECTION */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        
        {/* Section Header exactly matching reason.png */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full border border-brand-red/60 flex items-center justify-center font-bebas text-lg text-brand-red">
            07
          </div>
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            KEY FEATURES BREAKDOWN
          </span>
          <div className="flex-grow h-[1px] bg-neutral-900/60"></div>
        </div>

        <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-wider mb-16 uppercase leading-none">
          EVERY DECISION HAD <span className="text-brand-red">A REASON.</span>
        </h2>

        <div className="space-y-32">
          {features.map((feature, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Mockup Column */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                {feature.type === 'summary' && <SummaryMockup />}
                {feature.type === 'sos' && <SOSMockup />}
                {feature.type === 'booking' && <BookingMockup />}
                {feature.type === 'community' && <CommunityMockup />}
              </div>

              {/* Feature Content */}
              <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
                <div className="inline-block border border-brand-red/30 px-3.5 py-1.5 rounded-full text-brand-red text-[10px] font-bold tracking-widest mb-6 uppercase w-fit bg-brand-red/5">
                  {feature.pill}
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl lg:text-[2.5rem] text-white tracking-wider mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                  {feature.desc}
                </p>

                {/* Bullets with pointers */}
                <div className="space-y-4">
                  {feature.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="text-brand-red font-bold select-none mt-0.5">▸</span>
                      <p className="font-sans text-neutral-400 leading-relaxed">
                        <strong className="text-white font-bold">{bullet.bold}</strong> — {bullet.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 08. DESIGN SYSTEM SECTION */}
      <section id="system" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        
        {/* Section Header exactly matching colorssection.png */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full border border-brand-red/60 flex items-center justify-center font-bebas text-lg text-brand-red">
            08
          </div>
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            DESIGN SYSTEM
          </span>
          <div className="flex-grow h-[1px] bg-neutral-900/60"></div>
        </div>

        <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-wider mb-16 uppercase leading-[0.9]">
          COLORS THAT COMMUNICATE.<br />
          <span className="text-brand-red">TYPE THAT TRUSTS.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Montserrat Typography Card */}
          <div className="lg:col-span-6 bg-[#050505] border border-neutral-900 rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="text-[10px] font-bold text-neutral-500 tracking-[0.25em] uppercase font-sans">
                MONTSERRAT &middot; PRIMARY DISPLAY
              </div>
              <div className="h-[1px] bg-neutral-900/60 mt-4 mb-8"></div>
              
              {/* Typography Preview */}
              <div className="select-none pointer-events-none">
                <span className="font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-none text-white tracking-wide block">
                  AaBbCc
                </span>
                <span className="font-sans font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-none text-brand-red tracking-wide block mt-3">
                  123 &mdash; !
                </span>
              </div>
            </div>

            <div className="mt-12">
              {/* Why Montserrat */}
              <div className="text-[10px] font-bold text-brand-red tracking-[0.2em] uppercase font-sans mb-3">
                WHY MONTSERRAT?
              </div>
              <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-lg">
                Montserrat carries clean, geometric confidence, it reads like a modern mission briefing. Bold, balanced, intentional. Paired with Inter and Space Mono, it builds a hierarchy that feels structured yet approachable.
              </p>
            </div>
          </div>

          {/* Right Column: Color Palette Card */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-2xl border border-neutral-900/40 bg-[#050505]">
              <img 
                src={colorsImg} 
                alt="S.E.H.A.T Color Palette" 
                className="w-full h-auto block select-none pointer-events-none" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* 09. USER JOURNEY SECTION */}
      <section id="journey" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        
        {/* Section Header exactly matching aday.png */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full border border-brand-red/60 flex items-center justify-center font-bebas text-lg text-brand-red">
            09
          </div>
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            SCREEN WALKTHROUGH
          </span>
          <div className="flex-grow h-[1px] bg-neutral-900/60"></div>
        </div>

        <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-wider mb-6 uppercase leading-[0.9]">
          A DAY IN THE LIFE OF<br />
          <span className="text-brand-red">A S.E.H.A.T USER.</span>
        </h2>

        <p className="font-sans text-neutral-400 text-sm sm:text-base mb-16 max-w-3xl leading-relaxed">
          Arjun opens s.e.h.a.t on a Tuesday morning. Here's how the experience unfolds &mdash; and why each moment was designed the way it was.
        </p>

        {/* 2-Column Grid of Walkthrough Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {journeySteps.map((step, idx) => {
            // Faint border separator on all but the last row (steps 4 and 5 in 0-indexed list are the last row)
            const hasSeparator = idx < 4;
            
            return (
              <div 
                key={idx} 
                className={`flex gap-6 items-start ${hasSeparator ? "border-b border-neutral-900/40 pb-8" : ""}`}
              >
                {/* Icon Container with radial glow */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-red/45 bg-black flex items-center justify-center relative shadow-[0_0_15px_rgba(229,9,20,0.15)]">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.1)_0%,transparent_70%)] pointer-events-none"></div>
                  
                  {step.icon === "home" && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {step.icon === "dna" && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                    </svg>
                  )}
                  {step.icon === "calendar" && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  )}
                  {step.icon === "people" && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  )}
                  {step.icon === "siren" && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12M12 8a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                  )}
                  {step.icon === "sparkle" && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.178-.363.673-.363.851 0l1.838 3.73 4.117.598c.402.059.563.555.272.846l-2.98 2.903.704 4.099c.069.403-.353.71-.714.52l-3.684-1.937-3.684 1.938c-.36.19-.783-.117-.714-.52l.704-4.099-2.98-2.903c-.291-.291-.13-.787.272-.846l4.117-.599 1.838-3.73z" />
                    </svg>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-bebas text-lg sm:text-xl text-white tracking-wider mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. CHALLENGES SECTION */}
      <section id="challenges" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        
        {/* Section Header exactly matching hardcalls.png */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full border border-brand-red/60 flex items-center justify-center font-bebas text-lg text-brand-red">
            10
          </div>
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            CHALLENGES &amp; DECISIONS
          </span>
          <div className="flex-grow h-[1px] bg-neutral-900/60"></div>
        </div>

        <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-wider mb-6 uppercase leading-[0.9]">
          THE HARD CALLS<br />
          <span className="text-brand-red">NO ONE TALKS ABOUT.</span>
        </h2>

        <p className="font-sans text-neutral-400 text-sm sm:text-base mb-16 max-w-3xl leading-relaxed">
          The most interesting design work happens in the tension between competing needs. Here are the trade-offs that shaped the final product.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {challenges.map((challenge, idx) => (
            <div 
              key={idx} 
              className="bg-[#050505] border border-neutral-900/80 rounded-2xl p-8 hover:border-brand-red/35 transition-all duration-300 flex flex-col gap-6"
            >
              {/* Header inside card */}
              <div className="flex items-center gap-4">
                {/* Icon Badge */}
                <div className="flex-shrink-0 w-11 h-11 rounded-lg border border-brand-red/20 bg-brand-red/5 flex items-center justify-center">
                  {challenge.icon === "warning" && (
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                  {challenge.icon === "target" && (
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  )}
                  {challenge.icon === "grid" && (
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                      <line x1="15" y1="3" x2="15" y2="21" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="3" y1="15" x2="21" y2="15" />
                    </svg>
                  )}
                  {challenge.icon === "halfcircle" && (
                    <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 002 12a10 10 0 0010 10V2z" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bebas text-xl sm:text-2xl text-white tracking-wider leading-tight">
                  {challenge.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">
                {challenge.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. IMPACT SECTION */}
      <section id="impact" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        
        {/* Section Header exactly matching whatgood.png */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full border border-brand-red/60 flex items-center justify-center font-bebas text-lg text-brand-red">
            11
          </div>
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            IMPACT &amp; OUTCOMES
          </span>
          <div className="flex-grow h-[1px] bg-neutral-900/60"></div>
        </div>

        <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-wider mb-6 uppercase leading-[0.9]">
          WHAT GOOD DESIGN<br />
          <span className="text-brand-red">LOOKS LIKE IN NUMBERS.</span>
        </h2>

        <p className="font-sans text-neutral-400 text-sm sm:text-base mb-16 max-w-3xl leading-relaxed">
          Based on usability testing with 18 participants, benchmarked against Practo and PharmEasy with comparable task scenarios.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-[#050505] border border-neutral-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <span className="font-sans text-5xl sm:text-6xl text-brand-red font-black tracking-tight mb-4 block">
                {m.num}
              </span>
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase block mb-1">
                  {m.label}
                </span>
                <div className="h-[1px] bg-neutral-900/60 my-3"></div>
                <span className="font-sans text-[9px] font-bold tracking-[0.15em] text-neutral-300 uppercase block">
                  {m.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative outcomes cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-brand-red/20 bg-neutral-950/20 rounded-2xl p-8 hover:border-brand-red/35 transition-all duration-300">
            <h4 className="font-bebas text-xl text-white tracking-wider mb-4">USER TRUST &amp; CONFIDENCE</h4>
            <p className="font-sans text-neutral-450 text-xs sm:text-sm leading-relaxed">
              Participants reported significantly higher confidence &mdash; 78% felt 'informed enough not to immediately call a doctor' after seeing a simplified report.
            </p>
          </div>
          <div className="border border-brand-red/20 bg-neutral-950/20 rounded-2xl p-8 hover:border-brand-red/35 transition-all duration-300">
            <h4 className="font-bebas text-xl text-white tracking-wider mb-4">EMERGENCY FEATURE ADOPTION</h4>
            <p className="font-sans text-neutral-450 text-xs sm:text-sm leading-relaxed">
              Accident reporting rated highest in 'would actually use' intent &mdash; 86% said it addressed a fear no app had ever solved.
            </p>
          </div>
          <div className="border border-brand-red/20 bg-neutral-950/20 rounded-2xl p-8 hover:border-brand-red/35 transition-all duration-300">
            <h4 className="font-bebas text-xl text-white tracking-wider mb-4">RETENTION POTENTIAL</h4>
            <p className="font-sans text-neutral-450 text-xs sm:text-sm leading-relaxed">
              Community drove highest dwell time &mdash; 6.2 min/session vs. 2.1 min for non-community apps. Emotional engagement is the retention engine.
            </p>
          </div>
        </div>
      </section>

      {/* 12. FUTURE SECTION */}
      <section id="future" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        
        {/* Section Header exactly matching version.png */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full border border-brand-red/60 flex items-center justify-center font-bebas text-lg text-brand-red">
            12
          </div>
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            FUTURE IMPROVEMENTS
          </span>
          <div className="flex-grow h-[1px] bg-neutral-900/60"></div>
        </div>

        <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-wider mb-16 uppercase leading-[0.9]">
          VERSION 1 WAS THE<br />
          <span className="text-brand-red">BEGINNING, NOT THE DESTINATION.</span>
        </h2>

        <div className="space-y-6">
          {futurePlans.map((plan, idx) => (
            <div 
              key={idx} 
              className="bg-[#050505] border border-neutral-900/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-brand-red/30 transition-all duration-300"
            >
              {/* Version Pill */}
              <div className="flex-shrink-0 border border-brand-red/40 px-4 py-2 rounded-full text-brand-red text-[10px] font-bold tracking-widest uppercase bg-transparent w-fit md:text-center md:min-w-[140px]">
                {plan.pill}
              </div>

              {/* Text Description */}
              <div className="flex-grow">
                <h3 className="font-bebas text-xl text-white tracking-wider mb-2 leading-none uppercase">
                  {plan.title}
                </h3>
                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {plan.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. REFLECTION SECTION */}
      <section id="reflection" className="py-20 max-w-7xl mx-auto px-6 border-b border-neutral-900/40 scroll-mt-16">
        
        {/* Section Header exactly matching finalreflection.png */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-10 rounded-full border border-brand-red/60 flex items-center justify-center font-bebas text-lg text-brand-red">
            13
          </div>
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
            FINAL REFLECTION
          </span>
          <div className="flex-grow h-[1px] bg-neutral-900/60"></div>
        </div>

        {/* Premium Red Gradient Card */}
        <div className="bg-gradient-to-br from-[#E50914] via-[#cc0812] to-[#800000] border border-brand-red/20 rounded-[24px] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle logo watermark in top right corner */}
          <div className="absolute top-8 right-8 w-16 h-16 opacity-[0.07] pointer-events-none select-none text-white">
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99z" />
            </svg>
          </div>

          <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-wider mb-10 leading-tight max-w-4xl uppercase">
            WHAT THIS PROJECT TAUGHT ME ABOUT DESIGNING FOR THE HIGHEST STAKES.
          </h3>

          <div className="font-sans text-white/90 text-sm sm:text-base leading-relaxed space-y-8 max-w-5xl">
            <p>
              Healthcare is the design domain where the gap between good and mediocre work has the most profound real-world consequences. Every choice &mdash; the size of a button, the tone of a summary, the placement of an SOS trigger &mdash; carries weight that goes far beyond aesthetics.
            </p>
            <p>
              Building s.e.h.a.t taught me that <strong className="font-bold text-white">empathy is not a phase of the design process &mdash; it is the design process.</strong> The breakthrough ideas didn't come from competitive analysis. They came from sitting with users' fears: a result you don't understand, an emergency with no one to call, feeling alone in your health journey.
            </p>
            <p>
              Design systems aren't constraints &mdash; they are expressions of care. A consistent type hierarchy, generous touch targets, a colour system rooted in psychology &mdash; that's a promise to every user: <span className="italic">we thought about you, specifically.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION exactly matching finalreflection.png */}
      <section className="relative py-20 border-t border-transparent bg-black z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div>
            <span className="font-sans text-[10px] font-bold text-neutral-500 tracking-[0.25em] uppercase block mb-2">
              NEXT MISSION
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wider uppercase leading-none">
              WANT TO ARCHITECT SOMETHING TOGETHER?
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Link 
              to="/#work" 
              className="font-sans text-xs font-bold tracking-widest bg-transparent border border-white hover:bg-white/10 text-white px-8 py-4.5 transition-all duration-300 flex items-center gap-2.5 uppercase"
            >
              &larr; ALL PROJECTS
            </Link>
            <Link 
              to="/#connect" 
              className="font-sans text-xs font-bold tracking-widest bg-brand-red hover:bg-[#ff1a1a] text-white px-8 py-4.5 transition-all duration-300 flex items-center gap-2.5 uppercase shadow-lg shadow-brand-red/20"
            >
              CONTACT ME &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT & FOOTER */}
      <section id="connect" className="relative py-24 sm:py-32 border-t border-transparent bg-black z-20 overflow-hidden">
        
        {/* Red gradient radial glow at the top of the section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[250px] bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.18)_0%,transparent_70%)] pointer-events-none z-0"></div>

        {/* Batman Profile Image Container */}
        <div className="absolute right-0 top-0 bottom-[260px] sm:bottom-[220px] w-full lg:w-1/2 overflow-hidden pointer-events-none z-10 flex items-start justify-end">
          {/* Red glow behind Batman */}
          <div className="absolute right-[10%] top-[10%] w-[350px] h-[350px] bg-brand-red/10 rounded-full blur-[110px]"></div>
          
          <img 
            src={lastSectionImg} 
            alt="Karnveer Dixit | Contact Batman Design" 
            className="h-full w-auto max-w-none object-contain object-bottom select-none pointer-events-none opacity-25 lg:opacity-100 transition-opacity duration-300 translate-x-[10%] lg:translate-x-0" 
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
            <div>
              <a 
                href="mailto:dixitkarnveer@gmail.com" 
                className="inline-flex items-center gap-3 font-sans text-xs sm:text-sm font-bold tracking-[0.2em] bg-brand-red hover:bg-[#ff1a1a] text-white px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/25 uppercase"
              >
                SEND THE BAT-SIGNAL <span className="text-base">→</span>
              </a>
            </div>
          </div>

          {/* Divider line above contact info columns */}
          <div className="border-t border-transparent my-16"></div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 relative z-20">
            
            {/* Column 1: Get in Touch */}
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-brand-red uppercase">
                GET IN TOUCH
              </span>
              <a 
                href="mailto:dixitkarnveer@gmail.com" 
                className="font-sans text-sm sm:text-base font-bold text-white hover:text-brand-red transition-colors duration-300 inline-flex items-center"
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
                  className="font-sans text-sm sm:text-base font-bold text-white hover:text-brand-red transition-colors duration-300 inline-flex items-center"
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
                  className="font-sans text-sm sm:text-base font-bold text-white hover:text-brand-red transition-colors duration-300 inline-flex items-center"
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
          <div className="border-t border-transparent mt-16 mb-8"></div>

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

    </div>
  );
};

export default CaseStudy;
