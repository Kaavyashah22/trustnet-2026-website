import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, BookOpen, ArrowRight, Shield, Cpu, Database, Users, FileText, ChevronRight, ExternalLink, Clock, X
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
    name: 'Dr. Anupam Tiwari', role: 'Keynote Speaker', init: 'AT', color: 'bg-white/40 text-indigo-900 border-white',
    bio: 'Dr. Tiwari is a leading researcher in Trustworthy AI and distributed ledger technologies. He has published over 50 peer-reviewed papers in top-tier security venues and holds multiple patents in zero-knowledge proof applications.',
    affiliation: 'Manipal University Jaipur'
  },
  { 
    name: 'Dr. Somanath Tripathy', role: 'Plenary Speaker', init: 'ST', color: 'bg-white/40 text-blue-900 border-white',
    bio: 'Dr. Tripathy focuses on data privacy, secure multiparty computation, and cryptographic protocols for cloud environments. His recent work addresses the security implications of quantum computing on modern cryptography.',
    affiliation: 'IIT Patna'
  },
  { 
    name: 'Dr. Gang Li', role: 'Invited Speaker', init: 'GL', color: 'bg-white/40 text-emerald-900 border-white',
    bio: 'An expert in federated learning and adversarial machine learning, Dr. Li brings industry perspective to the challenges of securing AI models in production against data poisoning and inversion attacks.',
    affiliation: 'Deakin University'
  }
];

const partners = [
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education',
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education'
];

export default function ThemeThree() {
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

  const glassVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
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
    <div className="min-h-screen bg-[#f8faff] text-slate-800 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      
      {/* Soft Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200/40 blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-200/40 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[60%] h-[50%] rounded-full bg-purple-200/40 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        
        {/* Floating Pill Header */}
        <div className="pt-6 px-4 absolute top-0 left-0 w-full z-50">
          <header className="max-w-[1200px] mx-auto bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-white/90 rounded-full p-2 h-10 border border-white shadow-sm flex items-center">
                  <img src="/muj-logo.png" alt="Manipal University Jaipur" className="h-full w-auto object-contain" />
                </div>
                <span className="text-xl font-black tracking-tight text-[#1A4F8A]">
                  TRUSTNET<span className="text-[#F26522]">'26</span>
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <Link to="/" className="text-sm font-bold text-slate-500 hover:text-[#1A4F8A] transition-colors">
                  Back to Hub
                </Link>
                <div className="w-px h-4 bg-slate-300"></div>
                <button className="text-sm font-bold text-[#1A4F8A] hover:text-[#F26522] transition-colors">
                  Menu
                </button>
              </div>
            </div>
          </header>
        </div>

        <main className="max-w-[1200px] mx-auto px-4 sm:px-6">
          
          {/* Above-the-fold Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center min-h-[90vh] pt-32 lg:pt-20 pb-16 justify-center lg:justify-between">
            
            {/* Left: Titles */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50/50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-6 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                International Conference on Trusted Networks
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1A4F8A] via-indigo-700 to-purple-800 tracking-tighter mb-6 leading-[1.1] pb-2">
                Securing the <br /> Intelligent Networks <br className="hidden lg:block"/> of Tomorrow
              </h1>
              
              <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium mb-10 leading-relaxed">
                Join global experts at Manipal University Jaipur to explore the frontier of cybersecurity, AI, and resilient communication infrastructures.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button className="bg-[#F26522] hover:bg-[#e05616] text-white px-8 py-3.5 rounded-2xl font-bold text-lg transition-all shadow-[0_8px_25px_rgba(242,101,34,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2">
                  Submit Paper <ArrowRight size={20} />
                </button>
                <button className="bg-white/50 hover:bg-white/80 backdrop-blur-md border border-white/80 text-indigo-900 px-8 py-3.5 rounded-2xl font-bold text-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                  <FileText size={20} /> Call for Papers
                </button>
              </div>
            </motion.div>

            {/* Right: Quick Info Dashboard Panel (Glassmorphism) */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-md lg:w-[420px] shrink-0 z-10">
              <div className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_rgb(0,0,0,0.05)] rounded-[2rem] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                
                {/* Timer */}
                <div className="mb-8">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Clock size={16} /> Submission Deadline
                  </div>
                  <div className="flex justify-between gap-3">
                    {[
                      { label: 'Days', value: timeLeft.days },
                      { label: 'Hours', value: timeLeft.hours },
                      { label: 'Mins', value: timeLeft.minutes },
                      { label: 'Secs', value: timeLeft.seconds },
                    ].map((unit, idx) => (
                      <div key={idx} className="flex-1 bg-white/60 rounded-xl py-3 text-center border border-white/40 shadow-sm backdrop-blur-sm">
                        <div className="text-2xl sm:text-3xl font-black text-[#1A4F8A] font-mono leading-none">
                          {String(unit.value).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] font-bold text-slate-500 mt-1.5 uppercase">{unit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/60 transition-colors hover:bg-white/80 shadow-sm">
                    <div className="bg-indigo-100 p-2.5 rounded-xl text-indigo-600 shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">Feb 16-17, 2026</div>
                      <div className="text-xs font-semibold text-indigo-600 mt-0.5">Hybrid Format</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/60 transition-colors hover:bg-white/80 shadow-sm">
                    <div className="bg-orange-100 p-2.5 rounded-xl text-[#F26522] shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">Manipal University Jaipur</div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">Rajasthan, India</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/60 transition-colors hover:bg-white/80 shadow-sm">
                    <div className="bg-blue-100 p-2.5 rounded-xl text-[#1A4F8A] shrink-0">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">Springer LNNS</div>
                      <div className="text-xs font-semibold text-[#1A4F8A] mt-0.5">Indexed in Scopus</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Infinite Marquee */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="border-y border-white/50 bg-white/20 backdrop-blur-sm overflow-hidden py-4 mb-24 relative shadow-sm rounded-2xl">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f0f4fd] to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f0f4fd] to-transparent z-10 pointer-events-none rounded-r-2xl"></div>
            <div className="flex whitespace-nowrap animate-marquee pause-on-hover w-max">
              {partners.map((partner, i) => (
                <div key={i} className="flex items-center gap-10 mx-10 group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:scale-150 group-hover:bg-[#F26522] transition-all"></div>
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-sm group-hover:text-indigo-900 transition-colors">{partner}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Schedule */}
        <div id="schedule" className="scroll-mt-24"></div>
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24 relative z-20">
            <div className="bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_8px_40px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 lg:p-10">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div className="flex items-center gap-2 text-indigo-700 font-black text-xl uppercase tracking-widest">
                  <Calendar size={24} /> Conference Schedule
                </div>
                
                {/* Day Toggle */}
                <div className="flex bg-white/60 p-1.5 rounded-xl border border-white/80 shadow-inner">
                  <button 
                    onClick={() => setActiveDay('day1')}
                    className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm ${activeDay === 'day1' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 bg-transparent border-transparent'}`}
                  >
                    Day 1 (Feb 16)
                  </button>
                  <button 
                    onClick={() => setActiveDay('day2')}
                    className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm ${activeDay === 'day2' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 bg-transparent border-transparent'}`}
                  >
                    Day 2 (Feb 17)
                  </button>
                </div>
              </div>

              <div className="relative min-h-[400px]">
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
                      <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-2xl bg-white/60 border border-white/80 hover:border-indigo-200 hover:bg-white/90 transition-all cursor-default group shadow-sm hover:shadow-md">
                        <div className="text-[#F26522] font-mono font-bold shrink-0 md:w-32 mt-0.5 text-lg">{event.time}</div>
                        <div>
                          <div className="text-slate-800 font-bold text-xl mb-1.5 group-hover:text-indigo-800 transition-colors">{event.title}</div>
                          {event.speaker && <div className="text-slate-500 text-sm font-semibold mb-3">By <span className="text-indigo-600">{event.speaker}</span></div>}
                          <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg border ${
                            event.type === 'keynote' ? 'bg-purple-100/50 text-purple-700 border-purple-200' :
                            event.type === 'track' ? 'bg-blue-100/50 text-blue-700 border-blue-200' :
                            'bg-slate-100 text-slate-600 border-slate-200'
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

          {/* Network Nodes (Research Tracks) */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24 relative z-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-800">Research Ecosystem</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6 relative">
              <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent -translate-y-1/2 z-0"></div>
              
              {[
                { title: 'Applied Cryptography & Network Security', icon: Shield },
                { title: 'Data Security & Privacy', icon: Database },
                { title: 'Security & AI / Machine Learning', icon: Cpu }
              ].map((track, i) => (
                <motion.div whileHover={{ y: -10 }} key={i} className="relative z-10 flex-1 bg-white/70 backdrop-blur-md border border-white shadow-xl rounded-3xl p-6 text-center group transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-4 border border-indigo-100/50 shadow-inner group-hover:scale-110 transition-transform relative overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-600/5 blur-xl group-hover:bg-indigo-600/20 transition-colors"></div>
                    <track.icon size={28} className="relative z-10" />
                  </div>
                  <h3 className="font-bold text-slate-800 leading-tight">{track.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call for Papers & Dates Grid */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24 relative z-20">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Call for Papers */}
              <motion.div variants={glassVariant} className="bg-white/60 backdrop-blur-md border border-white/60 shadow-[0_8px_40px_rgb(0,0,0,0.04)] rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-[#F26522]/20 transition-colors duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#F26522] text-sm font-bold uppercase tracking-widest mb-6">
                    <FileText size={18} /> Call For Papers
                  </div>
                  <h3 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">Submit Your Research</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                    We invite original, unpublished contributions addressing cybersecurity, trusted AI, and secure networks. All accepted and presented papers will be published in <strong className="text-[#1A4F8A]">Springer LNNS</strong>, indexed in Scopus.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-between text-sm bg-white/80 p-4 rounded-xl border border-white shadow-sm hover:bg-white transition-colors cursor-default">
                      <div className="flex items-center gap-2 text-slate-700 font-semibold">
                        <ChevronRight size={16} className="text-[#1A4F8A]" /> Full Research Papers
                      </div>
                      <div className="font-mono text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100">6–8 pages</div>
                    </div>
                    <div className="flex items-center justify-between text-sm bg-white/80 p-4 rounded-xl border border-white shadow-sm hover:bg-white transition-colors cursor-default">
                      <div className="flex items-center gap-2 text-slate-700 font-semibold">
                        <ChevronRight size={16} className="text-[#1A4F8A]" /> Short / WIP Papers
                      </div>
                      <div className="font-mono text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100">4–6 pages</div>
                    </div>
                  </div>
                  <button className="w-full bg-[#1A4F8A] hover:bg-[#153B6A] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 group-hover:shadow-xl">
                    Submit via Microsoft CMT <ExternalLink size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Important Dates */}
              <motion.div variants={glassVariant} className="bg-white/60 backdrop-blur-md border border-white/60 shadow-[0_8px_40px_rgb(0,0,0,0.04)] rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none group-hover:bg-indigo-400/20 transition-colors duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#1A4F8A] text-sm font-bold uppercase tracking-widest mb-10">
                    <Calendar size={18} /> Important Dates
                  </div>
                  
                  <div className="space-y-12 pl-4">
                    <div className="border-l-2 border-indigo-100 pl-8 relative group/item">
                      <div className="absolute w-4 h-4 bg-gradient-to-br from-[#1A4F8A] to-indigo-600 rounded-full -left-[9px] top-1 shadow-[0_0_12px_rgba(26,79,138,0.4)] group-hover/item:scale-150 transition-transform"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="text-slate-800 font-bold text-lg">Full Manuscript Submission</div>
                        <div className="font-mono text-sm bg-white border border-indigo-100 text-[#1A4F8A] px-4 py-1.5 rounded-full font-bold shadow-sm">Dec 30, 2025</div>
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-slate-200 pl-8 relative group/item">
                      <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[9px] top-1 border-2 border-white group-hover/item:scale-150 transition-transform"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="text-slate-600 font-bold text-lg">Author Notification</div>
                        <div className="font-mono text-sm text-slate-500 font-semibold bg-white/50 px-4 py-1.5 rounded-full border border-white">Jan 10, 2026</div>
                      </div>
                    </div>

                    <div className="border-l-2 border-transparent pl-8 relative h-10 group/item">
                      <div className="absolute w-4 h-4 bg-gradient-to-br from-[#F26522] to-orange-400 rounded-full -left-[9px] top-1 shadow-[0_0_12px_rgba(242,101,34,0.4)] group-hover/item:scale-150 transition-transform"></div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="text-slate-800 font-bold text-lg">Conference Begins</div>
                        <div className="text-[#F26522] font-mono text-sm font-bold bg-white border border-orange-100 px-4 py-1.5 rounded-full shadow-sm">Feb 16, 2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.section>

          {/* Eminent Speakers */}
        <div id="speakers" className="scroll-mt-24"></div>
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-12 relative z-20">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#1A4F8A] font-bold uppercase tracking-widest text-sm mb-4">
                <Users size={18} /> Eminent Speakers
              </div>
              <h2 className="text-4xl font-black text-slate-800 tracking-tight text-center">World-Class Minds</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {speakersData.map((speaker, i) => (
                <div key={i} onClick={() => setSelectedSpeaker(speaker)} className="flex flex-col items-center text-center cursor-pointer group">
                  <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm border-2 border-white shadow-xl flex items-center justify-center font-black text-3xl text-indigo-900 mb-6 relative hover:scale-105 transition-transform">
                    <div className="absolute inset-[-4px] bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>
                    {speaker.init}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">{speaker.name}</h3>
                  <div className="text-[#F26522] font-semibold text-sm bg-white/60 px-3 py-1 rounded-full border border-white">{speaker.role}</div>
                </div>
              ))}
            </div>
          </motion.section>

        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/60 bg-white/50 backdrop-blur-md pt-16 pb-8 mt-24 relative z-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-xl font-black tracking-tight text-[#1A4F8A] mb-4">
                TRUSTNET<span className="text-[#F26522]">'26</span>
              </div>
              <p className="text-slate-600 text-sm max-w-sm leading-relaxed font-medium">
                Empowering the digital future through collaborative innovation in cybersecurity and artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-slate-800 font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li><a href="#" className="hover:text-[#1A4F8A] transition-colors">Call for Papers</a></li>
                <li><a href="#" className="hover:text-[#1A4F8A] transition-colors">Important Dates</a></li>
                <li><a href="#" className="hover:text-[#1A4F8A] transition-colors">Committee</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-800 font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li>Manipal University Jaipur</li>
                <li>Dehmi Kalan, Jaipur</li>
                <li>Rajasthan 303007, India</li>
                <li><a href="mailto:contact@trustnetcon.in" className="text-[#F26522] hover:text-[#d05318] transition-colors mt-2 inline-block">contact@trustnetcon.in</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
            <div>&copy; 2026 TrustNet Conference. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
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
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md cursor-pointer"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_rgb(0,0,0,0.1)] rounded-3xl p-8 max-w-lg w-full z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-200/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              <button 
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 bg-white/60 hover:bg-white/90 p-2 rounded-full transition-colors shadow-sm"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-6 mb-8 mt-2 relative z-10">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center font-black text-2xl border ${selectedSpeaker.color} shadow-sm backdrop-blur-sm`}>
                  {selectedSpeaker.init}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{selectedSpeaker.name}</h3>
                  <div className="text-[#F26522] font-bold text-sm">{selectedSpeaker.role}</div>
                  <div className="text-slate-500 text-xs font-mono mt-1.5 bg-white/60 border border-white inline-block px-2.5 py-1 rounded-md">{selectedSpeaker.affiliation}</div>
                </div>
              </div>
              
              <div className="space-y-3 relative z-10">
                <h4 className="text-xs font-bold text-indigo-700 uppercase tracking-widest border-b border-white/60 pb-2">Biography</h4>
                <p className="text-slate-600 leading-relaxed text-sm pt-2 font-medium">
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
