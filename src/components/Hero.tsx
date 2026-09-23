import { ArrowDownRight, Eye, Radio, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const [signalIndex, setSignalIndex] = useState(0);

  const signals = [
    { label: 'Building next', value: 'Data tools that feel human', detail: 'PrepIt / product thinking' },
    { label: 'Exploring', value: 'Vision models & trust', detail: 'FakeXpose / research mode' },
    { label: 'Looking for', value: 'A problem worth solving', detail: 'Open to thoughtful teams' },
  ];
  const signal = signals[signalIndex];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-5 md:px-10 relative overflow-hidden bg-[#080808]">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="absolute top-28 right-8 md:right-16 text-[10px] section-kicker text-[#d7eb5a] [writing-mode:vertical-rl]">Mahi Patel / 2026</div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8 animate-fadeInDown">
              <span className="h-px w-10 bg-[#e45b3c]" />
              <p className={`section-kicker text-xs font-semibold ${isDark ? 'text-[#d7eb5a]' : 'text-[#e45b3c]'}`}>Route found / mission in progress</p>
            </div>

            <h1 className={`text-6xl md:text-8xl leading-[0.88] font-bold mb-8 animate-fadeInUp ${isDark ? 'text-[#f4f1e9]' : 'text-[#142321]'}`}>
              Hi, I’m<br /><span className="text-[#e45b3c]">Mahi<span className={isDark ? 'text-[#d7eb5a]' : 'text-[#142321]'}>.</span></span>
            </h1>

            <div className="animate-fadeInUp max-w-xl" style={{ animationDelay: '0.2s' }}>
              <p className={`text-lg md:text-xl leading-relaxed mb-8 ${isDark ? 'text-[#b9c7bd]' : 'text-[#42534e]'}`}>
                I build useful things for messy problems: full-stack products, mobile experiences, and machine learning tools that make sense in the real world.
              </p>
            </div>

            <div className="animate-fadeInUp flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#e45b3c] text-white font-semibold hover:bg-[#c9472f] transition-all duration-300 hover:-translate-y-1 group">
                <span>Start a conversation</span><ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform" />
              </a>

              <a
                href="/Mahi_Patel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-1 py-3.5 font-semibold transition-all duration-300 border-b-2 ${isDark ? 'border-[#d7eb5a] text-[#d7eb5a] hover:text-white hover:border-white' : 'border-[#142321] text-[#142321] hover:text-[#e45b3c] hover:border-[#e45b3c]'}`}
              >
                <Eye size={20} />
                <span>View Resume</span>
              </a>
            </div>
          </div>

          <div className="animate-scaleIn lg:pt-10" style={{ animationDelay: '0.35s' }}>
            <div className="relative border border-[#2d2d2d] bg-[#121212] p-6 md:p-8">
              <div className="flex items-center justify-between mb-14">
                <div className="flex items-center gap-2">
                  <Radio size={16} className="text-[#e45b3c] animate-pulse" />
                  <span className="section-kicker text-[10px] font-bold">Live signal</span>
                </div>
                <span className="text-[10px] section-kicker text-[#a7a7a0]">0{signalIndex + 1} / 03</span>
              </div>
              <p className={`section-kicker text-[10px] mb-3 ${isDark ? 'text-[#d7eb5a]' : 'text-[#e45b3c]'}`}>{signal.label}</p>
              <h2 className={`text-3xl md:text-4xl leading-tight mb-5 ${isDark ? 'text-[#f4f1e9]' : 'text-[#142321]'}`}>{signal.value}</h2>
              <p className="text-sm text-[#a7a7a0] mb-12">{signal.detail}</p>
              <button
                type="button"
                onClick={() => setSignalIndex((signalIndex + 1) % signals.length)}
                className="w-full flex items-center justify-between border-t border-[#2d2d2d] pt-4 text-left text-xs font-semibold text-[#d7eb5a] transition-colors hover:text-white"
              >
                <span>Change direction</span><Sparkles size={16} />
              </button>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#e45b3c]" />
            </div>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-xs section-kicker text-[#a7a7a0]">Scroll to explore</span>
              <span className="h-px flex-1 bg-[#e45b3c]/50" />
            </div>
          </div>
        </div>
        <div className="manifesto-ticker mt-20 border-y border-[#2d2d2d] py-4 overflow-hidden">
          <div className="manifesto-track section-kicker text-xs text-[#d7eb5a] whitespace-nowrap">
            Good ideas deserve useful interfaces <span className="text-[#e45b3c] px-6">·</span> Build less noise, solve more problems <span className="text-[#e45b3c] px-6">·</span> Good ideas deserve useful interfaces <span className="text-[#e45b3c] px-6">·</span> Build less noise, solve more problems
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
