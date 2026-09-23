import { ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-[#2d2d2d] bg-[#080808] px-5 py-16 md:px-10 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
          <div>
            <p className="section-kicker mb-5 text-xs text-[#e45b3c]">End of route / next stop</p>
            <h2 className="max-w-2xl text-4xl font-bold leading-[0.95] text-[#f4f1e9] md:text-6xl">
              Have a problem worth solving?
            </h2>
            <a href="mailto:mahiptl1502@gmail.com" className="mt-8 inline-flex items-center gap-3 border-b border-[#d7eb5a] pb-3 text-sm font-semibold text-[#d7eb5a] transition-colors hover:border-[#e45b3c] hover:text-[#e45b3c]">
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="section-kicker mb-5 text-[10px] text-[#8d8d87]">Explore</p>
              <div className="flex flex-col items-start gap-3 text-[#b9b9b0]">
                <a href="#projects" className="transition-colors hover:text-[#d7eb5a]">Work</a>
                <a href="#about" className="transition-colors hover:text-[#d7eb5a]">About</a>
                <a href="#skills" className="transition-colors hover:text-[#d7eb5a]">Skills</a>
                <a href="#certifications" className="transition-colors hover:text-[#d7eb5a]">Certificates</a>
              </div>
            </div>
            <div>
              <p className="section-kicker mb-5 text-[10px] text-[#8d8d87]">Connect</p>
              <div className="flex flex-col items-start gap-3 text-[#b9b9b0]">
                <a href="mailto:mahiptl1502@gmail.com" className="transition-colors hover:text-[#d7eb5a]">Email</a>
                <a href="https://github.com/mahipatel1502" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#d7eb5a]">GitHub</a>
                <a href="https://www.linkedin.com/in/mahi-patel-87072728b" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#d7eb5a]">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#2d2d2d] pt-6 text-xs text-[#8d8d87] md:flex-row">
          <p className="flex items-center gap-2">Made with <Heart size={14} className="fill-[#e45b3c] text-[#e45b3c]" /> by Mahi Patel</p>
          <p>© {new Date().getFullYear()} / All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
