import { GraduationCap, Award, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12 rounded-full"></div>
        
        {/* Professional Stats */}
     

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div
            className={`backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
              isDark
                ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
            }`}
          >
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Education</h3>
            <p className={`font-semibold mb-1 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>BTech in Computer Science</p>
            <p className="text-cyan-400 font-semibold mb-1">CHARUSAT University</p>
            <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>2023 - 2027</p>
            <div className={`inline-block px-4 py-2 rounded-full ${isDark ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-cyan-50 border border-cyan-200'}`}>
              <p className={`text-lg font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>CGPA: 9.00</p>
            </div>
          </div>

          <div
            className={`backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
              isDark
                ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
            }`}
          >
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
              <Award size={32} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Experience</h3>
            <p className={`font-semibold mb-1 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Node.js Intern</p>
            <p className="text-cyan-400 font-semibold mb-1">Sparks To Ideas</p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>May 2025 - June 2025</p>
            <p className={`text-xs mt-2 px-3 py-1 rounded-full inline-block ${isDark ? 'bg-slate-700/50 text-gray-400' : 'bg-gray-200 text-slate-600'}`}>Backend Development</p>
          </div>

          <div
            className={`backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
              isDark
                ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
            }`}
          >
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
              <Heart size={32} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Interests</h3>
            <ul className={`${isDark ? 'text-gray-400' : 'text-slate-600'} space-y-2`}>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Travelling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Drawing
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`backdrop-blur-sm p-8 md:p-10 rounded-xl border transition-all duration-300 hover:shadow-xl relative overflow-hidden ${
            isDark
              ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/30'
              : 'bg-white/50 border-gray-200 hover:border-cyan-400/30'
          }`}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <p className={`text-sm md:text-base leading-relaxed relative z-10 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            I'm a <span className="font-semibold text-cyan-400">Computer Science student</span> at CHARUSAT University pursuing my BTech with a passion for building innovative technology solutions. 
            My expertise spans <span className="font-semibold text-cyan-400">full-stack development, mobile applications, and machine learning</span>, with proficiency in modern technologies 
            like React Native, Node.js, Express.js, and Firebase.
          </p>
          <p className={`text-sm md:text-base leading-relaxed mt-4 relative z-10 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            With a strong foundation in programming languages including <span className="font-semibold text-cyan-400">JavaScript, Python, Java, and C++</span>, I've successfully delivered 
            diverse projects ranging from web applications to data science solutions. Currently maintaining a <span className="font-semibold text-cyan-400">CGPA of 9.00</span>, 
            I combine academic excellence with practical experience gained through internships and hands-on projects.
          </p>
          <p className={`text-sm md:text-base leading-relaxed mt-4 relative z-10 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            As an <span className="font-semibold text-cyan-400">ML Enthusiast and Problem Solver</span>, I'm constantly exploring emerging technologies and their applications. 
            My goal is to leverage my technical skills to create impactful solutions that address real-world challenges in collaborative and innovative environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
