import { Link } from 'react-router-dom';
import { Shield, BookOpen, BrainCircuit, Building2, CalendarSync, Palette } from 'lucide-react';

const themes = [
  { id: 1, title: 'Cyber-Secure Dark Mode', path: '/theme-1', icon: Shield, color: 'text-orange-500' },
  { id: 2, title: 'Academic Bento Box', path: '/theme-2', icon: BookOpen, color: 'text-blue-500' },
  { id: 3, title: 'Intelligent Systems', path: '/theme-3', icon: BrainCircuit, color: 'text-purple-500' },
  { id: 4, title: 'SDG Corporate', path: '/theme-4', icon: Building2, color: 'text-emerald-500' },
  { id: 5, title: 'Hybrid Timeline', path: '/theme-5', icon: CalendarSync, color: 'text-indigo-500' },
  { id: 6, title: 'Legacy Evolved', path: '/theme-6', icon: Palette, color: 'text-rose-500' }
];

export default function PresentationHub() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            TrustNet'26 Redesign Proposals
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            Select a prototype to view the interactive design theme.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => {
            const Icon = theme.icon;
            return (
              <Link
                key={theme.id}
                to={theme.path}
                className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors ${theme.color}`}>
                    <Icon size={32} />
                  </div>
                  <span className="text-sm font-medium text-slate-400">Prototype 0{theme.id}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {theme.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  Click to explore this interactive layout and design system.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
