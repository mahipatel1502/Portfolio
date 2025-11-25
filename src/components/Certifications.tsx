import { Award, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Certifications = () => {
  const { isDark } = useTheme();

  const certifications = [
    {
      title: 'Data Base Management',
      provider: 'NPTEL',
      date: 'March 2025',
      description: 'Comprehensive course covering database concepts, SQL, and database management systems.',
    },
    {
      title: 'Python for Data Science, AI and Development',
      provider: 'Coursera',
      date: 'July 2025',
      description: 'Learned Python fundamentals, data science libraries, and AI development basics.',
    },
    {
      title: 'CNN with TensorFlow: Basics of Machine Learning',
      provider: 'Coursera',
      date: 'July 2025',
      description: 'Studied convolutional neural networks and their implementation using TensorFlow.',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                  : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className={`text-base font-bold mb-1.5 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-xs">{cert.provider}</p>
                </div>
              </div>

              <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{cert.description}</p>

              <div className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg inline-flex ${isDark ? 'bg-slate-700/50 text-gray-400' : 'bg-gray-100 text-slate-600'}`}>
                <Calendar size={14} />
                <span className="font-medium">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
