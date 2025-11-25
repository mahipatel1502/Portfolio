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
      skills: ['MongoDB', 'Firebase'],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Pandas', 'NumPy', 'Matplotlib'],
    },
  ];

  return (
    <section id="skills" className={`py-20 px-4 ${isDark ? 'bg-slate-800/30' : 'bg-gray-100/50'}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`backdrop-blur-sm p-8 rounded-xl border transition-all hover:shadow-lg ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                    : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        isDark
                          ? 'bg-slate-700/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border hover:border-cyan-500/50'
                          : 'bg-gray-200/50 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-400/20 hover:border hover:border-cyan-400/50 text-slate-900'
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
