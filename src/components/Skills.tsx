import { Code, Database, Cpu, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'C', 'C++', 'Python'],
    },
    {
      title: 'Web Technology',
      icon: Cpu,
      skills: ['React', 'React Native', 'Node.js', 'Express.js', 'Tailwind CSS'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'Firebase','Supabase'],
    },
    {
      title: 'Data Science & Machine Learning',
      icon: Cpu,
      skills: ['Pandas', 'NumPy', 'Matplotlib','TensorFlow','Scikit-Learn'],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className={`py-20 px-4 ${isDark ? 'bg-slate-800/30' : 'bg-gray-100/50'}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                    : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className={`text-base md:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{category.title}</h3>
                  </div>
                 
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default border ${
                        isDark
                          ? 'bg-slate-700/70 border-slate-600 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/20 text-gray-300'
                          : 'bg-gray-100 border-gray-300 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-400/20 hover:border-cyan-400/50 text-slate-700 hover:shadow-md hover:shadow-cyan-400/20'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
