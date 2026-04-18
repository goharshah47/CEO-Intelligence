/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Command, 
  Sparkles, 
  ArrowUpRight,
  ShieldAlert,
  Globe,
  PieChart,
  BarChart3,
  Cpu
} from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { MetricCard } from './components/MetricCard';
import { cn } from '@/src/lib/utils';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 01: Title
    {
      id: 1,
      content: (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left w-full max-w-7xl mx-auto px-6 h-full pt-20">
          <div className="flex-1 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl font-bold tracking-tighter leading-[1.05]"
            >
              CEO Intelligence <br />
              <span className="text-muted">System</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-muted max-w-xl"
            >
              Run an entire business ecosystem from one place.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex-1 w-full flex justify-end perspective-1000"
          >
            <Dashboard className="scale-75 origin-top-right shadow-2xl shadow-blue-500/10" />
          </motion.div>
        </div>
      )
    },
    // 02: Clarity
    {
      id: 2,
      content: (
        <div className="flex flex-col items-center justify-center text-center h-full max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl font-bold tracking-tight mb-8"
          >
            The problem isn’t data.
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-8xl font-bold text-blue-500 tracking-tight"
          >
            It’s clarity.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-muted mt-12"
          >
            Too many reports. Not enough insight.
          </motion.p>
        </div>
      )
    },
    // 03: Scale
    {
      id: 3,
      content: (
        <div className="h-full flex flex-col justify-center max-w-6xl mx-auto w-full px-6">
          <h2 className="text-5xl font-bold mb-16 text-center lg:text-left">Scale changes the CEO problem.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard value="5+" label="Businesses" accentColor="#3B82F6" size="lg" />
            <MetricCard value="3" label="Regions" accentColor="#22C55E" size="lg" />
            <MetricCard value="1000+" label="Decisions / month" accentColor="#F59E0B" size="lg" />
          </div>
          <h2 className="text-5xl font-bold mt-16 text-center lg:text-left">One CEO responsible for all of it.</h2>
        </div>
      )
    },
    // 04: Insight is nowhere
    {
      id: 4,
      content: (
        <div className="flex flex-col items-start justify-center text-left h-full max-w-5xl mx-auto px-6">
          <h2 className="text-7xl font-bold tracking-tight mb-6">Data is everywhere.</h2>
          <h2 className="text-8xl font-bold text-red-500 tracking-tight mb-12">Insight is nowhere.</h2>
          <p className="text-2xl text-muted">Fragmented systems slow executive decisions.</p>
        </div>
      )
    },
    // 05: Evolution
    {
      id: 5,
      content: (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 h-full max-w-7xl mx-auto px-6 py-20">
          <div className="flex-1">
            <h2 className="text-6xl font-bold mb-12">Dashboards are evolving.</h2>
            <div className="space-y-8">
              {[
                { from: "Reporting", to: "Intelligence" },
                { from: "Tracking", to: "Predicting" },
                { from: "Static", to: "Real-time" }
              ].map((item, i) => (
                <motion.div 
                  key={item.from}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-6 text-3xl font-medium border-l-2 border-line pl-8"
                >
                  <span className="text-muted">{item.from}</span>
                  <ChevronRight className="text-blue-500" />
                  <span className="text-white">{item.to}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-panel border border-line p-10 rounded-[40px] relative">
            <Globe className="absolute -top-10 -right-10 text-blue-500/20 w-40 h-40" />
            <h3 className="text-xl font-bold mb-6">Market direction</h3>
            <p className="text-2xl text-muted leading-relaxed">
              Executives now expect live visibility, proactive alerts, and decision support instead of passive KPI reporting.
            </p>
          </div>
        </div>
      )
    },
    // 06: One View
    {
      id: 6,
      content: (
         <div className="flex flex-col items-center justify-center text-center h-full max-w-5xl mx-auto px-6 space-y-12">
            <h2 className="text-8xl font-bold tracking-tighter">One view.</h2>
            <h2 className="text-8xl font-bold text-blue-500 tracking-tighter">Real-time clarity.</h2>
            <h2 className="text-8xl font-bold tracking-tighter">Instant decisions.</h2>
         </div>
      )
    },
    // 07: OS
    {
      id: 7,
      content: (
        <div className="flex flex-col items-center justify-center text-center h-full max-w-5xl mx-auto px-6">
          <h2 className="text-8xl font-bold tracking-tighter mb-8 leading-tight">A CEO Operating System</h2>
          <p className="text-3xl text-muted mb-16">Not a dashboard. A command center.</p>
          <div className="bg-panel-elevated border border-line px-10 py-5 rounded-full flex items-center gap-4 text-blue-500 font-black text-2xl tracking-[0.2em]">
            <Command size={28} />
            APPLE-STYLE
          </div>
        </div>
      )
    },
    // 08: Act Faster
    {
      id: 8,
      content: (
        <div className="flex flex-col items-start justify-center text-left h-full max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-8xl font-bold tracking-tighter">See everything.</h2>
          <h2 className="text-8xl font-bold text-green-500 tracking-tighter">Understand instantly.</h2>
          <h2 className="text-8xl font-bold tracking-tighter">Act faster.</h2>
        </div>
      )
    },
    // 09: Full Screen
    {
      id: 9,
      content: (
        <div className="flex flex-col items-center justify-center h-full w-full max-w-7xl mx-auto px-6 space-y-12">
          <h2 className="text-6xl font-bold tracking-tight text-center">All companies. One screen.</h2>
          <Dashboard className="max-w-none shadow-2xl shadow-blue-500/5 mt-8 h-3/4" />
        </div>
      )
    },
    // 10: Usable
    {
      id: 10,
      content: (
        <div className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6 space-y-16">
          <div className="space-y-4">
            <h2 className="text-7xl font-bold tracking-tight">We didn’t add more data.</h2>
            <h2 className="text-8xl font-bold text-blue-500 tracking-tighter">We made it usable.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard value="Group" label="Revenue • Profit • Cash" accentColor="#3B82F6" className="h-48" />
            <MetricCard value="Company" label="Division performance" accentColor="#22C55E" className="h-48" />
            <MetricCard value="Ops" label="Daily Activity • Risks" accentColor="#F59E0B" className="h-48" />
          </div>
        </div>
      )
    },
    // 11: AI Advisor
    {
      id: 11,
      content: (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full max-w-7xl mx-auto px-6 py-20">
          <div className="flex-1 space-y-10">
            <h2 className="text-8xl font-bold tracking-tight">It works for you.</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-2xl font-bold text-red-500">
                <ShieldAlert /> Detects risks
              </div>
              <div className="flex items-center gap-4 text-2xl font-bold text-green-500">
                <TrendingUp /> Finds opportunities
              </div>
              <div className="flex items-center gap-4 text-2xl font-bold text-blue-500">
                <ArrowUpRight /> Suggests actions
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
               className="w-96 h-96 rounded-full border border-blue-500/20 flex items-center justify-center relative shadow-[0_0_100px_rgba(59,130,246,0.1)]"
            >
              <div className="absolute inset-4 rounded-full border border-line" />
              <div className="absolute inset-10 rounded-full border border-line" />
              <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-[0_0_60px_rgba(59,130,246,0.5)]">
                <Cpu size={64} />
              </div>
              <div className="absolute top-0 text-white font-bold text-5xl">AI</div>
            </motion.div>
          </div>
        </div>
      )
    },
    // 12: Risks
    {
      id: 12,
      content: (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 h-full max-w-6xl mx-auto px-6">
          <div className="flex-1 space-y-8 text-left">
            <div className="text-[120px] font-bold text-red-500 tracking-tighter leading-none">-12%</div>
            <h3 className="text-5xl font-bold leading-[1.1]">Drop in performance detected instantly</h3>
            <p className="text-xl text-muted">Operational anomaly flagged before escalation.</p>
          </div>
          <div className="flex-1 bg-panel-elevated border border-line p-10 rounded-3xl space-y-6">
            <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-sm">
               <ShieldAlert size={16} /> Alert
            </div>
            <div className="text-3xl font-bold leading-tight uppercase">Delivery SLA variance exceeded threshold</div>
          </div>
        </div>
      )
    },
    // 13: Financial early
    {
      id: 13,
      content: (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 h-full max-w-6xl mx-auto px-6">
          <div className="flex-1 space-y-8 text-left">
            <div className="text-[120px] font-bold text-amber-500 tracking-tighter leading-none">$2.4M</div>
            <h3 className="text-5xl font-bold leading-[1.1]">Cash risk identified early</h3>
            <p className="text-xl text-muted">Finance exposure surfaced before it becomes a crisis.</p>
          </div>
          <div className="flex-1 bg-panel-elevated border border-line p-10 rounded-3xl space-y-6">
            <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-sm">
               <BarChart3 size={16} /> Forecast
            </div>
            <div className="text-3xl font-bold leading-tight uppercase">2 subsidiaries trending below cash safety line</div>
          </div>
        </div>
      )
    },
    // 14: Market Opportunity
    {
      id: 14,
      content: (
        <div className="h-full flex flex-col justify-center max-w-7xl mx-auto w-full px-6 space-y-16">
          <div className="space-y-4">
            <h2 className="text-7xl font-bold tracking-tight">Best market identified.</h2>
            <h2 className="text-3xl font-bold text-green-500">Based on real-time trends</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard value="Canada" label="Stable core ops" accentColor="#3B82F6" className="h-40" />
            <MetricCard value="Caribbean" label="High growth potential" accentColor="#22C55E" className="h-40" />
            <MetricCard value="South Am." label="Emerging opportunity" accentColor="#F59E0B" className="h-40" />
          </div>
        </div>
      )
    },
    // 15: Growth
    {
      id: 15,
      content: (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full max-w-7xl mx-auto px-6 py-20">
          <div className="flex-1 space-y-12">
            <h2 className="text-8xl font-bold tracking-tighter">Faster decisions.</h2>
            <h2 className="text-8xl font-bold text-blue-500 tracking-tighter">Better control.</h2>
            <h2 className="text-8xl font-bold text-green-500 tracking-tighter">Stronger growth.</h2>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-4 max-w-xs">
            <MetricCard value="↑" label="Visibility" accentColor="#3B82F6" size="sm" className="h-28" />
            <MetricCard value="↑" label="Control" accentColor="#F59E0B" size="sm" className="h-28" />
            <MetricCard value="↑" label="Growth" accentColor="#22C55E" size="sm" className="h-28" />
          </div>
        </div>
      )
    },
    // 16: Interaction
    {
      id: 16,
      content: (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full max-w-7xl mx-auto px-6 py-20">
          <div className="flex-1 text-left space-y-10">
            <h2 className="text-7xl font-bold tracking-tight leading-tight">This becomes your advisor.</h2>
            <div className="flex items-center gap-8 text-3xl font-bold text-blue-500 italic">
               <span>Ask.</span>
               <span>Analyze.</span>
               <span>Act.</span>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md bg-panel border border-line rounded-[40px] p-8 space-y-8">
            <div className="space-y-4">
              <div className="bg-panel-elevated p-6 rounded-2xl border border-line text-lg font-medium">
                Show underperforming divisions
              </div>
              <div className="w-full h-px bg-line" />
              <div className="bg-panel-elevated p-6 rounded-2xl border border-line text-lg font-medium">
                Where should we invest next?
              </div>
            </div>
            <div className="pt-4 flex justify-between items-center text-muted text-sm font-mono tracking-widest uppercase">
              <span>Ready for query</span>
              <Sparkles size={16} className="animate-pulse text-blue-400" />
            </div>
          </div>
        </div>
      )
    },
    // Final: Closing
    {
      id: 17,
      content: (
        <div className="flex flex-col items-center justify-center text-center h-full max-w-6xl mx-auto px-6">
          <h2 className="text-7xl font-bold tracking-tighter mb-8 leading-tight">This isn’t a dashboard.</h2>
          <h2 className="text-8xl font-bold text-blue-500 tracking-tighter mb-16 leading-tight">It’s how you run the entire group.</h2>
          <p className="text-2xl text-muted tracking-wide font-medium">
            Executive clarity. Real-time control. AI-powered direction.
          </p>
        </div>
      )
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative h-screen w-screen bg-bg overflow-hidden flex flex-col font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-green-500/5 blur-[100px] rounded-full" />
      
      {/* HUD Elements */}
      <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white scale-90">
            <Command size={16} strokeWidth={3} />
          </div>
          <span className="font-bold text-lg tracking-tight">Intelligence</span>
        </div>
        <div className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-muted">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            System Secure
          </span>
          <span>Slide {String(currentSlide + 1).padStart(2, '0')}</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.section
            key={currentSlide}
            initial={{ opacity: 0, x: 50, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center p-12"
          >
            {slides[currentSlide].content}
          </motion.section>
        </AnimatePresence>
      </main>

      {/* Controls & Mini Navigation */}
      <footer className="absolute bottom-12 left-0 w-full flex justify-between items-center px-12 z-50">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "h-1 transition-all rounded-full",
                i === currentSlide ? "w-8 bg-blue-500" : "w-4 bg-line hover:bg-muted"
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-line hover:bg-line flex items-center justify-center text-muted transition-colors"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-white text-bg px-8 h-12 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
          >
            {currentSlide === slides.length - 1 ? "Reload" : "Next"}
            <ChevronRight size={18} />
          </button>
        </div>
      </footer>

      {/* Keyboard Hint */}
      <div className="absolute bottom-4 right-12 text-[10px] opacity-40 text-muted uppercase tracking-widest font-mono">
        Use arrows or space to navigate
      </div>
    </div>
  );
}

// Helper icons
function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
