import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();

  return (
    <section id="contact" className={`py-20 px-4 ${isDark ? 'bg-slate-800/30' : 'bg-gray-100/50'}`}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Contact Information
            </h3>
            <p className={`mb-8 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:mahiptl1502@gmail.com"
                className={`flex items-center gap-4 transition-colors group ${
                  isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-400'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-slate-700 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-500'
                      : 'bg-gray-200 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-500 text-slate-900'
                  }`}
                >
                  <Mail size={20} className="group-hover:text-white" />
                </div>
                <div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Email</p>
                  <p className="font-medium">mahiptl1502@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919879663276"
                className={`flex items-center gap-4 transition-colors group ${
                  isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-400'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-slate-700 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-500'
                      : 'bg-gray-200 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-500 text-slate-900'
                  }`}
                >
                  <Phone size={20} className="group-hover:text-white" />
                </div>
                <div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Phone</p>
                  <p className="font-medium">+91 9879663276</p>
                </div>
              </a>

              <div className={`flex items-center gap-4 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-slate-700' : 'bg-gray-200 text-slate-900'
                  }`}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Location</p>
                  <p className="font-medium">Kheda, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Connect with me:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mahipatel1502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all hover:scale-110 ${
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
                  className={`p-3 rounded-lg transition-all hover:scale-110 ${
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

          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                    isDark
                      ? 'bg-slate-700/50 border border-slate-600 focus:border-cyan-400'
                      : 'bg-gray-100 border border-gray-300 focus:border-cyan-400 text-slate-900'
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                    isDark
                      ? 'bg-slate-700/50 border border-slate-600 focus:border-cyan-400'
                      : 'bg-gray-100 border border-gray-300 focus:border-cyan-400 text-slate-900'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-colors resize-none ${
                    isDark
                      ? 'bg-slate-700/50 border border-slate-600 focus:border-cyan-400'
                      : 'bg-gray-100 border border-gray-300 focus:border-cyan-400 text-slate-900'
                  }`}
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 text-white"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
