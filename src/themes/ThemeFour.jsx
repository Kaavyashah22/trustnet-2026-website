import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Globe2, ShieldCheck, Leaf, ArrowRight, Menu, X, Calendar, MapPin, BookOpen, Clock, Users, ExternalLink, Shield, Database, Cpu, FileText
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
    name: 'Dr. Anupam Tiwari', role: 'Keynote Speaker', init: 'AT', color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    bio: 'Dr. Tiwari is a leading researcher in Trustworthy AI and distributed ledger technologies. He has published over 50 peer-reviewed papers in top-tier security venues and holds multiple patents in zero-knowledge proof applications.',
    affiliation: 'Manipal University Jaipur'
  },
  { 
    name: 'Dr. Somanath Tripathy', role: 'Plenary Speaker', init: 'ST', color: 'bg-slate-50 text-slate-700 border-slate-200',
    bio: 'Dr. Tripathy focuses on data privacy, secure multiparty computation, and cryptographic protocols for cloud environments. His recent work addresses the security implications of quantum computing on modern cryptography.',
    affiliation: 'IIT Patna'
  },
  { 
    name: 'Dr. Gang Li', role: 'Invited Speaker', init: 'GL', color: 'bg-blue-50 text-blue-700 border-blue-100',
    bio: 'An expert in federated learning and adversarial machine learning, Dr. Li brings industry perspective to the challenges of securing AI models in production against data poisoning and inversion attacks.',
    affiliation: 'Deakin University'
  }
];

const partners = [
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education',
  'United Nations SDGs', 'Digital India', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education'
];

export default function ThemeFour() {
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-600 selection:text-white overflow-x-hidden">
      
      {/* Corporate Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img src="/muj-logo.png" alt="Manipal University Jaipur" className="h-12 w-auto object-contain" />
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-slate-800 tracking-tight">TRUSTNET'26</div>
              <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mt-0.5">Global Security Summit</div>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 items-center">
            {['Agenda', 'Speakers', 'SDGs', 'Sponsors'].map((item) => {
              const targetId = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <a key={item} href={`#${targetId}`} onClick={(e) => handleScroll(e, targetId)} className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">
                  {item}
                </a>
              );
            })}
            <Link to="/" className="text-sm font-semibold text-slate-400 hover:text-slate-800 transition-colors ml-4 border-l border-slate-200 pl-4">
              Return to Hub
            </Link>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-md">
              Register
            </button>
          </nav>
          
          <button className="md:hidden text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative overflow-hidden min-h-[75vh] flex items-center pt-10 pb-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/20 to-transparent pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex-1 lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest mb-6">
              <Globe2 size={14} /> Advancing Digital Trust
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Securing the Future of <span className="text-emerald-400">Intelligent Systems</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              An international forum uniting academia and industry to address the intersection of cybersecurity, artificial intelligence, and the UN Sustainable Development Goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center gap-2">
                Submit Research <ArrowRight size={20} />
              </button>
              <button className="bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors">
                Download CFP
              </button>
            </div>
          </motion.div>

          {/* Quick Stats Panel */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full lg:w-96 shrink-0 space-y-4">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-lg">
              <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><Clock size={14} /> Submission Deadline</div>
              <div className="flex justify-between gap-2">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hrs', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Sec', value: timeLeft.seconds },
                ].map((unit, idx) => (
                  <div key={idx} className="text-center flex-1 bg-white/5 py-2 rounded">
                    <div className="text-2xl font-bold font-mono">{String(unit.value).padStart(2, '0')}</div>
                    <div className="text-[9px] text-slate-400 uppercase">{unit.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-lg flex items-center gap-4">
              <Calendar size={28} className="text-emerald-400 shrink-0" />
              <div>
                <div className="font-bold">February 16-17, 2026</div>
                <div className="text-sm text-slate-400">Hybrid Format</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-lg flex items-center gap-4">
              <MapPin size={28} className="text-emerald-400 shrink-0" />
              <div>
                <div className="font-bold">Manipal University Jaipur</div>
                <div className="text-sm text-slate-400">Rajasthan, India</div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Infinite Marquee */}
        <div id="sponsors" className="scroll-mt-24"></div>
      <div className="border-b border-slate-200 bg-white overflow-hidden py-4 shadow-sm relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div className="flex whitespace-nowrap animate-marquee pause-on-hover w-max">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center gap-10 mx-10 group cursor-default">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></div>
              <span className="text-slate-500 font-bold uppercase tracking-widest text-xs group-hover:text-slate-800 transition-colors">{partner}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-20">
        
        {/* SDG Focus Section */}
        <div id="sdgs" className="scroll-mt-24"></div>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Core Mission</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Aligned with the UN Sustainable Development Goals</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                TrustNet'26 is deeply committed to fostering innovations that contribute to a safer, smarter, and sustainable digital future. Our discussions directly support global initiatives.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="font-bold text-slate-900">SDG 4</div>
                  <div className="text-sm text-slate-500">Quality Education</div>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="font-bold text-slate-900">SDG 9</div>
                  <div className="text-sm text-slate-500">Industry & Innovation</div>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="font-bold text-slate-900">SDG 11</div>
                  <div className="text-sm text-slate-500">Sustainable Cities</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 p-8 rounded-lg aspect-square flex flex-col justify-center items-center text-center">
                <ShieldCheck size={48} className="text-emerald-600 mb-4" strokeWidth={1.5} />
                <div className="font-bold text-slate-900 text-lg">Digital Trust</div>
              </div>
              <div className="bg-emerald-600 text-white p-8 rounded-lg aspect-square flex flex-col justify-center items-center text-center transform translate-y-8 shadow-xl">
                <Globe2 size={48} className="mb-4" strokeWidth={1.5} />
                <div className="font-bold text-lg">Global Security</div>
              </div>
              <div className="bg-slate-900 text-white p-8 rounded-lg aspect-square flex flex-col justify-center items-center text-center transform -translate-y-8 shadow-xl">
                <Cpu size={48} className="text-emerald-400 mb-4" strokeWidth={1.5} />
                <div className="font-bold text-lg">Intelligent Systems</div>
              </div>
              <div className="bg-slate-100 p-8 rounded-lg aspect-square flex flex-col justify-center items-center text-center">
                <Leaf size={48} className="text-emerald-600 mb-4" strokeWidth={1.5} />
                <div className="font-bold text-slate-900 text-lg">Sustainable Tech</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Corporate Schedule */}
        <div id="agenda" className="scroll-mt-24"></div>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24">
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Calendar className="text-emerald-600" /> Agenda Overview
              </h2>
              <div className="flex bg-slate-200/50 p-1 rounded-md">
                <button 
                  onClick={() => setActiveDay('day1')}
                  className={`px-6 py-2 rounded text-sm font-bold transition-colors ${activeDay === 'day1' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Day 1 (Feb 16)
                </button>
                <button 
                  onClick={() => setActiveDay('day2')}
                  className={`px-6 py-2 rounded text-sm font-bold transition-colors ${activeDay === 'day2' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Day 2 (Feb 17)
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-0"
                >
                  {schedule[activeDay].map((event, i) => (
                    <div key={i} className={`flex flex-col md:flex-row gap-4 md:gap-8 py-6 ${i !== schedule[activeDay].length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 -mx-8 px-8 transition-colors`}>
                      <div className="text-emerald-600 font-mono font-bold shrink-0 md:w-32">{event.time}</div>
                      <div>
                        <div className="text-slate-900 font-bold text-lg mb-1">{event.title}</div>
                        {event.speaker && <div className="text-slate-600 text-sm mb-2">By {event.speaker}</div>}
                        <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border ${
                          event.type === 'keynote' ? 'bg-slate-900 text-white border-slate-900' :
                          event.type === 'track' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          'bg-slate-100 text-slate-500 border-slate-200'
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

        {/* Speakers & Tracks */}
        <div id="speakers" className="scroll-mt-24"></div>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* Keynote Speakers */}
          <div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-sm mb-6">
              <Users size={18} /> Keynote Speakers
            </div>
            <div className="space-y-4">
              {speakersData.map((speaker, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className={`w-14 h-14 rounded-md flex items-center justify-center font-bold text-lg ${speaker.color}`}>
                    {speaker.init}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{speaker.name}</h3>
                    <p className="text-sm text-slate-500">{speaker.role}</p>
                  </div>
                  <ArrowRight size={20} className="ml-auto text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* CFP & Tracks */}
          <div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-sm mb-6">
              <FileText size={18} /> Research Tracks
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-lg shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Call For Papers</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { title: 'Applied Cryptography & Network Security', icon: Shield },
                    { title: 'Data Security & Privacy', icon: Database },
                    { title: 'Security & AI / Machine Learning', icon: Cpu }
                  ].map((track, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-emerald-400"><track.icon size={20} /></div>
                      <div className="font-semibold text-slate-200">{track.title}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-md font-bold transition-colors flex items-center justify-center gap-2">
                  Submit via Microsoft CMT <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>

        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 pt-16 pb-8 mt-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-xl font-bold tracking-tight text-white mb-4">
                TRUSTNET<span className="text-emerald-500">'26</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Empowering the digital future through collaborative innovation in cybersecurity and artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Call for Papers</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Important Dates</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Committee</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Manipal University Jaipur</li>
                <li>Dehmi Kalan, Jaipur</li>
                <li>Rajasthan 303007, India</li>
                <li><a href="mailto:contact@trustnetcon.in" className="text-emerald-500 hover:text-emerald-400 transition-colors mt-2 inline-block">contact@trustnetcon.in</a></li>
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
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white border border-slate-200 shadow-2xl rounded-xl p-8 max-w-lg w-full z-10"
            >
              <button 
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-6 mb-8 mt-2">
                <div className={`w-20 h-20 rounded-lg flex items-center justify-center font-bold text-2xl ${selectedSpeaker.color}`}>
                  {selectedSpeaker.init}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{selectedSpeaker.name}</h3>
                  <div className="text-emerald-700 font-semibold text-sm">{selectedSpeaker.role}</div>
                  <div className="text-slate-500 text-xs font-mono mt-1">{selectedSpeaker.affiliation}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">Biography</h4>
                <p className="text-slate-700 leading-relaxed text-sm pt-2">
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
