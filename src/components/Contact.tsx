import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();

  return (
    <section id="contact" className={`py-20 px-4 ${isDark ? 'bg-slate-800/30' : 'bg-gray-100/50'}`}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          <div>
            <h3 className={`text-xl md:text-2xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Contact Information
            </h3>
            <p className={`mb-8 leading-relaxed text-center ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
              Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always open to discussing new projects and opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-5xl mx-auto">
              <a
                href="mailto:mahiptl1502@gmail.com"
                className={`flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 group hover:scale-105 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20'
                    : 'bg-white/50 border border-gray-200 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                    isDark
                      ? 'bg-slate-700 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-500'
                      : 'bg-gray-200 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-500 text-slate-900'
                  }`}
                >
                  <Mail size={20} className="group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className={`text-xs uppercase tracking-wider font-semibold ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Email</p>
                  <p className={`font-medium text-sm truncate ${isDark ? 'text-gray-300 group-hover:text-cyan-400' : 'text-slate-700 group-hover:text-cyan-600'}`}>mahiptl1502@gmail.com</p>
                </div>
              </a>

              <div className={`flex items-center gap-3 px-4 py-4 rounded-xl ${
                isDark
                  ? 'bg-slate-800/50 border border-slate-700'
                  : 'bg-white/50 border border-gray-200'
              }`}>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-slate-700' : 'bg-gray-200 text-slate-900'
                  }`}
                >
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <p className={`text-xs uppercase tracking-wider font-semibold ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Location</p>
                  <p className={`font-medium text-sm ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Kheda, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className={`mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Connect with me:</p>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/mahipatel1502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40 ${
                    isDark
                      ? 'bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500'
                      : 'bg-gray-200 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500 text-slate-900 hover:text-white'
                  }`}
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahi-patel-87072728b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40 ${
                    isDark
                      ? 'bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500'
                      : 'bg-gray-200 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500 text-slate-900 hover:text-white'
                  }`}
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
