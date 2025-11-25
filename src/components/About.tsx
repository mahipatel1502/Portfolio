import { GraduationCap, Award, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div
            className={`backdrop-blur-sm p-8 rounded-xl border transition-all hover:shadow-lg ${
              isDark
                ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
            }`}
          >
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Education</h3>
            <p className={isDark ? 'text-gray-400 mb-2' : 'text-slate-600 mb-2'}>BTech in Computer Science</p>
            <p className="text-cyan-400 font-semibold">CHARUSAT University</p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>2023-2027</p>
            <p className={`text-lg font-bold mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>CGPA: 9.00</p>
          </div>

          <div
            className={`backdrop-blur-sm p-8 rounded-xl border transition-all hover:shadow-lg ${
              isDark
                ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
            }`}
          >
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <Award size={32} className="text-white" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Experience</h3>
            <p className={isDark ? 'text-gray-400 mb-2' : 'text-slate-600 mb-2'}>Node.js Intern</p>
            <p className="text-cyan-400 font-semibold">Sparks To Ideas</p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>May 2025 - June 2025</p>
          </div>

          <div
            className={`backdrop-blur-sm p-8 rounded-xl border transition-all hover:shadow-lg ${
              isDark
                ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
            }`}
          >
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
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
          className={`backdrop-blur-sm p-8 rounded-xl border ${
            isDark
              ? 'bg-slate-800/50 border-slate-700'
              : 'bg-white/50 border-gray-200'
          }`}
        >
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            I'm a passionate Computer Science student at CHARUSAT University with a strong interest in web and mobile
            application development. With hands-on experience in technologies like React Native, Node.js, Express.js,
            and Firebase, I enjoy creating innovative solutions that solve real-world problems. Currently maintaining
            a CGPA of 9.00, I'm constantly learning and exploring new technologies to enhance my skills. I've completed
            internships and built several projects including a student-alumni networking app and a tour guide website.
            My goal is to leverage my technical expertise to contribute to impactful projects in collaborative environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
