import { Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 inline-block animate-fadeInDown">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center text-5xl font-bold mx-auto mb-4 shadow-2xl shadow-cyan-500/50 animate-float ring-4 ring-cyan-400/20">
            MP
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent animate-fadeInUp">
          Mahi Patel
        </h1>

        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-cyan-400 mb-6 font-semibold tracking-wide">
            Computer Science Student 
          </p>

          <p className={`text-base max-w-2xl mx-auto mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Computer Science student with a passion for web development. Skilled in React Native, Node.js, and Firebase,
            building innovative solutions for real-world problems.
          </p>
        </div>



        <div className="mt-12 animate-fadeInUp flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.8s' }}>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 ${
              isDark 
                ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-2xl hover:shadow-cyan-400/30'
                : 'border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-2xl hover:shadow-cyan-500/30'
            }`}
          >
            <Eye size={20} />
            <span>View Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
