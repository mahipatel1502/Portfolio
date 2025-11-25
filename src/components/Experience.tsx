import { Briefcase, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDark } = useTheme();

  const experiences = [
    {
      role: 'Node.js Intern',
      company: 'Sparks To Ideas',
      period: 'May 2025 - June 2025',
      description: 'Gained hands-on experience in backend development using Node.js and Express.js.',
      responsibilities: [
        'Developed RESTful APIs using Node.js and Express.js',
        'Worked with MongoDB for database management',
        'Collaborated with team members on real-world projects',
        'Learned best practices in backend development',
      ],
    },
  ];

  return (
    <section id="experience" className={`py-20 px-4 ${isDark ? 'bg-slate-800/30' : 'bg-gray-100/50'}`}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                  : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Briefcase size={28} className="text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                  <p className="text-base text-cyan-400 font-semibold mb-2">{exp.company}</p>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg inline-flex ${isDark ? 'bg-slate-700/50 text-gray-400' : 'bg-gray-100 text-slate-600'}`}>
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </div>

              <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{exp.description}</p>

              <div className={`pt-6 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
                <h4 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className={`flex items-start gap-3 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      <span className="text-cyan-400 mt-1.5 flex-shrink-0 font-bold">→</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
