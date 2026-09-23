import { ArrowUpRight, Command, CornerDownLeft, FolderKanban, Github, Mail, Navigation, Sparkles, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type CommandDeckProps = {
  onNavigate: (sectionId: string) => void;
};

const routes = [
  { id: 'projects', label: 'See selected work', hint: '4 shipped ideas', icon: FolderKanban },
  { id: 'skills', label: 'Explore the toolkit', hint: 'From interfaces to ML', icon: Sparkles },
  { id: 'experience', label: 'Read the field notes', hint: 'Internship & learning', icon: Navigation },
  { id: 'contact', label: 'Start a conversation', hint: 'The best next step', icon: Mail },
];

const CommandDeck = ({ onNavigate }: CommandDeckProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const visibleRoutes = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return routes;
    return routes.filter((route) => `${route.label} ${route.hint}`.toLowerCase().includes(normalized));
  }, [query]);

  const close = () => {
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
  };

  const selectRoute = (id: string) => {
    onNavigate(id);
    close();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen((open) => !open);
        return;
      }
      if (event.key === '/' && !isOpen && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
        event.preventDefault();
        setIsOpen(true);
      }
      if (!isOpen) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex((index) => Math.min(index + 1, visibleRoutes.length - 1));
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex((index) => Math.max(index - 1, 0));
      }
      if (event.key === 'Enter' && visibleRoutes[selectedIndex]) {
        onNavigate(visibleRoutes[selectedIndex].id);
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNavigate, selectedIndex, visibleRoutes]);

  useEffect(() => setSelectedIndex(0), [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 border border-[#3b3b36] bg-[#121212]/90 px-3 py-2 text-xs text-[#d7eb5a] shadow-2xl backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[#d7eb5a]"
        aria-label="Open portfolio command deck"
      >
        <Command size={14} /> Explore <span className="border border-[#4a4a44] px-1.5 py-0.5 text-[10px] text-[#a7a7a0]">⌘K</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Portfolio command deck" onMouseDown={close}>
          <div className="command-deck w-full max-w-xl border border-[#494940] bg-[#121212] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
            <div className="flex items-center gap-3 border-b border-[#2d2d2d] px-5 py-4">
              <Command className="text-[#d7eb5a]" size={19} />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Where should we go?"
                className="min-w-0 flex-1 bg-transparent text-base text-[#f4f1e9] outline-none placeholder:text-[#777770]"
              />
              <button type="button" onClick={close} className="p-1 text-[#a7a7a0] transition-colors hover:text-white" aria-label="Close command deck"><X size={18} /></button>
            </div>
            <div className="p-2">
              <p className="section-kicker px-3 pb-2 pt-2 text-[9px] text-[#777770]">Choose a route</p>
              {visibleRoutes.length ? visibleRoutes.map((route, index) => {
                const Icon = route.icon;
                return (
                  <button key={route.id} type="button" onClick={() => selectRoute(route.id)} onMouseEnter={() => setSelectedIndex(index)} className={`flex w-full items-center gap-4 px-3 py-3 text-left transition-colors ${selectedIndex === index ? 'bg-[#242424]' : 'hover:bg-[#1b1b1b]'}`}>
                    <span className={`grid h-9 w-9 place-items-center border ${selectedIndex === index ? 'border-[#e45b3c] text-[#e45b3c]' : 'border-[#3b3b36] text-[#a7a7a0]'}`}><Icon size={17} /></span>
                    <span className="flex-1"><span className="block text-sm font-semibold text-[#f4f1e9]">{route.label}</span><span className="block text-xs text-[#a7a7a0]">{route.hint}</span></span>
                    <CornerDownLeft size={15} className="text-[#777770]" />
                  </button>
                );
              }) : <p className="px-3 py-8 text-center text-sm text-[#a7a7a0]">No route found — try “work” or “contact”.</p>}
            </div>
            <div className="flex items-center justify-between border-t border-[#2d2d2d] px-5 py-3 text-[10px] text-[#777770]">
              <span>↑↓ to navigate · Enter to launch</span>
              <a href="https://github.com/mahipatel1502" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-colors hover:text-[#d7eb5a]">Source <Github size={12} /><ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandDeck;
