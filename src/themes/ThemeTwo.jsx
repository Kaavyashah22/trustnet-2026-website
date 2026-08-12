import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Calendar, BookOpen, Clock, ArrowRight, Menu, X, FileText, ExternalLink, Shield, Database, Cpu, Users
} from 'lucide-react';

const schedule = {
  day1: [
    { time: '09:00 AM', title: 'Registration & Welcome', type: 'general' },
    { time: '10:00 AM', title: 'Opening Keynote: Trust in AI', speaker: 'Dr. Anupam Tiwari', type: 'keynote' },
    { time: '11:30 AM', title: 'Coffee Break & Networking', type: 'break' },
    { time: '12:00 PM', title: 'Technical Session 1: Applied Cryptography', type: 'track' },
    { time: '01:30 PM', title: 'Lunch Break', type: 'break' },
    { time: '02:30 PM', title: 'Plenary: Data Security', speaker: 'Dr. Somanath Tripathy', type: 'keynote' }
  ],
  day2: [
    { time: '09:30 AM', title: 'Invited Talk: Federated Learning', speaker: 'Dr. Gang Li', type: 'keynote' },
    { time: '11:00 AM', title: 'Technical Session 2: Security in AI', type: 'track' },
    { time: '12:30 PM', title: 'Lunch Break', type: 'break' },
    { time: '01:30 PM', title: 'Doctoral Symposium', type: 'track' },
    { time: '03:30 PM', title: 'Closing Ceremony', type: 'general' }
  ]
};

const speakersData = [
  { 
    name: 'Dr. Anupam Tiwari', role: 'Keynote Speaker', init: 'AT', color: 'bg-orange-50 text-[#F26522] border-orange-100',
    bio: 'Dr. Tiwari is a leading researcher in Trustworthy AI and distributed ledger technologies. He has published over 50 peer-reviewed papers in top-tier security venues and holds multiple patents in zero-knowledge proof applications.',
    affiliation: 'Manipal University Jaipur'
  },
  { 
    name: 'Dr. Somanath Tripathy', role: 'Plenary Speaker', init: 'ST', color: 'bg-blue-50 text-[#1A4F8A] border-blue-100',
    bio: 'Dr. Tripathy focuses on data privacy, secure multiparty computation, and cryptographic protocols for cloud environments. His recent work addresses the security implications of quantum computing on modern cryptography.',
    affiliation: 'IIT Patna'
  },
  { 
    name: 'Dr. Gang Li', role: 'Invited Speaker', init: 'GL', color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    bio: 'An expert in federated learning and adversarial machine learning, Dr. Li brings industry perspective to the challenges of securing AI models in production against data poisoning and inversion attacks.',
    affiliation: 'Deakin University'
  }
];

const partners = [
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education',
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education'
];

export default function ThemeTwo() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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


  const bentoVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#F26522] selection:text-white overflow-x-hidden">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="bg-slate-50 rounded-lg p-1.5 h-12 border border-slate-200 flex items-center">
                <img src="/muj-logo.png" alt="Manipal University Jaipur" className="h-full w-auto object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#1A4F8A]">
                TRUSTNET<span className="text-[#F26522]">'26</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
              {['Home', 'Schedule', 'Speakers'].map((item) => {
              const targetId = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <a key={item} href={`#${targetId}`} onClick={(e) => handleScroll(e, targetId)} className="text-sm font-semibold text-slate-600 hover:text-[#1A4F8A] transition-colors">
                  {item}
                </a>
              );
            })}
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              <Link to="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mr-2">
                &larr; Hub
              </Link>
              <button className="bg-[#F26522] hover:bg-[#e05616] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md">
                Register
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl absolute w-full z-40">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Home', 'Schedule', 'Speakers'].map((item) => {
              const targetId = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <a key={item} href={`#${targetId}`} onClick={(e) => handleScroll(e, targetId)} className="block px-3 py-2 text-base font-bold text-slate-700 hover:text-[#1A4F8A]">
                  {item}
                </a>
              );
            })}
              <Link to="/" className="block px-3 py-2 text-base font-bold text-slate-500">
                Back to Hub
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8">
        
        {/* Above-the-fold Hero Bento Grid */}
        <section className="min-h-[85vh] flex flex-col justify-center pb-12">
          <motion.div 
            variants={containerVariant} initial="hidden" animate="visible" 
            className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full"
          >
            
            {/* Main Title Card */}
            <motion.div variants={bentoVariant} className="md:col-span-8 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex flex-col justify-between relative overflow-hidden group hover:border-[#1A4F8A]/20 transition-colors hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26522]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-[#1A4F8A] text-sm font-bold mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#1A4F8A] animate-pulse"></span>
                  International Conference on
                </div>
                <h1 className="text-5xl lg:text-[4rem] font-black text-[#1A4F8A] leading-[1.1] mb-6 tracking-tight">
                  Trusted Networks & Intelligent Systems
                </h1>
                <p className="text-lg text-slate-500 max-w-xl mb-10 font-medium leading-relaxed">
                  Join global experts at Manipal University Jaipur to explore the frontier of cybersecurity, AI, and resilient communication infrastructures.
                </p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-4">
                <button className="bg-[#1A4F8A] hover:bg-[#154174] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group/btn">
                  Submit Paper 
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button className="bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm flex items-center gap-2">
                  <FileText size={20} /> Call for Papers
                </button>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="md:col-span-4 flex flex-col gap-6">
              
              {/* Urgency Timer */}
              <motion.div variants={bentoVariant} className="bg-[#1A4F8A] rounded-[2rem] p-8 shadow-xl border border-[#154174] flex-1 flex flex-col justify-center relative overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:bg-white/20 transition-colors duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-blue-200 mb-6 font-bold text-xs tracking-widest uppercase">
                    <Clock size={16} /> Submission Deadline
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[
                      { label: 'Days', value: timeLeft.days },
                      { label: 'Hours', value: timeLeft.hours },
                      { label: 'Mins', value: timeLeft.minutes },
                      { label: 'Secs', value: timeLeft.seconds },
                    ].map((unit, idx) => (
                      <div key={idx} className="bg-white/10 rounded-xl py-3 backdrop-blur-sm border border-white/10 text-center">
                        <div className="text-2xl font-black text-white font-mono leading-none">{String(unit.value).padStart(2, '0')}</div>
                        <div className="text-[9px] text-blue-200 font-bold uppercase tracking-wider mt-1.5">{unit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Location Mini Card */}
              <motion.div variants={bentoVariant} className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex items-center gap-4 group hover:border-slate-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#F26522] shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Manipal University</h3>
                  <p className="text-slate-500 text-sm font-medium">Rajasthan, India (Hybrid)</p>
                </div>
              </motion.div>

              {/* Publication Mini Card */}
              <motion.div variants={bentoVariant} className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 flex items-center gap-4 group hover:border-slate-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#1A4F8A] shrink-0 group-hover:scale-110 transition-transform">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Springer LNNS</h3>
                  <p className="text-slate-500 text-sm font-medium">Indexed in Scopus</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </section>

      </main>

      {/* Infinite Marquee */}
      <div className="border-y border-slate-200 bg-white overflow-hidden py-4 mb-20 shadow-sm relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div className="flex whitespace-nowrap animate-marquee pause-on-hover w-max">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center gap-10 mx-10 group cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A4F8A] group-hover:scale-150 group-hover:bg-[#F26522] transition-all"></div>
              <span className="text-slate-600 font-bold uppercase tracking-widest text-sm group-hover:text-[#1A4F8A] transition-colors">{partner}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Interactive Schedule Bento */}
        <div id="schedule" className="scroll-mt-24"></div>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariant} className="mb-20">
          <motion.div variants={bentoVariant} className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div className="flex items-center gap-2 text-[#F26522] font-black text-xl uppercase tracking-widest">
                <Calendar size={24} strokeWidth={2.5} /> Conference Schedule
              </div>
              
              <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button 
                  onClick={() => setActiveDay('day1')}
                  className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm ${activeDay === 'day1' ? 'bg-white text-[#1A4F8A] border border-slate-200' : 'text-slate-500 hover:text-slate-700 bg-transparent border-transparent'}`}
                >
                  Day 1 (Feb 16)
                </button>
                <button 
                  onClick={() => setActiveDay('day2')}
                  className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm ${activeDay === 'day2' ? 'bg-white text-[#1A4F8A] border border-slate-200' : 'text-slate-500 hover:text-slate-700 bg-transparent border-transparent'}`}
                >
                  Day 2 (Feb 17)
                </button>
              </div>
            </div>

            <div className="relative min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {schedule[activeDay].map((event, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-[1.5rem] bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all cursor-default group">
                      <div className="text-[#F26522] font-mono font-bold shrink-0 md:w-32 mt-0.5 text-lg">{event.time}</div>
                      <div>
                        <div className="text-slate-900 font-bold text-xl mb-1.5 group-hover:text-[#1A4F8A] transition-colors">{event.title}</div>
                        {event.speaker && <div className="text-slate-500 text-sm font-semibold mb-3">By <span className="text-[#1A4F8A]">{event.speaker}</span></div>}
                        <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg border ${
                          event.type === 'keynote' ? 'bg-orange-100/50 text-[#F26522] border-orange-200' :
                          event.type === 'track' ? 'bg-blue-100/50 text-[#1A4F8A] border-blue-200' :
                          'bg-slate-200 text-slate-600 border-slate-300'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.section>

        {/* Eminent Speakers & Tracks Bento Grid */}
        <div id="speakers" className="scroll-mt-24"></div>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariant} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          
          {/* Eminent Speakers Card */}
          <motion.div variants={bentoVariant} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 relative overflow-hidden group hover:border-[#1A4F8A]/30 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A4F8A]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-[#1A4F8A]/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-[#1A4F8A] font-bold uppercase tracking-widest text-sm">
                  <Users size={18} /> Eminent Speakers
                </div>
              </div>
              
              <div className="space-y-4">
                {speakersData.map((speaker, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedSpeaker(speaker)}
                    className="flex items-center gap-5 group/item cursor-pointer p-3 -mx-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg border ${speaker.color} group-hover/item:scale-110 transition-transform`}>
                      {speaker.init}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover/item:text-[#1A4F8A] transition-colors">{speaker.name}</h3>
                      <p className="text-sm font-semibold text-[#F26522] mt-0.5">{speaker.role}</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity text-slate-400">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Research Tracks Card */}
          <motion.div variants={bentoVariant} className="bg-[#1A4F8A] rounded-[2rem] p-8 lg:p-10 shadow-xl border border-[#154174] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-200 font-bold uppercase tracking-widest text-sm mb-8">
                  <Shield size={18} /> Research Scope
                </div>
                <h3 className="text-3xl font-bold text-white mb-8">Conference Tracks</h3>
                
                <div className="space-y-4">
                  {[
                    { title: 'Applied Cryptography & Network Security', icon: Shield },
                    { title: 'Data Security & Privacy', icon: Database },
                    { title: 'Security & AI / Machine Learning', icon: Cpu }
                  ].map((track, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                      <div className="text-[#F26522]">
                        <track.icon size={24} />
                      </div>
                      <div className="text-white font-bold">{track.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white pt-16 pb-8 mt-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-xl font-bold tracking-tight text-[#1A4F8A] mb-4">
                TRUSTNET<span className="text-[#F26522]">'26</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                Empowering the digital future through collaborative innovation in cybersecurity and artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#1A4F8A] transition-colors">Call for Papers</a></li>
                <li><a href="#" className="hover:text-[#1A4F8A] transition-colors">Important Dates</a></li>
                <li><a href="#" className="hover:text-[#1A4F8A] transition-colors">Committee</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>Manipal University Jaipur</li>
                <li>Dehmi Kalan, Jaipur</li>
                <li>Rajasthan 303007, India</li>
                <li><a href="mailto:contact@trustnetcon.in" className="text-[#F26522] hover:text-[#d05318] transition-colors mt-2 inline-block">contact@trustnetcon.in</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <div>&copy; 2026 TrustNet Conference. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
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
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white border border-slate-200 shadow-2xl rounded-3xl p-8 max-w-lg w-full z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              <button 
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-6 mb-8 mt-2">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl border ${selectedSpeaker.color} shadow-sm`}>
                  {selectedSpeaker.init}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{selectedSpeaker.name}</h3>
                  <div className="text-[#F26522] font-bold text-sm">{selectedSpeaker.role}</div>
                  <div className="text-slate-500 text-xs font-mono mt-1.5 bg-slate-100 inline-block px-2.5 py-1 rounded-md">{selectedSpeaker.affiliation}</div>
                </div>
              </div>
              
              <div className="space-y-3 relative z-10">
                <h4 className="text-xs font-bold text-[#1A4F8A] uppercase tracking-widest border-b border-slate-200 pb-2">Biography</h4>
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
