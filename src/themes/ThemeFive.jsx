import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Menu, X, Calendar, MapPin, BookOpen, Clock, Users, ExternalLink, Shield, Database, Cpu, FileText, Share2
} from 'lucide-react';

const scheduleData = [
  { date: 'Sep 09, 2025', title: 'Call for Papers Opens', description: 'Submission portal opens on Microsoft CMT.', status: 'past' },
  { date: 'Dec 15, 2025', title: 'Early Bird Registration Ends', description: 'Last day to register at a discounted rate.', status: 'upcoming' },
  { date: 'Dec 30, 2025', title: 'Full Manuscript Submission', description: 'Final deadline for all paper submissions.', status: 'upcoming', highlight: true },
  { date: 'Jan 10, 2026', title: 'Author Notification', description: 'Acceptance notifications sent to authors.', status: 'upcoming' },
  { date: 'Jan 14, 2026', title: 'Registration Ends', description: 'Final deadline for all conference registrations.', status: 'upcoming' },
  { date: 'Feb 16, 2026', title: 'Conference Begins', description: 'Opening Keynote at Manipal University Jaipur.', status: 'upcoming', highlight: true }
];

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
    name: 'Dr. Anupam Tiwari', role: 'Keynote Speaker', init: 'AT', color: 'bg-indigo-900/50 text-indigo-400 border-indigo-500/30',
    bio: 'Leading researcher in Trustworthy AI and distributed ledger technologies.',
    affiliation: 'Manipal University Jaipur'
  },
  { 
    name: 'Dr. Somanath Tripathy', role: 'Plenary Speaker', init: 'ST', color: 'bg-blue-900/50 text-blue-400 border-blue-500/30',
    bio: 'Focuses on data privacy, secure multiparty computation, and cryptographic protocols.',
    affiliation: 'IIT Patna'
  },
  { 
    name: 'Dr. Gang Li', role: 'Invited Speaker', init: 'GL', color: 'bg-cyan-900/50 text-cyan-400 border-cyan-500/30',
    bio: 'Expert in federated learning and adversarial machine learning.',
    affiliation: 'Deakin University'
  }
];

const partners = [
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education',
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education'
];

export default function ThemeFive() {
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
    <div className="min-h-screen bg-[#050505] text-slate-300 font-mono selection:bg-[#F26522] selection:text-white overflow-x-hidden relative">
      
      {/* Tech Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Cyber Header */}
      <header className="border-b border-slate-800 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-1 rounded h-10 flex items-center">
              <img src="/muj-logo.png" alt="MUJ Logo" className="h-full w-auto object-contain" />
            </div>
            <div>
              <div className="text-xl font-bold text-white tracking-widest uppercase">
                TRUSTNET<span className="text-[#F26522]">'26</span>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 items-center text-xs uppercase tracking-widest">
            {['Timeline', 'Tracks', 'Speakers'].map((item) => {
              const targetId = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <a key={item} href={`#${targetId}`} onClick={(e) => handleScroll(e, targetId)} className="font-bold text-slate-500 hover:text-[#3B82F6] transition-colors">
                  {item}
                </a>
              );
            })}
            <div className="h-4 w-px bg-slate-800 mx-2"></div>
            <Link to="/" className="font-bold text-slate-600 hover:text-white transition-colors">
              [ RETURN HUB ]
            </Link>
          </nav>
          
          <button className="md:hidden text-slate-500 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 pt-16">
        
        {/* Terminal Hero */}
        <section className="mb-24 flex flex-col lg:flex-row gap-12 items-center min-h-[70vh]">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 text-[#3B82F6] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-[#3B82F6] animate-pulse"></span>
              System Active // HYBRID MODE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-[1.1] mb-6">
              Trusted Networks <br /> <span className="text-[#3B82F6]">& Intelligent</span> <br /> Systems.
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 max-w-xl font-sans">
              Global summit addressing the intersection of cybersecurity and artificial intelligence. February 16-17, 2026.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#F26522] hover:bg-[#e05616] text-black px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors flex items-center gap-2">
                Init_Submission <ArrowRight size={18} />
              </button>
              <button className="bg-transparent hover:bg-slate-900 border border-slate-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors flex items-center gap-2">
                <FileText size={18} /> View_CFP
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full lg:w-[450px] shrink-0">
            <div className="bg-[#0A0A0A] border border-slate-800 p-8 relative overflow-hidden font-mono">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3B82F6] to-[#F26522]"></div>
              
              <div className="text-xs text-slate-500 uppercase tracking-widest mb-6 flex items-center justify-between">
                <span>// Countdown_Timer</span>
                <Clock size={14} className="text-[#F26522]" />
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'DD', value: timeLeft.days },
                  { label: 'HH', value: timeLeft.hours },
                  { label: 'MM', value: timeLeft.minutes },
                  { label: 'SS', value: timeLeft.seconds },
                ].map((unit, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{String(unit.value).padStart(2, '0')}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest border-t border-slate-800 pt-2">{unit.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-slate-800 pt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 uppercase tracking-widest">Location</span>
                  <span className="text-white font-bold flex items-center gap-2"><MapPin size={14} className="text-[#3B82F6]"/> Manipal Univ.</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 uppercase tracking-widest">Publication</span>
                  <span className="text-white font-bold flex items-center gap-2"><BookOpen size={14} className="text-[#F26522]"/> Springer LNNS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Marquee */}
        <div className="border-y border-slate-800 bg-[#0A0A0A] py-4 mb-24 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center gap-12 mx-12">
                <Share2 size={16} className="text-[#3B82F6]" />
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Hybrid Timeline */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div id="timeline"></div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-4 inline-block">Event_Timeline</h2>
          </div>
          
          <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:border-l-0">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
            
            {scheduleData.map((event, i) => (
              <div key={i} className={`mb-12 relative flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} md:justify-between w-full`}>
                
                {/* Node */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#3B82F6] z-10 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                
                <div className={`pl-8 md:pl-0 w-full md:w-[45%] ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`inline-block px-2 py-1 mb-3 text-xs font-bold uppercase tracking-widest ${event.highlight ? 'bg-[#F26522]/20 text-[#F26522] border border-[#F26522]/30' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}>
                    {event.date}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${event.highlight ? 'text-white' : 'text-slate-300'}`}>{event.title}</h3>
                  <p className="text-sm text-slate-500 font-sans">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Research Tracks (Horizontal Scroll Snap) */}
        <div id="tracks" className="scroll-mt-24"></div>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-4 inline-block">Research_Vectors</h2>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-6 no-scrollbar">
            {[
              { title: 'Applied Cryptography & Network Security', icon: Shield, id: '01' },
              { title: 'Data Security & Privacy', icon: Database, id: '02' },
              { title: 'Security & AI / Machine Learning', icon: Cpu, id: '03' }
            ].map((track, i) => (
              <div key={i} className="snap-center shrink-0 w-[300px] md:w-[350px] bg-[#0A0A0A] border border-slate-800 p-8 hover:border-[#3B82F6] transition-colors group">
                <div className="flex justify-between items-start mb-12">
                  <track.icon size={32} className="text-slate-600 group-hover:text-[#3B82F6] transition-colors" />
                  <span className="text-[#F26522] font-bold text-sm">//{track.id}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight font-sans">{track.title}</h3>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Speakers */}
        <div id="speakers" className="scroll-mt-24"></div>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-4 inline-block">System_Architects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakersData.map((speaker, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedSpeaker(speaker)}
                className="bg-[#0A0A0A] border border-slate-800 p-6 flex flex-col items-center text-center cursor-pointer hover:bg-slate-900 transition-colors group"
              >
                <div className={`w-16 h-16 rounded-none flex items-center justify-center font-bold text-xl border-2 ${speaker.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {speaker.init}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{speaker.name}</h3>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">{speaker.role}</div>
                <div className="text-xs font-sans text-slate-600 line-clamp-2">{speaker.affiliation}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Interactive Schedule */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24 relative z-20">
          <div className="bg-[#0A0A0A] border border-slate-800 p-8 lg:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div className="flex items-center gap-2 text-white font-bold text-xl uppercase tracking-widest">
                <Calendar size={20} className="text-[#3B82F6]" /> Active_Agenda
              </div>
              
              <div className="flex bg-[#050505] p-1 border border-slate-800">
                <button 
                  onClick={() => setActiveDay('day1')}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${activeDay === 'day1' ? 'bg-[#3B82F6] text-black' : 'text-slate-500 hover:text-white'}`}
                >
                  Day 1 (Feb 16)
                </button>
                <button 
                  onClick={() => setActiveDay('day2')}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${activeDay === 'day2' ? 'bg-[#3B82F6] text-black' : 'text-slate-500 hover:text-white'}`}
                >
                  Day 2 (Feb 17)
                </button>
              </div>
            </div>

            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {schedule[activeDay].map((event, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 bg-[#050505] border border-slate-800 hover:border-[#F26522]/50 transition-colors cursor-default group">
                      <div className="text-[#F26522] font-mono font-bold shrink-0 md:w-32 mt-0.5">{event.time}</div>
                      <div>
                        <div className="text-white font-bold text-lg mb-1.5 font-sans">{event.title}</div>
                        {event.speaker && <div className="text-slate-400 text-sm font-semibold mb-3 font-sans">By <span className="text-[#3B82F6]">{event.speaker}</span></div>}
                        <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-2 py-1 border ${
                          event.type === 'keynote' ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30' :
                          event.type === 'track' ? 'bg-[#F26522]/10 text-[#F26522] border-[#F26522]/30' :
                          'bg-slate-900 text-slate-500 border-slate-800'
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

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#050505] pt-16 pb-8 mt-24 relative z-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-xl font-bold tracking-widest text-white mb-4 uppercase">
                TRUSTNET<span className="text-[#F26522]">'26</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-sans">
                Empowering the digital future through collaborative innovation in cybersecurity and artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">// Quick_Links</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-sans">
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Call for Papers</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Important Dates</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Committee</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">// Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-sans">
                <li>Manipal University Jaipur</li>
                <li>Dehmi Kalan, Jaipur</li>
                <li>Rajasthan 303007, India</li>
                <li><a href="mailto:contact@trustnetcon.in" className="text-[#3B82F6] hover:text-[#F26522] transition-colors mt-2 inline-block">contact@trustnetcon.in</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
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
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#050505] border border-[#3B82F6]/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] p-8 max-w-lg w-full z-10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3B82F6] to-[#F26522]"></div>
              <button 
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-6 mb-8 mt-4">
                <div className={`w-20 h-20 rounded-none flex items-center justify-center font-bold text-2xl border-2 ${selectedSpeaker.color}`}>
                  {selectedSpeaker.init}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedSpeaker.name}</h3>
                  <div className="text-[#3B82F6] text-xs uppercase tracking-widest">{selectedSpeaker.role}</div>
                  <div className="text-slate-500 text-xs font-sans mt-2">{selectedSpeaker.affiliation}</div>
                </div>
              </div>
              
              <div className="space-y-4 border-t border-slate-800 pt-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">// Profile_Data</h4>
                <p className="text-slate-300 leading-relaxed text-sm font-sans">
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
