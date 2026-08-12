import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Menu, X, Calendar, MapPin, BookOpen, Clock, Users, ExternalLink, Shield, Database, Cpu, ChevronRight, FileText, Globe
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
    name: 'Dr. Anupam Tiwari', role: 'Keynote Speaker', init: 'AT', color: 'bg-[#700a26]/10 text-[#700a26] border-[#700a26]/20',
    bio: 'Dr. Tiwari is a leading researcher in Trustworthy AI and distributed ledger technologies. He has published over 50 peer-reviewed papers in top-tier security venues and holds multiple patents in zero-knowledge proof applications.',
    affiliation: 'Manipal University Jaipur'
  },
  {
    name: 'Dr. Somanath Tripathy', role: 'Plenary Speaker', init: 'ST', color: 'bg-[#1A4F8A]/10 text-[#1A4F8A] border-[#1A4F8A]/20',
    bio: 'Dr. Tripathy focuses on data privacy, secure multiparty computation, and cryptographic protocols for cloud environments. His recent work addresses the security implications of quantum computing on modern cryptography.',
    affiliation: 'IIT Patna'
  },
  {
    name: 'Dr. Gang Li', role: 'Invited Speaker', init: 'GL', color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    bio: 'An expert in federated learning and adversarial machine learning, Dr. Li brings industry perspective to the challenges of securing AI models in production against data poisoning and inversion attacks.',
    affiliation: 'Deakin University'
  }
];

const partners = [
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education',
  'Manipal University Jaipur', 'Deakin University', 'Springer LNNS', 'Scopus Indexed', 'IEEE Co-Sponsored', 'Ministry of Education'
];

export default function ThemeSix() {
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
    <div className="min-h-screen bg-[#FFFDFB] text-slate-900 font-sans selection:bg-[#700a26] selection:text-white overflow-x-hidden">

      {/* Legacy Header Redefined */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-8">
          <div className="flex items-center gap-3 shrink-0 xl:-ml-4">
            <img src="/muj-logo.png" alt="MUJ Logo" className="h-12 w-auto object-contain" />
            <div className="h-6 w-px bg-slate-300 hidden sm:block mx-1"></div>
            <div className="hidden sm:block text-xl font-bold tracking-tight text-[#1A4F8A]">
              TRUSTNET<span className="text-[#700a26]">'26</span>
            </div>
          </div>

          <nav className="hidden xl:flex gap-3 items-center">
            {['Home', 'Call for Papers', 'Speakers', 'Committee', 'Special Sessions'].map((item) => {
              const targetId = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <a key={item} href={`#${targetId}`} onClick={(e) => handleScroll(e, targetId)} className="text-[12px] font-bold text-slate-600 hover:text-[#700a26] uppercase tracking-wide transition-colors whitespace-nowrap">
                  {item}
                </a>
              );
            })}
            <div className="flex items-center gap-3 ml-1 xl:ml-4 xl:-mr-4 border-l border-slate-200 pl-4 shrink-0">
              <button className="bg-[#700a26] hover:bg-[#4a0417] text-white px-5 py-2 rounded font-bold uppercase tracking-wide text-[12px] transition-colors shadow-md whitespace-nowrap">
                Register
              </button>
              {/* SDG Logos in top right corner */}
              <img src="/sdg-logos.png" alt="SDG Goals" className="h-12 w-auto object-contain" />
            </div>
          </nav>

          <div className="xl:hidden flex items-center gap-4">
            <img src="/sdg-logos.png" alt="SDG Goals" className="h-9 sm:h-10 w-auto object-contain" />
            <button className="text-[#1A4F8A]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl absolute top-full left-0 w-full z-40"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {['Home', 'Call for Papers', 'Speakers', 'Committee', 'Special Sessions'].map((item) => {
                const targetId = item.toLowerCase().replace(/\s+/g, '-');
                return (
                  <a key={item} href={`#${targetId}`} onClick={(e) => { handleScroll(e, targetId); setIsMobileMenuOpen(false); }} className="text-[14px] font-bold text-[#1A4F8A] uppercase tracking-wide">
                    {item}
                  </a>
                );
              })}
              <div className="h-px bg-slate-200 w-full my-1"></div>
              <button className="bg-[#700a26] text-white px-5 py-3 rounded-lg font-bold uppercase tracking-wide text-[14px] text-center shadow-md">
                Register
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex flex-col justify-center pt-4 pb-8 bg-slate-900">

        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/muj-campus.mp4" type="video/mp4" />
          </video>

          {/* Tech Mahindra style large geometric web pattern */}
          <div className="absolute inset-0 opacity-[0.18] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 25v50L50 100 0 75V25z M50 50l50-25 M50 50L0 75 M50 50v50' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '300px'
          }}></div>

          {/* Gradient overlay for readability to ensure white text pops */}
          <div className="absolute inset-0 bg-[#1A4F8A]/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16 mt-8">

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex-1 lg:max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight mb-8">
              Join Global Experts at <span className="text-white block mt-2">TrustNet '26</span>
            </h1>

            <p className="text-xl text-white mb-8 max-w-xl font-medium leading-relaxed opacity-90">
              Empowering the digital future through collaborative innovation in cybersecurity and artificial intelligence.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-[#700a26] hover:bg-[#4a0417] text-white px-10 py-4 font-bold text-lg transition-colors shadow-xl flex items-center gap-3">
                Register Now <ArrowRight size={20} />
              </button>
            </div>

            {/* Sponsors / Partners inside Frosted Glass Row */}
            <div className="w-full max-w-xl flex flex-wrap justify-around items-center bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-white/10 mt-8 gap-4">
              {/* Note: The user needs to add these images to the /public folder */}
              <div className="bg-white p-1.5 rounded-lg h-14 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow w-36 cursor-pointer">
                <img src="/springer-logo.png" alt="Springer" className="max-h-full max-w-full object-contain mix-blend-multiply" title="Springer LNNS" />
              </div>
              <div className="w-px h-8 bg-white/20 hidden md:block"></div>
              <div className="bg-white p-1.5 rounded-lg h-14 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow w-36 cursor-pointer">
                <img src="/scopus-logo.png" alt="Scopus" className="max-h-full max-w-full object-contain mix-blend-multiply" title="Scopus Indexed" />
              </div>
              <div className="w-px h-8 bg-white/20 hidden md:block"></div>
              <div className="bg-white p-1.5 rounded-lg h-14 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow w-36 cursor-pointer">
                <img src="/deakin-logo.png" alt="Deakin University" className="max-h-full max-w-full object-contain mix-blend-multiply" title="Deakin University" />
              </div>
            </div>

          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full lg:w-[420px] shrink-0 flex flex-col gap-4 lg:-mr-6 xl:-mr-8">

            {/* Red Frosted Glass Details Block */}
            <div className="bg-[#700a26]/80 shadow-2xl px-7 py-5 relative overflow-hidden backdrop-blur-md border border-white/20 rounded-xl">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 text-blue-100 text-[10px] font-bold uppercase tracking-widest mb-3 border border-white/20">
                Details
              </div>

              <div className="text-2xl font-bold text-white mb-0 leading-snug">
                16-17 February, 2026
              </div>
              <div className="text-sm text-blue-200 mb-3 font-medium">
                09:00 AM – 05:00 PM IST
              </div>

              <div className="text-lg font-bold text-white leading-snug">
                Manipal University Jaipur,
              </div>
              <div className="text-sm text-blue-200 font-medium mb-3">
                Rajasthan, India | Hybrid Format
              </div>

              {/* Retaining the countdown timer inside the block */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Clock size={12} /> Countdown to Event
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Mins', value: timeLeft.minutes },
                    { label: 'Secs', value: timeLeft.seconds },
                  ].map((unit, idx) => (
                    <div key={idx} className="bg-white/5 py-2.5 text-center border border-white/10 rounded-lg">
                      <div className="text-lg font-black text-white font-mono leading-none">{String(unit.value).padStart(2, '0')}</div>
                      <div className="text-[8px] text-blue-300 font-bold uppercase tracking-wider mt-1">{unit.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Dates Block Below Details */}
            <div className="bg-white/5 backdrop-blur-md shadow-2xl p-6 relative overflow-hidden border border-white/10 rounded-xl">
              <div className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Calendar size={16} /> Important Dates
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Call for Paper', date: 'Sep 9, 2025' },
                  { title: 'Submission End', date: 'Dec 30, 2025' },
                  { title: 'Acceptance', date: 'Jan 10, 2026' },
                  { title: 'Registration End', date: 'Jan 14, 2026' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <div className="text-sm text-blue-200 font-medium">{item.title}</div>
                    <div className="text-white font-bold text-base">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-24">

        {/* Conference Tracks (Modern Grid instead of old accordions) */}
        <div id="call-for-papers" className="scroll-mt-24"></div>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24">
          <div className="text-center mb-12">
            <div id="tracks"></div>
            <h2 className="text-4xl font-black text-[#1A4F8A] mb-4">Conference Tracks</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Explore the core research areas of TrustNet'26, blending advanced cybersecurity with intelligent systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Applied Cryptography and Network Security',
              'Data Security and Privacy',
              'Security and AI / Machine Learning',
              'Distributed Systems and Architectures',
              'Security and Privacy in Emerging Scenarios',
              'Trust Management and Usability'
            ].map((track, i) => (
              <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-[#1A4F8A] hover:shadow-lg transition-all group flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#700a26]/10 text-[#700a26] flex items-center justify-center shrink-0 group-hover:bg-[#700a26] group-hover:text-white transition-colors">
                  <span className="font-black text-lg">{i + 1}</span>
                </div>
                <h3 className="font-bold text-slate-800 leading-tight group-hover:text-[#1A4F8A] transition-colors">{track}</h3>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Eminent Speakers */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div id="speakers"></div>
            <h2 className="text-3xl font-black text-[#1A4F8A]">Eminent Speakers</h2>
            <div className="flex-1 h-px bg-slate-200 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakersData.map((speaker, i) => (
              <div
                key={i}
                onClick={() => setSelectedSpeaker(speaker)}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#700a26] transition-all cursor-pointer group flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 rounded-full flex items-center justify-center font-black text-3xl border-4 ${speaker.color} mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                  {speaker.init}
                </div>
                <h3 className="text-xl font-bold text-[#1A4F8A] mb-2 group-hover:text-[#700a26] transition-colors">{speaker.name}</h3>
                <div className="text-xs font-bold text-[#700a26] bg-[#700a26]/10 px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">{speaker.role}</div>
                <p className="text-slate-500 font-medium text-sm">{speaker.affiliation}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Schedule */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-24">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div id="schedule"></div>
              <h2 className="text-3xl font-black text-[#1A4F8A]">Schedule Overview</h2>
              <div className="flex bg-slate-100 p-1.5 rounded-xl">
                <button
                  onClick={() => setActiveDay('day1')}
                  className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all ${activeDay === 'day1' ? 'bg-[#700a26] text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Day 1 (Feb 16)
                </button>
                <button
                  onClick={() => setActiveDay('day2')}
                  className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all ${activeDay === 'day2' ? 'bg-[#700a26] text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Day 2 (Feb 17)
                </button>
              </div>
            </div>

            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {schedule[activeDay].map((event, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-colors group">
                      <div className="text-[#700a26] font-black shrink-0 md:w-32 mt-1 text-lg">{event.time}</div>
                      <div>
                        <div className="text-[#1A4F8A] font-bold text-xl mb-1">{event.title}</div>
                        {event.speaker && <div className="text-slate-500 font-medium mb-3">By {event.speaker}</div>}
                        <span className={`inline-block text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg border ${event.type === 'keynote' ? 'bg-[#1A4F8A]/10 text-[#1A4F8A] border-[#1A4F8A]/20' :
                          event.type === 'track' ? 'bg-[#700a26]/10 text-[#700a26] border-[#700a26]/20' :
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

      </main>

      {/* Footer */}
      <footer className="bg-[#1A4F8A] pt-16 pb-8 mt-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-xl font-black tracking-tight text-white mb-4">
                TRUSTNET<span className="text-white">'26</span>
              </div>
              <p className="text-blue-100 text-sm max-w-sm leading-relaxed">
                Empowering the digital future through collaborative innovation in cybersecurity and artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Call for Papers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Important Dates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Committee</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>Manipal University Jaipur</li>
                <li>Dehmi Kalan, Jaipur</li>
                <li>Rajasthan 303007, India</li>
                <li><a href="mailto:contact@trustnetcon.in" className="text-blue-300 hover:text-white font-bold transition-colors mt-2 inline-block">contact@trustnetcon.in</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200">
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
              className="relative bg-white border border-slate-200 shadow-2xl rounded-3xl p-8 max-w-lg w-full z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff] rounded-bl-full pointer-events-none"></div>
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-6 mb-8 mt-2">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl border-2 ${selectedSpeaker.color} shadow-sm`}>
                  {selectedSpeaker.init}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#1A4F8A] mb-1">{selectedSpeaker.name}</h3>
                  <div className="text-[#700a26] font-bold text-sm">{selectedSpeaker.role}</div>
                  <div className="text-slate-500 text-xs font-medium mt-1.5">{selectedSpeaker.affiliation}</div>
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Biography</h4>
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
