import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronRight, FileText, Calendar, BookOpen, MapPin, Users, ExternalLink, Shield, Database, Cpu, ChevronLeft, Clock, X 
} from 'lucide-react';

const schedule = {
  day1: [
    { time: '09:00 AM', title: 'Registration & Welcome', type: 'general' },
    { time: '10:00 AM', title: 'Opening Keynote: Trust in AI', speaker: 'Dr. Anupam Tiwari', type: 'keynote' },
    { time: '11:30 AM', title: 'Coffee Break & Networking', type: 'break' },
    { time: '12:00 PM', title: 'Technical Session 1: Applied Cryptography', type: 'track' },
    { time: '01:30 PM', title: 'Lunch Break', type: 'break' },
    { time: '02:30 PM', title: 'Plenary: Data Security & Privacy', speaker: 'Dr. Somanath Tripathy', type: 'keynote' }
  ],
  day2: [
    { time: '09:30 AM', title: 'Invited Talk: Federated Learning', speaker: 'Dr. Gang Li', type: 'keynote' },
    { time: '11:00 AM', title: 'Technical Session 2: Security in AI', type: 'track' },
    { time: '12:30 PM', title: 'Lunch Break', type: 'break' },
    { time: '01:30 PM', title: 'Doctoral Symposium', type: 'track' },
    { time: '03:30 PM', title: 'Closing Ceremony & Awards', type: 'general' }
  ]
};

const speakersData = [
  { 
    name: 'Dr. Anupam Tiwari', 
    role: 'Keynote Speaker', 
    init: 'AT', 
    color: 'bg-[#F26522]/10 text-[#F26522] border-[#F26522]/30',
    bio: 'Dr. Tiwari is a leading researcher in Trustworthy AI and distributed ledger technologies. He has published over 50 peer-reviewed papers in top-tier security venues and holds multiple patents in zero-knowledge proof applications.',
    affiliation: 'Manipal University Jaipur'
  },
  { 
    name: 'Dr. Somanath Tripathy', 
    role: 'Plenary Speaker', 
    init: 'ST', 
    color: 'bg-[#60A5FA]/10 text-[#60A5FA] border-[#60A5FA]/30',
    bio: 'Dr. Tripathy focuses on data privacy, secure multiparty computation, and cryptographic protocols for cloud environments. His recent work addresses the security implications of quantum computing on modern cryptography.',
    affiliation: 'IIT Patna'
  },
  { 
    name: 'Dr. Gang Li', 
    role: 'Invited Speaker', 
    init: 'GL', 
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    bio: 'An expert in federated learning and adversarial machine learning, Dr. Li brings industry perspective to the challenges of securing AI models in production against data poisoning and inversion attacks.',
    affiliation: 'Deakin University'
  }
];

const partners = [
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education',
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education'
];

export default function ThemeOne() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeDay, setActiveDay] = useState('day1');
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    if (typeof setIsMobileMenuOpen !== 'undefined') setIsMobileMenuOpen(false);
  };


  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  useEffect(() => {
    const targetDate = new Date('December 30, 2025 23:59:59').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-[#030712]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-1 rounded h-10 flex items-center">
              <img src="/muj-logo.png" alt="MUJ Logo" className="h-full w-auto object-contain" />
            </div>
            <div>
              <div className="text-xl font-black text-white tracking-wide">
                TRUSTNET<span className="text-[#F26522]">'26</span>
              </div>
              <div className="text-[10px] text-[#60A5FA] font-bold uppercase tracking-widest mt-0.5">
                Trusted Networks & AI Systems
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/" className="hidden sm:flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors mr-2">
              <ChevronLeft size={16} /> Hub
            </Link>
            <div className="hidden sm:flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Hybrid
            </div>
            <button className="bg-[#F26522] hover:bg-[#e05616] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(242,101,34,0.2)]">
              Submit Paper
            </button>
            <button className="text-slate-400 hover:text-white p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start justify-between">
            
            {/* Left: Titles */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 text-center lg:text-left z-10 pt-4">
              <h1 className="text-6xl sm:text-7xl md:text-[5.5rem] font-black text-slate-100 mb-4 tracking-tighter leading-none">
                TRUSTNET<span className="text-[#F26522]">'26</span>
              </h1>
              <p className="text-[#60A5FA] text-xl mb-4 font-mono font-medium tracking-wide">International Conference on</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                Trusted Networks and Intelligent Systems
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
                Join global experts at Manipal University Jaipur to explore the frontier of cybersecurity, AI, and resilient communication infrastructures.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button className="bg-[#F26522] hover:bg-[#e05616] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(242,101,34,0.3)] flex items-center gap-2 group text-lg">
                  Submit Paper <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 backdrop-blur-sm text-lg">
                  <FileText size={20} /> Call for Papers
                </button>
              </div>
            </motion.div>

            {/* Right: Quick Info Panel */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md lg:w-[420px] shrink-0 z-10">
              <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 shadow-2xl rounded-[2rem] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                
                {/* Timer */}
                <div className="mb-8">
                  <div className="text-xs font-bold text-[#60A5FA] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Clock size={16} /> Submission Deadline
                  </div>
                  <div className="flex justify-between gap-3">
                    {[
                      { label: 'Days', value: timeLeft.days },
                      { label: 'Hours', value: timeLeft.hours },
                      { label: 'Mins', value: timeLeft.minutes },
                      { label: 'Secs', value: timeLeft.seconds },
                    ].map((unit, idx) => (
                      <div key={idx} className="flex-1 bg-slate-950/50 rounded-xl py-3 text-center border border-slate-800 shadow-inner">
                        <div className="text-2xl sm:text-3xl font-black text-white font-mono leading-none">
                          {String(unit.value).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] font-bold text-slate-500 mt-1.5 uppercase">{unit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 transition-colors hover:bg-slate-800/80 shadow-sm">
                    <div className="bg-[#F26522]/10 p-2.5 rounded-xl text-[#F26522] shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Feb 16-17, 2026</div>
                      <div className="text-xs font-semibold text-[#60A5FA] mt-0.5">Hybrid Format</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 transition-colors hover:bg-slate-800/80 shadow-sm">
                    <div className="bg-[#60A5FA]/10 p-2.5 rounded-xl text-[#60A5FA] shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Manipal University Jaipur</div>
                      <div className="text-xs font-medium text-slate-400 mt-0.5">Rajasthan, India</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 transition-colors hover:bg-slate-800/80 shadow-sm">
                    <div className="bg-emerald-500/10 p-2.5 rounded-xl text-emerald-400 shrink-0">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Springer LNNS</div>
                      <div className="text-xs font-semibold text-emerald-400 mt-0.5">Indexed in Scopus</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="border-y border-slate-800/60 bg-[#0B1120] overflow-hidden py-5 mb-20 relative shadow-inner">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="flex whitespace-nowrap animate-marquee pause-on-hover w-max">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center gap-10 mx-10 group cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] group-hover:scale-150 group-hover:bg-[#F26522] transition-all"></div>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors">{partner}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="space-y-6">
            
            {/* Important Dates */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-[2rem] p-8 shadow-lg hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2 text-[#60A5FA] text-sm font-bold uppercase tracking-widest mb-10">
                <Calendar size={18} /> Important Dates
              </div>
              
              <div className="space-y-10 pl-2">
                <div className="border-l-2 border-slate-800 pl-8 relative group">
                  <div className="absolute w-3.5 h-3.5 bg-[#3B82F6] rounded-full -left-[9px] top-1 shadow-[0_0_12px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-transform"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-white font-bold text-lg group-hover:text-[#60A5FA] transition-colors">Full Manuscript Submission</div>
                    <div className="text-slate-400 font-mono text-sm bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 font-semibold">Dec 30, 2025</div>
                  </div>
                </div>
                
                <div className="border-l-2 border-slate-800 pl-8 relative group">
                  <div className="absolute w-3.5 h-3.5 bg-slate-600 rounded-full -left-[9px] top-1 group-hover:scale-150 transition-transform"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-slate-300 font-bold text-lg group-hover:text-white transition-colors">Author Notification</div>
                    <div className="text-slate-500 font-mono text-sm font-semibold">Jan 10, 2026</div>
                  </div>
                </div>

                <div className="border-l-2 border-slate-800 pl-8 relative pb-2 group">
                  <div className="absolute w-3.5 h-3.5 bg-[#F26522] rounded-full -left-[9px] top-1 shadow-[0_0_12px_rgba(242,101,34,0.8)] group-hover:scale-150 transition-transform"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-white font-bold text-lg group-hover:text-[#F26522] transition-colors">Conference Begins</div>
                    <div className="text-[#F26522] font-mono text-sm font-bold bg-[#F26522]/10 px-3 py-1.5 rounded-lg">Feb 16, 2026</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Publication & Indexing */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-[2rem] p-8 shadow-lg hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2 text-[#60A5FA] text-sm font-bold uppercase tracking-widest mb-8">
                <BookOpen size={18} /> Publication & Indexing
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-default">
                  <div className="mt-2 w-2 h-2 rounded-full bg-[#F26522] group-hover:scale-150 transition-transform"></div>
                  <div>
                    <div className="text-white font-bold text-lg mb-0.5 group-hover:text-[#F26522] transition-colors">Springer LNNS</div>
                    <div className="text-slate-500 text-sm font-medium">Lecture Notes in Networks and Systems</div>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-800/60 ml-6"></div>
                <div className="flex items-start gap-4 group cursor-default">
                  <div className="mt-2 w-2 h-2 rounded-full bg-[#3B82F6] group-hover:scale-150 transition-transform"></div>
                  <div>
                    <div className="text-white font-bold text-lg mb-0.5 group-hover:text-[#60A5FA] transition-colors">Scopus Indexed</div>
                    <div className="text-slate-500 text-sm font-medium">Elsevier Abstract & Citation Database</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Submit Your Research (Call for Papers) */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-700/60 rounded-[2rem] p-8 shadow-xl relative overflow-hidden group hover:border-slate-600 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-[#F26522]/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#F26522] text-sm font-bold uppercase tracking-widest mb-6">
                  <FileText size={18} /> Call For Papers
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Submit Your Research</h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                  We invite original, unpublished contributions addressing cybersecurity, trusted AI, and secure networks. All accepted and presented papers will be published in <strong className="text-slate-200">Springer LNNS</strong>, indexed in Scopus.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center justify-between text-sm bg-slate-950/50 p-3 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                      <ChevronRight size={16} className="text-[#F26522]" /> Full Research Papers
                    </div>
                    <div className="font-mono text-slate-500 font-semibold">6–8 pages</div>
                  </div>
                  <div className="flex items-center justify-between text-sm bg-slate-950/50 p-3 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                      <ChevronRight size={16} className="text-[#F26522]" /> Short / WIP Papers
                    </div>
                    <div className="font-mono text-slate-500 font-semibold">4–6 pages</div>
                  </div>
                </div>

                <button className="w-full bg-[#F26522] hover:bg-[#e05616] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(242,101,34,0.25)] flex items-center justify-center gap-2 group/btn">
                  Submit via Microsoft CMT <ExternalLink size={18} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Eminent Speakers */}
        <div id="speakers" className="scroll-mt-24"></div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-[2rem] p-8 shadow-lg hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2 text-[#F26522] text-sm font-bold uppercase tracking-widest mb-8">
                <Users size={18} /> Keynote Speakers
              </div>
              <div className="space-y-6">
                {speakersData.map((speaker, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedSpeaker(speaker)}
                    className="flex items-center gap-5 group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-slate-800/50 transition-colors"
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg border ${speaker.color} group-hover:scale-110 transition-transform shadow-inner`}>
                      {speaker.init}
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg group-hover:text-slate-200 transition-colors">{speaker.name}</div>
                      <div className="text-slate-500 text-sm font-mono mt-0.5">{speaker.role}</div>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800">
                <button className="text-[#F26522] font-bold text-sm flex items-center gap-1 hover:text-white transition-colors">
                  View all speakers <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Interactive Schedule Section */}
        <div id="schedule" className="scroll-mt-24"></div>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-slate-900/60 border border-slate-800 rounded-[2rem] p-8 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="flex items-center gap-2 text-[#60A5FA] text-lg font-black uppercase tracking-widest">
              <Calendar size={24} /> Conference Schedule
            </div>
            
            {/* Day Toggle */}
            <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 shadow-inner">
              <button 
                onClick={() => setActiveDay('day1')}
                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${activeDay === 'day1' ? 'bg-[#1A4F8A] text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Day 1 (Feb 16)
              </button>
              <button 
                onClick={() => setActiveDay('day2')}
                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${activeDay === 'day2' ? 'bg-[#1A4F8A] text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Day 2 (Feb 17)
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {schedule[activeDay].map((event, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 p-5 md:p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all cursor-default">
                    <div className="text-[#F26522] font-mono font-bold shrink-0 md:w-28 mt-0.5 tracking-tight">{event.time}</div>
                    <div>
                      <div className="text-white font-bold text-xl mb-1.5">{event.title}</div>
                      {event.speaker && <div className="text-[#60A5FA] text-sm font-semibold mb-3">By {event.speaker}</div>}
                      <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md ${
                        event.type === 'keynote' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                        event.type === 'track' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                        'bg-slate-800/50 text-slate-400 border border-slate-700'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Conference Tracks */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 mb-10">
        <div className="text-[#60A5FA] text-sm font-bold uppercase tracking-widest mb-4">
          Research Scope
        </div>
        <div id="tracks"></div>
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Conference Tracks</h2>
        <p className="text-slate-400 max-w-3xl mb-12 text-lg leading-relaxed">
          Submissions are invited across all primary research areas in cybersecurity, trusted computing, and intelligent systems. Interdisciplinary contributions are strongly encouraged.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Applied Cryptography & Network Security', icon: Shield },
            { title: 'Data Security & Privacy', icon: Database },
            { title: 'Security & AI / Machine Learning', icon: Cpu }
          ].map((track, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-600 hover:bg-slate-800/50 transition-all group cursor-pointer shadow-lg hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center text-[#60A5FA] mb-6 group-hover:scale-110 group-hover:text-[#F26522] group-hover:border-[#F26522]/30 transition-all shadow-inner">
                <track.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#F26522] transition-colors">{track.title}</h3>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#0A0A0A] pt-16 pb-8 mt-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-xl font-bold tracking-tight text-white mb-4">
                TRUSTNET<span className="text-orange-500">'26</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Empowering the digital future through collaborative innovation in cybersecurity and artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Call for Papers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Important Dates</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Committee</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Manipal University Jaipur</li>
                <li>Dehmi Kalan, Jaipur</li>
                <li>Rajasthan 303007, India</li>
                <li><a href="mailto:contact@trustnetcon.in" className="text-orange-500 hover:text-orange-400 transition-colors mt-2 inline-block">contact@trustnetcon.in</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div>&copy; 2026 TrustNet Conference. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Speaker Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="absolute inset-0 bg-[#030712]/80 backdrop-blur-md cursor-pointer"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#0f172a] border border-slate-700 shadow-2xl rounded-3xl p-8 max-w-lg w-full z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F26522]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              <button 
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-6 mb-8 mt-2">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center font-black text-2xl border ${selectedSpeaker.color} shadow-inner`}>
                  {selectedSpeaker.init}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedSpeaker.name}</h3>
                  <div className="text-[#F26522] font-semibold text-sm">{selectedSpeaker.role}</div>
                  <div className="text-slate-400 text-xs font-mono mt-1.5 bg-slate-800/50 inline-block px-2 py-1 rounded">{selectedSpeaker.affiliation}</div>
                </div>
              </div>
              
              <div className="space-y-3 relative z-10">
                <h4 className="text-xs font-bold text-[#60A5FA] uppercase tracking-widest border-b border-slate-800 pb-2">Biography</h4>
                <p className="text-slate-300 leading-relaxed text-sm pt-2">
                  {selectedSpeaker.bio}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
