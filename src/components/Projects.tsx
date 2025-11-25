import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'Edu-Bridge',
      description: 'A mobile app connecting students with alumni for mentorship, career guidance, and exam preparation. Enhances networking and fosters informed decision-making.',
      technologies: ['React Native', 'Node.js', 'Firebase'],
      github: 'https://github.com/mahipatel1502/Edu-bridge',
      period: 'February 2025 - April 2025',
      highlights: [
        'Real-time messaging between students and alumni',
        'Profile management and matching system',
        'Career guidance and mentorship features',
      ],
    },
    {
      title: 'Tour Guide Website',
      description: 'Interactive website showcasing tourist attractions with multilingual support, integrated maps, and user-generated content.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      github: 'https://github.com/mahipatel1502/Full-stack-Development',
      liveUrl: 'https://travello-go.vercel.app/',
      period: 'August 2024 - November 2024',
      highlights: [
        'Multilingual support for better accessibility',
        'Interactive maps integration',
        'User reviews and ratings system',
      ],
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col group ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                  : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                        isDark ? 'bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30' : 'bg-gray-200 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-400 text-slate-900 hover:text-white hover:shadow-lg hover:shadow-cyan-400/30'
                      }`}
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                        isDark ? 'bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30' : 'bg-gray-200 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-400 text-slate-900 hover:text-white hover:shadow-lg hover:shadow-cyan-400/30'
                      }`}
                      title="View Live"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <p className="text-sm text-cyan-400">{project.period}</p>
                {project.liveUrl && (
                  <span className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-50 text-green-600'}`}>
                    Live
                  </span>
                )}
              </div>

              <p className={`mb-4 flex-grow leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{project.description}</p>

              <div className="mb-4">
                <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'}">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 ${
                      isDark ? 'bg-slate-700/70 text-cyan-400 border border-slate-600' : 'bg-gray-100 text-cyan-600 border border-gray-300'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
