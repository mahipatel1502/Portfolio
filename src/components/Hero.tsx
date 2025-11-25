import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-5xl font-bold mx-auto mb-4 shadow-lg shadow-cyan-500/50">
            MP
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
          Mahi Patel
        </h1>

        <p className="text-xl md:text-2xl text-cyan-400 mb-6">
          Full Stack Developer & Mobile App Developer
        </p>

        <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
          Computer Science student with a passion for web development. Skilled in React Native, Node.js, and Firebase,
          building innovative solutions for real-world problems.
        </p>

        <div className={`flex flex-wrap items-center justify-center gap-6 mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
          <a href="mailto:mahiptl1502@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail size={20} />
            <span>mahiptl1502@gmail.com</span>
          </a>
          <a href="tel:+919879663276" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone size={20} />
            <span>+91 9879663276</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>Kheda, Gujarat</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/mahipatel1502"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 ${
              isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300 text-slate-900'
            }`}
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahi-patel-87072728b"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 ${
              isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300 text-slate-900'
            }`}
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
