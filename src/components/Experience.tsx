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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm p-8 rounded-xl border transition-all hover:shadow-lg ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                  : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase size={28} className="text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                  <p className="text-xl text-cyan-400 mb-2">{exp.company}</p>
                  <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>

              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{exp.description}</p>

              <div>
                <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className={`flex items-start gap-3 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                      <span>{resp}</span>
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
